# `kmipSecretRole` Submodule <a name="`kmipSecretRole` Submodule" id="@cdktf/provider-vault.kmipSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretRole <a name="KmipSecretRole" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role vault_kmip_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_role

kmipSecretRole.KmipSecretRole(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  path: str,
  role: str,
  scope: str,
  id: str = None,
  namespace: str = None,
  operation_activate: bool | IResolvable = None,
  operation_add_attribute: bool | IResolvable = None,
  operation_all: bool | IResolvable = None,
  operation_create: bool | IResolvable = None,
  operation_destroy: bool | IResolvable = None,
  operation_discover_versions: bool | IResolvable = None,
  operation_get: bool | IResolvable = None,
  operation_get_attribute_list: bool | IResolvable = None,
  operation_get_attributes: bool | IResolvable = None,
  operation_locate: bool | IResolvable = None,
  operation_none: bool | IResolvable = None,
  operation_register: bool | IResolvable = None,
  operation_rekey: bool | IResolvable = None,
  operation_revoke: bool | IResolvable = None,
  tls_client_key_bits: typing.Union[int, float] = None,
  tls_client_key_type: str = None,
  tls_client_ttl: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.path">path</a></code> | <code>str</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.role">role</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Name of the scope. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationActivate">operation_activate</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Activate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAddAttribute">operation_add_attribute</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Add Attribute operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAll">operation_all</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant all permissions to this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationCreate">operation_create</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Create operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDestroy">operation_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Destroy operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDiscoverVersions">operation_discover_versions</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Discover Version operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGet">operation_get</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Get operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributeList">operation_get_attribute_list</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attribute List operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributes">operation_get_attributes</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attributes operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationLocate">operation_locate</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Locate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationNone">operation_none</a></code> | <code>bool \| cdktf.IResolvable</code> | Remove all permissions from this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRegister">operation_register</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Register operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRekey">operation_rekey</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Rekey operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRevoke">operation_revoke</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Revoke operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyBits">tls_client_key_bits</a></code> | <code>typing.Union[int, float]</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyType">tls_client_key_type</a></code> | <code>str</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientTtl">tls_client_ttl</a></code> | <code>typing.Union[int, float]</code> | Client certificate TTL in seconds. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.path"></a>

- *Type:* str

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.role"></a>

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope"></a>

- *Type:* str

Name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}

---

##### `operation_activate`<sup>Optional</sup> <a name="operation_activate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationActivate"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Activate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}

---

##### `operation_add_attribute`<sup>Optional</sup> <a name="operation_add_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAddAttribute"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Add Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}

---

##### `operation_all`<sup>Optional</sup> <a name="operation_all" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationAll"></a>

- *Type:* bool | cdktf.IResolvable

Grant all permissions to this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}

---

##### `operation_create`<sup>Optional</sup> <a name="operation_create" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationCreate"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}

---

##### `operation_destroy`<sup>Optional</sup> <a name="operation_destroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDestroy"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}

---

##### `operation_discover_versions`<sup>Optional</sup> <a name="operation_discover_versions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationDiscoverVersions"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Discover Version operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}

---

##### `operation_get`<sup>Optional</sup> <a name="operation_get" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGet"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Get operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}

---

##### `operation_get_attribute_list`<sup>Optional</sup> <a name="operation_get_attribute_list" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributeList"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Get Attribute List operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}

---

##### `operation_get_attributes`<sup>Optional</sup> <a name="operation_get_attributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationGetAttributes"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Get Attributes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}

---

##### `operation_locate`<sup>Optional</sup> <a name="operation_locate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationLocate"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Locate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}

---

##### `operation_none`<sup>Optional</sup> <a name="operation_none" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationNone"></a>

- *Type:* bool | cdktf.IResolvable

Remove all permissions from this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}

---

##### `operation_register`<sup>Optional</sup> <a name="operation_register" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRegister"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Register operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}

---

##### `operation_rekey`<sup>Optional</sup> <a name="operation_rekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRekey"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Rekey operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}

---

##### `operation_revoke`<sup>Optional</sup> <a name="operation_revoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.operationRevoke"></a>

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Revoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}

---

##### `tls_client_key_bits`<sup>Optional</sup> <a name="tls_client_key_bits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyBits"></a>

- *Type:* typing.Union[int, float]

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}

---

##### `tls_client_key_type`<sup>Optional</sup> <a name="tls_client_key_type" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientKeyType"></a>

- *Type:* str

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}

---

##### `tls_client_ttl`<sup>Optional</sup> <a name="tls_client_ttl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.tlsClientTtl"></a>

- *Type:* typing.Union[int, float]

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate">reset_operation_activate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute">reset_operation_add_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll">reset_operation_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate">reset_operation_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy">reset_operation_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions">reset_operation_discover_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet">reset_operation_get</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList">reset_operation_get_attribute_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes">reset_operation_get_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate">reset_operation_locate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone">reset_operation_none</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister">reset_operation_register</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey">reset_operation_rekey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke">reset_operation_revoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits">reset_tls_client_key_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType">reset_tls_client_key_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl">reset_tls_client_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_operation_activate` <a name="reset_operation_activate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate"></a>

```python
def reset_operation_activate() -> None
```

##### `reset_operation_add_attribute` <a name="reset_operation_add_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute"></a>

```python
def reset_operation_add_attribute() -> None
```

##### `reset_operation_all` <a name="reset_operation_all" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll"></a>

```python
def reset_operation_all() -> None
```

##### `reset_operation_create` <a name="reset_operation_create" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate"></a>

```python
def reset_operation_create() -> None
```

##### `reset_operation_destroy` <a name="reset_operation_destroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy"></a>

```python
def reset_operation_destroy() -> None
```

##### `reset_operation_discover_versions` <a name="reset_operation_discover_versions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions"></a>

```python
def reset_operation_discover_versions() -> None
```

##### `reset_operation_get` <a name="reset_operation_get" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet"></a>

```python
def reset_operation_get() -> None
```

##### `reset_operation_get_attribute_list` <a name="reset_operation_get_attribute_list" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList"></a>

```python
def reset_operation_get_attribute_list() -> None
```

##### `reset_operation_get_attributes` <a name="reset_operation_get_attributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes"></a>

```python
def reset_operation_get_attributes() -> None
```

##### `reset_operation_locate` <a name="reset_operation_locate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate"></a>

```python
def reset_operation_locate() -> None
```

##### `reset_operation_none` <a name="reset_operation_none" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone"></a>

```python
def reset_operation_none() -> None
```

##### `reset_operation_register` <a name="reset_operation_register" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister"></a>

```python
def reset_operation_register() -> None
```

##### `reset_operation_rekey` <a name="reset_operation_rekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey"></a>

```python
def reset_operation_rekey() -> None
```

##### `reset_operation_revoke` <a name="reset_operation_revoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke"></a>

```python
def reset_operation_revoke() -> None
```

##### `reset_tls_client_key_bits` <a name="reset_tls_client_key_bits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits"></a>

```python
def reset_tls_client_key_bits() -> None
```

##### `reset_tls_client_key_type` <a name="reset_tls_client_key_type" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType"></a>

```python
def reset_tls_client_key_type() -> None
```

##### `reset_tls_client_ttl` <a name="reset_tls_client_ttl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl"></a>

```python
def reset_tls_client_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmipSecretRole resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_role

kmipSecretRole.KmipSecretRole.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_role

kmipSecretRole.KmipSecretRole.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_role

kmipSecretRole.KmipSecretRole.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_role

kmipSecretRole.KmipSecretRole.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmipSecretRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmipSecretRole to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmipSecretRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmipSecretRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput">operation_activate_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput">operation_add_attribute_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput">operation_all_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput">operation_create_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput">operation_destroy_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput">operation_discover_versions_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput">operation_get_attribute_list_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput">operation_get_attributes_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput">operation_get_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput">operation_locate_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput">operation_none_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput">operation_register_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput">operation_rekey_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput">operation_revoke_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput">tls_client_key_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput">tls_client_key_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput">tls_client_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate">operation_activate</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute">operation_add_attribute</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll">operation_all</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate">operation_create</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy">operation_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions">operation_discover_versions</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet">operation_get</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList">operation_get_attribute_list</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes">operation_get_attributes</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate">operation_locate</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone">operation_none</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister">operation_register</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey">operation_rekey</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke">operation_revoke</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits">tls_client_key_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType">tls_client_key_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl">tls_client_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `operation_activate_input`<sup>Optional</sup> <a name="operation_activate_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput"></a>

```python
operation_activate_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_add_attribute_input`<sup>Optional</sup> <a name="operation_add_attribute_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput"></a>

```python
operation_add_attribute_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_all_input`<sup>Optional</sup> <a name="operation_all_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput"></a>

```python
operation_all_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_create_input`<sup>Optional</sup> <a name="operation_create_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput"></a>

```python
operation_create_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_destroy_input`<sup>Optional</sup> <a name="operation_destroy_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput"></a>

```python
operation_destroy_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_discover_versions_input`<sup>Optional</sup> <a name="operation_discover_versions_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput"></a>

```python
operation_discover_versions_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_get_attribute_list_input`<sup>Optional</sup> <a name="operation_get_attribute_list_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput"></a>

```python
operation_get_attribute_list_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_get_attributes_input`<sup>Optional</sup> <a name="operation_get_attributes_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput"></a>

```python
operation_get_attributes_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_get_input`<sup>Optional</sup> <a name="operation_get_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput"></a>

```python
operation_get_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_locate_input`<sup>Optional</sup> <a name="operation_locate_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput"></a>

```python
operation_locate_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_none_input`<sup>Optional</sup> <a name="operation_none_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput"></a>

```python
operation_none_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_register_input`<sup>Optional</sup> <a name="operation_register_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput"></a>

```python
operation_register_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_rekey_input`<sup>Optional</sup> <a name="operation_rekey_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput"></a>

```python
operation_rekey_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_revoke_input`<sup>Optional</sup> <a name="operation_revoke_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput"></a>

```python
operation_revoke_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `tls_client_key_bits_input`<sup>Optional</sup> <a name="tls_client_key_bits_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput"></a>

```python
tls_client_key_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_client_key_type_input`<sup>Optional</sup> <a name="tls_client_key_type_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput"></a>

```python
tls_client_key_type_input: str
```

- *Type:* str

---

##### `tls_client_ttl_input`<sup>Optional</sup> <a name="tls_client_ttl_input" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput"></a>

```python
tls_client_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `operation_activate`<sup>Required</sup> <a name="operation_activate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate"></a>

```python
operation_activate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_add_attribute`<sup>Required</sup> <a name="operation_add_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute"></a>

```python
operation_add_attribute: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_all`<sup>Required</sup> <a name="operation_all" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll"></a>

```python
operation_all: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_create`<sup>Required</sup> <a name="operation_create" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate"></a>

```python
operation_create: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_destroy`<sup>Required</sup> <a name="operation_destroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy"></a>

```python
operation_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_discover_versions`<sup>Required</sup> <a name="operation_discover_versions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions"></a>

```python
operation_discover_versions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_get`<sup>Required</sup> <a name="operation_get" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet"></a>

```python
operation_get: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_get_attribute_list`<sup>Required</sup> <a name="operation_get_attribute_list" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList"></a>

```python
operation_get_attribute_list: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_get_attributes`<sup>Required</sup> <a name="operation_get_attributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes"></a>

```python
operation_get_attributes: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_locate`<sup>Required</sup> <a name="operation_locate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate"></a>

```python
operation_locate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_none`<sup>Required</sup> <a name="operation_none" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone"></a>

```python
operation_none: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_register`<sup>Required</sup> <a name="operation_register" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister"></a>

```python
operation_register: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_rekey`<sup>Required</sup> <a name="operation_rekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey"></a>

```python
operation_rekey: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `operation_revoke`<sup>Required</sup> <a name="operation_revoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke"></a>

```python
operation_revoke: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `tls_client_key_bits`<sup>Required</sup> <a name="tls_client_key_bits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits"></a>

```python
tls_client_key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tls_client_key_type`<sup>Required</sup> <a name="tls_client_key_type" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType"></a>

```python
tls_client_key_type: str
```

- *Type:* str

---

##### `tls_client_ttl`<sup>Required</sup> <a name="tls_client_ttl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl"></a>

```python
tls_client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretRoleConfig <a name="KmipSecretRoleConfig" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import kmip_secret_role

kmipSecretRole.KmipSecretRoleConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  path: str,
  role: str,
  scope: str,
  id: str = None,
  namespace: str = None,
  operation_activate: bool | IResolvable = None,
  operation_add_attribute: bool | IResolvable = None,
  operation_all: bool | IResolvable = None,
  operation_create: bool | IResolvable = None,
  operation_destroy: bool | IResolvable = None,
  operation_discover_versions: bool | IResolvable = None,
  operation_get: bool | IResolvable = None,
  operation_get_attribute_list: bool | IResolvable = None,
  operation_get_attributes: bool | IResolvable = None,
  operation_locate: bool | IResolvable = None,
  operation_none: bool | IResolvable = None,
  operation_register: bool | IResolvable = None,
  operation_rekey: bool | IResolvable = None,
  operation_revoke: bool | IResolvable = None,
  tls_client_key_bits: typing.Union[int, float] = None,
  tls_client_key_type: str = None,
  tls_client_ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path">path</a></code> | <code>str</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role">role</a></code> | <code>str</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope">scope</a></code> | <code>str</code> | Name of the scope. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate">operation_activate</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Activate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute">operation_add_attribute</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Add Attribute operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll">operation_all</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant all permissions to this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate">operation_create</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Create operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy">operation_destroy</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Destroy operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions">operation_discover_versions</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Discover Version operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet">operation_get</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Get operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList">operation_get_attribute_list</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attribute List operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes">operation_get_attributes</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attributes operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate">operation_locate</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Locate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone">operation_none</a></code> | <code>bool \| cdktf.IResolvable</code> | Remove all permissions from this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister">operation_register</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Register operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey">operation_rekey</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Rekey operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke">operation_revoke</a></code> | <code>bool \| cdktf.IResolvable</code> | Grant permission to use the KMIP Revoke operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits">tls_client_key_bits</a></code> | <code>typing.Union[int, float]</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType">tls_client_key_type</a></code> | <code>str</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl">tls_client_ttl</a></code> | <code>typing.Union[int, float]</code> | Client certificate TTL in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#path KmipSecretRole#path}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#role KmipSecretRole#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#id KmipSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}

---

##### `operation_activate`<sup>Optional</sup> <a name="operation_activate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate"></a>

```python
operation_activate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Activate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}

---

##### `operation_add_attribute`<sup>Optional</sup> <a name="operation_add_attribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute"></a>

```python
operation_add_attribute: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Add Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}

---

##### `operation_all`<sup>Optional</sup> <a name="operation_all" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll"></a>

```python
operation_all: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant all permissions to this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}

---

##### `operation_create`<sup>Optional</sup> <a name="operation_create" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate"></a>

```python
operation_create: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}

---

##### `operation_destroy`<sup>Optional</sup> <a name="operation_destroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy"></a>

```python
operation_destroy: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}

---

##### `operation_discover_versions`<sup>Optional</sup> <a name="operation_discover_versions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions"></a>

```python
operation_discover_versions: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Discover Version operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}

---

##### `operation_get`<sup>Optional</sup> <a name="operation_get" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet"></a>

```python
operation_get: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Get operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}

---

##### `operation_get_attribute_list`<sup>Optional</sup> <a name="operation_get_attribute_list" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList"></a>

```python
operation_get_attribute_list: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Get Attribute List operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}

---

##### `operation_get_attributes`<sup>Optional</sup> <a name="operation_get_attributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes"></a>

```python
operation_get_attributes: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Get Attributes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}

---

##### `operation_locate`<sup>Optional</sup> <a name="operation_locate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate"></a>

```python
operation_locate: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Locate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}

---

##### `operation_none`<sup>Optional</sup> <a name="operation_none" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone"></a>

```python
operation_none: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Remove all permissions from this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}

---

##### `operation_register`<sup>Optional</sup> <a name="operation_register" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister"></a>

```python
operation_register: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Register operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}

---

##### `operation_rekey`<sup>Optional</sup> <a name="operation_rekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey"></a>

```python
operation_rekey: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Rekey operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}

---

##### `operation_revoke`<sup>Optional</sup> <a name="operation_revoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke"></a>

```python
operation_revoke: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Grant permission to use the KMIP Revoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}

---

##### `tls_client_key_bits`<sup>Optional</sup> <a name="tls_client_key_bits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits"></a>

```python
tls_client_key_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}

---

##### `tls_client_key_type`<sup>Optional</sup> <a name="tls_client_key_type" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType"></a>

```python
tls_client_key_type: str
```

- *Type:* str

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}

---

##### `tls_client_ttl`<sup>Optional</sup> <a name="tls_client_ttl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl"></a>

```python
tls_client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}

---



