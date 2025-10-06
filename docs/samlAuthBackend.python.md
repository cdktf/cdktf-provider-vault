# `samlAuthBackend` Submodule <a name="`samlAuthBackend` Submodule" id="@cdktf/provider-vault.samlAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlAuthBackend <a name="SamlAuthBackend" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend vault_saml_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import saml_auth_backend

samlAuthBackend.SamlAuthBackend(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acs_urls: typing.List[str],
  entity_id: str,
  default_role: str = None,
  disable_remount: bool | IResolvable = None,
  id: str = None,
  idp_cert: str = None,
  idp_entity_id: str = None,
  idp_metadata_url: str = None,
  idp_sso_url: str = None,
  namespace: str = None,
  path: str = None,
  verbose_logging: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.acsUrls">acs_urls</a></code> | <code>typing.List[str]</code> | The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.entityId">entity_id</a></code> | <code>str</code> | The entity ID of the SAML authentication service provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.defaultRole">default_role</a></code> | <code>str</code> | The role to use if no role is provided during login. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpCert">idp_cert</a></code> | <code>str</code> | The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpEntityId">idp_entity_id</a></code> | <code>str</code> | The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpMetadataUrl">idp_metadata_url</a></code> | <code>str</code> | The metadata URL of the identity provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpSsoUrl">idp_sso_url</a></code> | <code>str</code> | The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.path">path</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.verboseLogging">verbose_logging</a></code> | <code>bool \| cdktf.IResolvable</code> | Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `acs_urls`<sup>Required</sup> <a name="acs_urls" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.acsUrls"></a>

- *Type:* typing.List[str]

The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#acs_urls SamlAuthBackend#acs_urls}

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.entityId"></a>

- *Type:* str

The entity ID of the SAML authentication service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#entity_id SamlAuthBackend#entity_id}

---

##### `default_role`<sup>Optional</sup> <a name="default_role" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.defaultRole"></a>

- *Type:* str

The role to use if no role is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#default_role SamlAuthBackend#default_role}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.disableRemount"></a>

- *Type:* bool | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#disable_remount SamlAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_cert`<sup>Optional</sup> <a name="idp_cert" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpCert"></a>

- *Type:* str

The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_cert SamlAuthBackend#idp_cert}

---

##### `idp_entity_id`<sup>Optional</sup> <a name="idp_entity_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpEntityId"></a>

- *Type:* str

The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_entity_id SamlAuthBackend#idp_entity_id}

---

##### `idp_metadata_url`<sup>Optional</sup> <a name="idp_metadata_url" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpMetadataUrl"></a>

- *Type:* str

The metadata URL of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_metadata_url SamlAuthBackend#idp_metadata_url}

---

##### `idp_sso_url`<sup>Optional</sup> <a name="idp_sso_url" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.idpSsoUrl"></a>

- *Type:* str

The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_sso_url SamlAuthBackend#idp_sso_url}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#namespace SamlAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.path"></a>

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#path SamlAuthBackend#path}

---

##### `verbose_logging`<sup>Optional</sup> <a name="verbose_logging" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.Initializer.parameter.verboseLogging"></a>

- *Type:* bool | cdktf.IResolvable

Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#verbose_logging SamlAuthBackend#verbose_logging}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDefaultRole">reset_default_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDisableRemount">reset_disable_remount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpCert">reset_idp_cert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpEntityId">reset_idp_entity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpMetadataUrl">reset_idp_metadata_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpSsoUrl">reset_idp_sso_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetVerboseLogging">reset_verbose_logging</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_default_role` <a name="reset_default_role" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDefaultRole"></a>

```python
def reset_default_role() -> None
```

##### `reset_disable_remount` <a name="reset_disable_remount" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetDisableRemount"></a>

```python
def reset_disable_remount() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idp_cert` <a name="reset_idp_cert" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpCert"></a>

```python
def reset_idp_cert() -> None
```

##### `reset_idp_entity_id` <a name="reset_idp_entity_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpEntityId"></a>

```python
def reset_idp_entity_id() -> None
```

##### `reset_idp_metadata_url` <a name="reset_idp_metadata_url" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpMetadataUrl"></a>

```python
def reset_idp_metadata_url() -> None
```

##### `reset_idp_sso_url` <a name="reset_idp_sso_url" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetIdpSsoUrl"></a>

```python
def reset_idp_sso_url() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_verbose_logging` <a name="reset_verbose_logging" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.resetVerboseLogging"></a>

```python
def reset_verbose_logging() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SamlAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import saml_auth_backend

samlAuthBackend.SamlAuthBackend.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import saml_auth_backend

samlAuthBackend.SamlAuthBackend.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import saml_auth_backend

samlAuthBackend.SamlAuthBackend.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import saml_auth_backend

samlAuthBackend.SamlAuthBackend.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SamlAuthBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SamlAuthBackend to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SamlAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SamlAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrlsInput">acs_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRoleInput">default_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemountInput">disable_remount_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityIdInput">entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCertInput">idp_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityIdInput">idp_entity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrlInput">idp_metadata_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrlInput">idp_sso_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLoggingInput">verbose_logging_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrls">acs_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRole">default_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityId">entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCert">idp_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityId">idp_entity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrl">idp_metadata_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrl">idp_sso_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLogging">verbose_logging</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `acs_urls_input`<sup>Optional</sup> <a name="acs_urls_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrlsInput"></a>

```python
acs_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_role_input`<sup>Optional</sup> <a name="default_role_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRoleInput"></a>

```python
default_role_input: str
```

- *Type:* str

---

##### `disable_remount_input`<sup>Optional</sup> <a name="disable_remount_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemountInput"></a>

```python
disable_remount_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `entity_id_input`<sup>Optional</sup> <a name="entity_id_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityIdInput"></a>

```python
entity_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idp_cert_input`<sup>Optional</sup> <a name="idp_cert_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCertInput"></a>

```python
idp_cert_input: str
```

- *Type:* str

---

##### `idp_entity_id_input`<sup>Optional</sup> <a name="idp_entity_id_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityIdInput"></a>

```python
idp_entity_id_input: str
```

- *Type:* str

---

##### `idp_metadata_url_input`<sup>Optional</sup> <a name="idp_metadata_url_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrlInput"></a>

```python
idp_metadata_url_input: str
```

- *Type:* str

---

##### `idp_sso_url_input`<sup>Optional</sup> <a name="idp_sso_url_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrlInput"></a>

```python
idp_sso_url_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `verbose_logging_input`<sup>Optional</sup> <a name="verbose_logging_input" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLoggingInput"></a>

```python
verbose_logging_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `acs_urls`<sup>Required</sup> <a name="acs_urls" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.acsUrls"></a>

```python
acs_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_role`<sup>Required</sup> <a name="default_role" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.defaultRole"></a>

```python
default_role: str
```

- *Type:* str

---

##### `disable_remount`<sup>Required</sup> <a name="disable_remount" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.disableRemount"></a>

```python
disable_remount: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idp_cert`<sup>Required</sup> <a name="idp_cert" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpCert"></a>

```python
idp_cert: str
```

- *Type:* str

---

##### `idp_entity_id`<sup>Required</sup> <a name="idp_entity_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpEntityId"></a>

```python
idp_entity_id: str
```

- *Type:* str

---

##### `idp_metadata_url`<sup>Required</sup> <a name="idp_metadata_url" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpMetadataUrl"></a>

```python
idp_metadata_url: str
```

- *Type:* str

---

##### `idp_sso_url`<sup>Required</sup> <a name="idp_sso_url" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.idpSsoUrl"></a>

```python
idp_sso_url: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `verbose_logging`<sup>Required</sup> <a name="verbose_logging" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.verboseLogging"></a>

```python
verbose_logging: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackend.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAuthBackendConfig <a name="SamlAuthBackendConfig" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import saml_auth_backend

samlAuthBackend.SamlAuthBackendConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  acs_urls: typing.List[str],
  entity_id: str,
  default_role: str = None,
  disable_remount: bool | IResolvable = None,
  id: str = None,
  idp_cert: str = None,
  idp_entity_id: str = None,
  idp_metadata_url: str = None,
  idp_sso_url: str = None,
  namespace: str = None,
  path: str = None,
  verbose_logging: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.acsUrls">acs_urls</a></code> | <code>typing.List[str]</code> | The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.entityId">entity_id</a></code> | <code>str</code> | The entity ID of the SAML authentication service provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.defaultRole">default_role</a></code> | <code>str</code> | The role to use if no role is provided during login. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.disableRemount">disable_remount</a></code> | <code>bool \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpCert">idp_cert</a></code> | <code>str</code> | The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpEntityId">idp_entity_id</a></code> | <code>str</code> | The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpMetadataUrl">idp_metadata_url</a></code> | <code>str</code> | The metadata URL of the identity provider. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpSsoUrl">idp_sso_url</a></code> | <code>str</code> | The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.path">path</a></code> | <code>str</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.verboseLogging">verbose_logging</a></code> | <code>bool \| cdktf.IResolvable</code> | Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `acs_urls`<sup>Required</sup> <a name="acs_urls" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.acsUrls"></a>

```python
acs_urls: typing.List[str]
```

- *Type:* typing.List[str]

The well-formatted URLs of your Assertion Consumer Service (ACS) that should receive a response from the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#acs_urls SamlAuthBackend#acs_urls}

---

##### `entity_id`<sup>Required</sup> <a name="entity_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.entityId"></a>

```python
entity_id: str
```

- *Type:* str

The entity ID of the SAML authentication service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#entity_id SamlAuthBackend#entity_id}

---

##### `default_role`<sup>Optional</sup> <a name="default_role" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.defaultRole"></a>

```python
default_role: str
```

- *Type:* str

The role to use if no role is provided during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#default_role SamlAuthBackend#default_role}

---

##### `disable_remount`<sup>Optional</sup> <a name="disable_remount" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.disableRemount"></a>

```python
disable_remount: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#disable_remount SamlAuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#id SamlAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idp_cert`<sup>Optional</sup> <a name="idp_cert" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpCert"></a>

```python
idp_cert: str
```

- *Type:* str

The PEM encoded certificate of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_cert SamlAuthBackend#idp_cert}

---

##### `idp_entity_id`<sup>Optional</sup> <a name="idp_entity_id" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpEntityId"></a>

```python
idp_entity_id: str
```

- *Type:* str

The entity ID of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_entity_id SamlAuthBackend#idp_entity_id}

---

##### `idp_metadata_url`<sup>Optional</sup> <a name="idp_metadata_url" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpMetadataUrl"></a>

```python
idp_metadata_url: str
```

- *Type:* str

The metadata URL of the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_metadata_url SamlAuthBackend#idp_metadata_url}

---

##### `idp_sso_url`<sup>Optional</sup> <a name="idp_sso_url" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.idpSsoUrl"></a>

```python
idp_sso_url: str
```

- *Type:* str

The SSO URL of the identity provider. Mutually exclusive with 'idp_metadata_url'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#idp_sso_url SamlAuthBackend#idp_sso_url}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#namespace SamlAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#path SamlAuthBackend#path}

---

##### `verbose_logging`<sup>Optional</sup> <a name="verbose_logging" id="@cdktf/provider-vault.samlAuthBackend.SamlAuthBackendConfig.property.verboseLogging"></a>

```python
verbose_logging: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Log additional, potentially sensitive information during the SAML exchange according to the current logging level. Not recommended for production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/saml_auth_backend#verbose_logging SamlAuthBackend#verbose_logging}

---



