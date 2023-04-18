# `vault_identity_oidc_client`

Refer to the Terraform Registory for docs: [`vault_identity_oidc_client`](https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client).

# `identityOidcClient` Submodule <a name="`identityOidcClient` Submodule" id="@cdktf/provider-vault.identityOidcClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcClient <a name="IdentityOidcClient" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client vault_identity_oidc_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_oidc_client

identityOidcClient.IdentityOidcClient(
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
  access_token_ttl: typing.Union[int, float] = None,
  assignments: typing.List[str] = None,
  client_type: str = None,
  id: str = None,
  id_token_ttl: typing.Union[int, float] = None,
  key: str = None,
  namespace: str = None,
  redirect_uris: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.accessTokenTtl">access_token_ttl</a></code> | <code>typing.Union[int, float]</code> | The time-to-live for access tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.assignments">assignments</a></code> | <code>typing.List[str]</code> | A list of assignment resources associated with the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.clientType">client_type</a></code> | <code>str</code> | The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.idTokenTtl">id_token_ttl</a></code> | <code>typing.Union[int, float]</code> | The time-to-live for ID tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.key">key</a></code> | <code>str</code> | A reference to a named key resource in Vault. This cannot be modified after creation. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | Redirection URI values used by the client. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.name"></a>

- *Type:* str

The name of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#name IdentityOidcClient#name}

---

##### `access_token_ttl`<sup>Optional</sup> <a name="access_token_ttl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.accessTokenTtl"></a>

- *Type:* typing.Union[int, float]

The time-to-live for access tokens obtained by the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#access_token_ttl IdentityOidcClient#access_token_ttl}

---

##### `assignments`<sup>Optional</sup> <a name="assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.assignments"></a>

- *Type:* typing.List[str]

A list of assignment resources associated with the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#assignments IdentityOidcClient#assignments}

---

##### `client_type`<sup>Optional</sup> <a name="client_type" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.clientType"></a>

- *Type:* str

The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#client_type IdentityOidcClient#client_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `id_token_ttl`<sup>Optional</sup> <a name="id_token_ttl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.idTokenTtl"></a>

- *Type:* typing.Union[int, float]

The time-to-live for ID tokens obtained by the client.

The value should be less than the verification_ttl on the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#id_token_ttl IdentityOidcClient#id_token_ttl}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.key"></a>

- *Type:* str

A reference to a named key resource in Vault. This cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#key IdentityOidcClient#key}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#namespace IdentityOidcClient#namespace}

---

##### `redirect_uris`<sup>Optional</sup> <a name="redirect_uris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.Initializer.parameter.redirectUris"></a>

- *Type:* typing.List[str]

Redirection URI values used by the client.

One of these values must exactly match the redirect_uri parameter value used in each authentication request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#redirect_uris IdentityOidcClient#redirect_uris}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAccessTokenTtl">reset_access_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAssignments">reset_assignments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetClientType">reset_client_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetIdTokenTtl">reset_id_token_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetRedirectUris">reset_redirect_uris</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_access_token_ttl` <a name="reset_access_token_ttl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAccessTokenTtl"></a>

```python
def reset_access_token_ttl() -> None
```

##### `reset_assignments` <a name="reset_assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetAssignments"></a>

```python
def reset_assignments() -> None
```

##### `reset_client_type` <a name="reset_client_type" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetClientType"></a>

```python
def reset_client_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_id_token_ttl` <a name="reset_id_token_ttl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetIdTokenTtl"></a>

```python
def reset_id_token_ttl() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_redirect_uris` <a name="reset_redirect_uris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.resetRedirectUris"></a>

```python
def reset_redirect_uris() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import identity_oidc_client

identityOidcClient.IdentityOidcClient.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import identity_oidc_client

identityOidcClient.IdentityOidcClient.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import identity_oidc_client

identityOidcClient.IdentityOidcClient.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtlInput">access_token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignmentsInput">assignments_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientTypeInput">client_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtlInput">id_token_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUrisInput">redirect_uris_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtl">access_token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignments">assignments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientType">client_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtl">id_token_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `access_token_ttl_input`<sup>Optional</sup> <a name="access_token_ttl_input" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtlInput"></a>

```python
access_token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `assignments_input`<sup>Optional</sup> <a name="assignments_input" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignmentsInput"></a>

```python
assignments_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_type_input`<sup>Optional</sup> <a name="client_type_input" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientTypeInput"></a>

```python
client_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id_token_ttl_input`<sup>Optional</sup> <a name="id_token_ttl_input" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtlInput"></a>

```python
id_token_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `redirect_uris_input`<sup>Optional</sup> <a name="redirect_uris_input" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUrisInput"></a>

```python
redirect_uris_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_token_ttl`<sup>Required</sup> <a name="access_token_ttl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.accessTokenTtl"></a>

```python
access_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `assignments`<sup>Required</sup> <a name="assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.assignments"></a>

```python
assignments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_type`<sup>Required</sup> <a name="client_type" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.clientType"></a>

```python
client_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `id_token_ttl`<sup>Required</sup> <a name="id_token_ttl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.idTokenTtl"></a>

```python
id_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `redirect_uris`<sup>Required</sup> <a name="redirect_uris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClient.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcClientConfig <a name="IdentityOidcClientConfig" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import identity_oidc_client

identityOidcClient.IdentityOidcClientConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_token_ttl: typing.Union[int, float] = None,
  assignments: typing.List[str] = None,
  client_type: str = None,
  id: str = None,
  id_token_ttl: typing.Union[int, float] = None,
  key: str = None,
  namespace: str = None,
  redirect_uris: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.name">name</a></code> | <code>str</code> | The name of the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.accessTokenTtl">access_token_ttl</a></code> | <code>typing.Union[int, float]</code> | The time-to-live for access tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.assignments">assignments</a></code> | <code>typing.List[str]</code> | A list of assignment resources associated with the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.clientType">client_type</a></code> | <code>str</code> | The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.idTokenTtl">id_token_ttl</a></code> | <code>typing.Union[int, float]</code> | The time-to-live for ID tokens obtained by the client. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.key">key</a></code> | <code>str</code> | A reference to a named key resource in Vault. This cannot be modified after creation. |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.redirectUris">redirect_uris</a></code> | <code>typing.List[str]</code> | Redirection URI values used by the client. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#name IdentityOidcClient#name}

---

##### `access_token_ttl`<sup>Optional</sup> <a name="access_token_ttl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.accessTokenTtl"></a>

```python
access_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time-to-live for access tokens obtained by the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#access_token_ttl IdentityOidcClient#access_token_ttl}

---

##### `assignments`<sup>Optional</sup> <a name="assignments" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.assignments"></a>

```python
assignments: typing.List[str]
```

- *Type:* typing.List[str]

A list of assignment resources associated with the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#assignments IdentityOidcClient#assignments}

---

##### `client_type`<sup>Optional</sup> <a name="client_type" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.clientType"></a>

```python
client_type: str
```

- *Type:* str

The client type based on its ability to maintain confidentiality of credentials.Defaults to 'confidential'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#client_type IdentityOidcClient#client_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#id IdentityOidcClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `id_token_ttl`<sup>Optional</sup> <a name="id_token_ttl" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.idTokenTtl"></a>

```python
id_token_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The time-to-live for ID tokens obtained by the client.

The value should be less than the verification_ttl on the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#id_token_ttl IdentityOidcClient#id_token_ttl}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.key"></a>

```python
key: str
```

- *Type:* str

A reference to a named key resource in Vault. This cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#key IdentityOidcClient#key}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#namespace IdentityOidcClient#namespace}

---

##### `redirect_uris`<sup>Optional</sup> <a name="redirect_uris" id="@cdktf/provider-vault.identityOidcClient.IdentityOidcClientConfig.property.redirectUris"></a>

```python
redirect_uris: typing.List[str]
```

- *Type:* typing.List[str]

Redirection URI values used by the client.

One of these values must exactly match the redirect_uri parameter value used in each authentication request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_oidc_client#redirect_uris IdentityOidcClient#redirect_uris}

---



