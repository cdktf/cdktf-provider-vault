# `spiffeAuthBackendConfig` Submodule <a name="`spiffeAuthBackendConfig` Submodule" id="@cdktf/provider-vault.spiffeAuthBackendConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeAuthBackendConfig <a name="SpiffeAuthBackendConfig" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config vault_spiffe_auth_backend_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import spiffe_auth_backend_config

spiffeAuthBackendConfig.SpiffeAuthBackendConfig(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  profile: str,
  trust_domain: str,
  audience: typing.List[str] = None,
  bundle: str = None,
  defer_bundle_fetch: bool | IResolvable = None,
  endpoint_root_ca_truststore_pem: str = None,
  endpoint_spiffe_id: str = None,
  endpoint_url: str = None,
  namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.mount">mount</a></code> | <code>str</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.profile">profile</a></code> | <code>str</code> | The mechanism to fetch or embed the trust bundle to use. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.trustDomain">trust_domain</a></code> | <code>str</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.audience">audience</a></code> | <code>typing.List[str]</code> | A list of audience values allowed to match claims in JWT-SVIDs. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.bundle">bundle</a></code> | <code>str</code> | When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format; |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.deferBundleFetch">defer_bundle_fetch</a></code> | <code>bool \| cdktf.IResolvable</code> | Don't attempt to fetch a bundle immediately; only applies when profile != static. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointRootCaTruststorePem">endpoint_root_ca_truststore_pem</a></code> | <code>str</code> | PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointSpiffeId">endpoint_spiffe_id</a></code> | <code>str</code> | The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointUrl">endpoint_url</a></code> | <code>str</code> | The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.mount"></a>

- *Type:* str

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#mount SpiffeAuthBackendConfig#mount}

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.profile"></a>

- *Type:* str

The mechanism to fetch or embed the trust bundle to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#profile SpiffeAuthBackendConfig#profile}

---

##### `trust_domain`<sup>Required</sup> <a name="trust_domain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.trustDomain"></a>

- *Type:* str

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#trust_domain SpiffeAuthBackendConfig#trust_domain}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.audience"></a>

- *Type:* typing.List[str]

A list of audience values allowed to match claims in JWT-SVIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#audience SpiffeAuthBackendConfig#audience}

---

##### `bundle`<sup>Optional</sup> <a name="bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.bundle"></a>

- *Type:* str

When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format;

when profile is 'static', either a bundle in SPIFFE format or PEM-encoded CA certificate(s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#bundle SpiffeAuthBackendConfig#bundle}

---

##### `defer_bundle_fetch`<sup>Optional</sup> <a name="defer_bundle_fetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.deferBundleFetch"></a>

- *Type:* bool | cdktf.IResolvable

Don't attempt to fetch a bundle immediately; only applies when profile != static.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#defer_bundle_fetch SpiffeAuthBackendConfig#defer_bundle_fetch}

---

##### `endpoint_root_ca_truststore_pem`<sup>Optional</sup> <a name="endpoint_root_ca_truststore_pem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointRootCaTruststorePem"></a>

- *Type:* str

PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_root_ca_truststore_pem SpiffeAuthBackendConfig#endpoint_root_ca_truststore_pem}

---

##### `endpoint_spiffe_id`<sup>Optional</sup> <a name="endpoint_spiffe_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointSpiffeId"></a>

- *Type:* str

The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_spiffe_id SpiffeAuthBackendConfig#endpoint_spiffe_id}

---

##### `endpoint_url`<sup>Optional</sup> <a name="endpoint_url" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.endpointUrl"></a>

- *Type:* str

The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_url SpiffeAuthBackendConfig#endpoint_url}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#namespace SpiffeAuthBackendConfig#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetAudience">reset_audience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetBundle">reset_bundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetDeferBundleFetch">reset_defer_bundle_fetch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointRootCaTruststorePem">reset_endpoint_root_ca_truststore_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointSpiffeId">reset_endpoint_spiffe_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointUrl">reset_endpoint_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_audience` <a name="reset_audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetAudience"></a>

```python
def reset_audience() -> None
```

##### `reset_bundle` <a name="reset_bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetBundle"></a>

```python
def reset_bundle() -> None
```

##### `reset_defer_bundle_fetch` <a name="reset_defer_bundle_fetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetDeferBundleFetch"></a>

```python
def reset_defer_bundle_fetch() -> None
```

##### `reset_endpoint_root_ca_truststore_pem` <a name="reset_endpoint_root_ca_truststore_pem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointRootCaTruststorePem"></a>

```python
def reset_endpoint_root_ca_truststore_pem() -> None
```

##### `reset_endpoint_spiffe_id` <a name="reset_endpoint_spiffe_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointSpiffeId"></a>

```python
def reset_endpoint_spiffe_id() -> None
```

##### `reset_endpoint_url` <a name="reset_endpoint_url" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetEndpointUrl"></a>

```python
def reset_endpoint_url() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import spiffe_auth_backend_config

spiffeAuthBackendConfig.SpiffeAuthBackendConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import spiffe_auth_backend_config

spiffeAuthBackendConfig.SpiffeAuthBackendConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import spiffe_auth_backend_config

spiffeAuthBackendConfig.SpiffeAuthBackendConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import spiffe_auth_backend_config

spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SpiffeAuthBackendConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SpiffeAuthBackendConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SpiffeAuthBackendConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpiffeAuthBackendConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audienceInput">audience_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundleInput">bundle_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetchInput">defer_bundle_fetch_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePemInput">endpoint_root_ca_truststore_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeIdInput">endpoint_spiffe_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrlInput">endpoint_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mountInput">mount_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomainInput">trust_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audience">audience</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundle">bundle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetch">defer_bundle_fetch</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePem">endpoint_root_ca_truststore_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeId">endpoint_spiffe_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mount">mount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomain">trust_domain</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audienceInput"></a>

```python
audience_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bundle_input`<sup>Optional</sup> <a name="bundle_input" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundleInput"></a>

```python
bundle_input: str
```

- *Type:* str

---

##### `defer_bundle_fetch_input`<sup>Optional</sup> <a name="defer_bundle_fetch_input" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetchInput"></a>

```python
defer_bundle_fetch_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `endpoint_root_ca_truststore_pem_input`<sup>Optional</sup> <a name="endpoint_root_ca_truststore_pem_input" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePemInput"></a>

```python
endpoint_root_ca_truststore_pem_input: str
```

- *Type:* str

---

##### `endpoint_spiffe_id_input`<sup>Optional</sup> <a name="endpoint_spiffe_id_input" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeIdInput"></a>

```python
endpoint_spiffe_id_input: str
```

- *Type:* str

---

##### `endpoint_url_input`<sup>Optional</sup> <a name="endpoint_url_input" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrlInput"></a>

```python
endpoint_url_input: str
```

- *Type:* str

---

##### `mount_input`<sup>Optional</sup> <a name="mount_input" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mountInput"></a>

```python
mount_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `trust_domain_input`<sup>Optional</sup> <a name="trust_domain_input" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomainInput"></a>

```python
trust_domain_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.audience"></a>

```python
audience: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bundle`<sup>Required</sup> <a name="bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.bundle"></a>

```python
bundle: str
```

- *Type:* str

---

##### `defer_bundle_fetch`<sup>Required</sup> <a name="defer_bundle_fetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.deferBundleFetch"></a>

```python
defer_bundle_fetch: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `endpoint_root_ca_truststore_pem`<sup>Required</sup> <a name="endpoint_root_ca_truststore_pem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointRootCaTruststorePem"></a>

```python
endpoint_root_ca_truststore_pem: str
```

- *Type:* str

---

##### `endpoint_spiffe_id`<sup>Required</sup> <a name="endpoint_spiffe_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointSpiffeId"></a>

```python
endpoint_spiffe_id: str
```

- *Type:* str

---

##### `endpoint_url`<sup>Required</sup> <a name="endpoint_url" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `trust_domain`<sup>Required</sup> <a name="trust_domain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.trustDomain"></a>

```python
trust_domain: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeAuthBackendConfigConfig <a name="SpiffeAuthBackendConfigConfig" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import spiffe_auth_backend_config

spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  mount: str,
  profile: str,
  trust_domain: str,
  audience: typing.List[str] = None,
  bundle: str = None,
  defer_bundle_fetch: bool | IResolvable = None,
  endpoint_root_ca_truststore_pem: str = None,
  endpoint_spiffe_id: str = None,
  endpoint_url: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.mount">mount</a></code> | <code>str</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.profile">profile</a></code> | <code>str</code> | The mechanism to fetch or embed the trust bundle to use. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.trustDomain">trust_domain</a></code> | <code>str</code> | The SPIFFE trust domain for this backend. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.audience">audience</a></code> | <code>typing.List[str]</code> | A list of audience values allowed to match claims in JWT-SVIDs. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.bundle">bundle</a></code> | <code>str</code> | When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format; |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.deferBundleFetch">defer_bundle_fetch</a></code> | <code>bool \| cdktf.IResolvable</code> | Don't attempt to fetch a bundle immediately; only applies when profile != static. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointRootCaTruststorePem">endpoint_root_ca_truststore_pem</a></code> | <code>str</code> | PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointSpiffeId">endpoint_spiffe_id</a></code> | <code>str</code> | The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointUrl">endpoint_url</a></code> | <code>str</code> | The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.mount"></a>

```python
mount: str
```

- *Type:* str

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#mount SpiffeAuthBackendConfig#mount}

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

The mechanism to fetch or embed the trust bundle to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#profile SpiffeAuthBackendConfig#profile}

---

##### `trust_domain`<sup>Required</sup> <a name="trust_domain" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.trustDomain"></a>

```python
trust_domain: str
```

- *Type:* str

The SPIFFE trust domain for this backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#trust_domain SpiffeAuthBackendConfig#trust_domain}

---

##### `audience`<sup>Optional</sup> <a name="audience" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.audience"></a>

```python
audience: typing.List[str]
```

- *Type:* typing.List[str]

A list of audience values allowed to match claims in JWT-SVIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#audience SpiffeAuthBackendConfig#audience}

---

##### `bundle`<sup>Optional</sup> <a name="bundle" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.bundle"></a>

```python
bundle: str
```

- *Type:* str

When profile is 'https_spiffe_bundle', the bootstrapping bundle in SPIFFE format;

when profile is 'static', either a bundle in SPIFFE format or PEM-encoded CA certificate(s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#bundle SpiffeAuthBackendConfig#bundle}

---

##### `defer_bundle_fetch`<sup>Optional</sup> <a name="defer_bundle_fetch" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.deferBundleFetch"></a>

```python
defer_bundle_fetch: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Don't attempt to fetch a bundle immediately; only applies when profile != static.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#defer_bundle_fetch SpiffeAuthBackendConfig#defer_bundle_fetch}

---

##### `endpoint_root_ca_truststore_pem`<sup>Optional</sup> <a name="endpoint_root_ca_truststore_pem" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointRootCaTruststorePem"></a>

```python
endpoint_root_ca_truststore_pem: str
```

- *Type:* str

PEM-encoded CA certificate(s) to validate the server reached by 'endpoint_url', if set this will override the default TLS trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_root_ca_truststore_pem SpiffeAuthBackendConfig#endpoint_root_ca_truststore_pem}

---

##### `endpoint_spiffe_id`<sup>Optional</sup> <a name="endpoint_spiffe_id" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointSpiffeId"></a>

```python
endpoint_spiffe_id: str
```

- *Type:* str

The server's SPIFFE ID to validate when profile is 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_spiffe_id SpiffeAuthBackendConfig#endpoint_spiffe_id}

---

##### `endpoint_url`<sup>Optional</sup> <a name="endpoint_url" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.endpointUrl"></a>

```python
endpoint_url: str
```

- *Type:* str

The URI to be used when profile is 'https_web_bundle' or 'https_spiffe_bundle'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#endpoint_url SpiffeAuthBackendConfig#endpoint_url}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendConfig.SpiffeAuthBackendConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_config#namespace SpiffeAuthBackendConfig#namespace}

---



