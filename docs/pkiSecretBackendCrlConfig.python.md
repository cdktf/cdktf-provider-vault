# `pkiSecretBackendCrlConfig` Submodule <a name="`pkiSecretBackendCrlConfig` Submodule" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendCrlConfig <a name="PkiSecretBackendCrlConfig" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config vault_pki_secret_backend_crl_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_crl_config

pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig(
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
  auto_rebuild: typing.Union[bool, IResolvable] = None,
  auto_rebuild_grace_period: str = None,
  cross_cluster_revocation: typing.Union[bool, IResolvable] = None,
  delta_rebuild_interval: str = None,
  disable: typing.Union[bool, IResolvable] = None,
  enable_delta: typing.Union[bool, IResolvable] = None,
  expiry: str = None,
  id: str = None,
  namespace: str = None,
  ocsp_disable: typing.Union[bool, IResolvable] = None,
  ocsp_expiry: str = None,
  unified_crl: typing.Union[bool, IResolvable] = None,
  unified_crl_on_existing_paths: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.backend">backend</a></code> | <code>str</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.autoRebuild">auto_rebuild</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables or disables periodic rebuilding of the CRL upon expiry. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.autoRebuildGracePeriod">auto_rebuild_grace_period</a></code> | <code>str</code> | Grace period before CRL expiry to attempt rebuild of CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.crossClusterRevocation">cross_cluster_revocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable cross-cluster revocation request queues. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.deltaRebuildInterval">delta_rebuild_interval</a></code> | <code>str</code> | Interval to check for new revocations on, to regenerate the delta CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.disable">disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables or enables CRL building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.enableDelta">enable_delta</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.expiry">expiry</a></code> | <code>str</code> | Specifies the time until expiration. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.ocspDisable">ocsp_disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables or enables the OCSP responder in Vault. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.ocspExpiry">ocsp_expiry</a></code> | <code>str</code> | The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.unifiedCrl">unified_crl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables unified CRL and OCSP building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.unifiedCrlOnExistingPaths">unified_crl_on_existing_paths</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables serving the unified CRL and OCSP on the existing, previously cluster-local paths. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.backend"></a>

- *Type:* str

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#backend PkiSecretBackendCrlConfig#backend}

---

##### `auto_rebuild`<sup>Optional</sup> <a name="auto_rebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.autoRebuild"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables or disables periodic rebuilding of the CRL upon expiry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#auto_rebuild PkiSecretBackendCrlConfig#auto_rebuild}

---

##### `auto_rebuild_grace_period`<sup>Optional</sup> <a name="auto_rebuild_grace_period" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.autoRebuildGracePeriod"></a>

- *Type:* str

Grace period before CRL expiry to attempt rebuild of CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#auto_rebuild_grace_period PkiSecretBackendCrlConfig#auto_rebuild_grace_period}

---

##### `cross_cluster_revocation`<sup>Optional</sup> <a name="cross_cluster_revocation" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.crossClusterRevocation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable cross-cluster revocation request queues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#cross_cluster_revocation PkiSecretBackendCrlConfig#cross_cluster_revocation}

---

##### `delta_rebuild_interval`<sup>Optional</sup> <a name="delta_rebuild_interval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.deltaRebuildInterval"></a>

- *Type:* str

Interval to check for new revocations on, to regenerate the delta CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#delta_rebuild_interval PkiSecretBackendCrlConfig#delta_rebuild_interval}

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.disable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables or enables CRL building.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#disable PkiSecretBackendCrlConfig#disable}

---

##### `enable_delta`<sup>Optional</sup> <a name="enable_delta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.enableDelta"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#enable_delta PkiSecretBackendCrlConfig#enable_delta}

---

##### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.expiry"></a>

- *Type:* str

Specifies the time until expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#expiry PkiSecretBackendCrlConfig#expiry}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#namespace PkiSecretBackendCrlConfig#namespace}

---

##### `ocsp_disable`<sup>Optional</sup> <a name="ocsp_disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.ocspDisable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables or enables the OCSP responder in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#ocsp_disable PkiSecretBackendCrlConfig#ocsp_disable}

---

##### `ocsp_expiry`<sup>Optional</sup> <a name="ocsp_expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.ocspExpiry"></a>

- *Type:* str

The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#ocsp_expiry PkiSecretBackendCrlConfig#ocsp_expiry}

---

##### `unified_crl`<sup>Optional</sup> <a name="unified_crl" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.unifiedCrl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables unified CRL and OCSP building.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#unified_crl PkiSecretBackendCrlConfig#unified_crl}

---

##### `unified_crl_on_existing_paths`<sup>Optional</sup> <a name="unified_crl_on_existing_paths" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.Initializer.parameter.unifiedCrlOnExistingPaths"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables serving the unified CRL and OCSP on the existing, previously cluster-local paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#unified_crl_on_existing_paths PkiSecretBackendCrlConfig#unified_crl_on_existing_paths}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuild">reset_auto_rebuild</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuildGracePeriod">reset_auto_rebuild_grace_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetCrossClusterRevocation">reset_cross_cluster_revocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDeltaRebuildInterval">reset_delta_rebuild_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDisable">reset_disable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetEnableDelta">reset_enable_delta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetExpiry">reset_expiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspDisable">reset_ocsp_disable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspExpiry">reset_ocsp_expiry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrl">reset_unified_crl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrlOnExistingPaths">reset_unified_crl_on_existing_paths</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_auto_rebuild` <a name="reset_auto_rebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuild"></a>

```python
def reset_auto_rebuild() -> None
```

##### `reset_auto_rebuild_grace_period` <a name="reset_auto_rebuild_grace_period" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetAutoRebuildGracePeriod"></a>

```python
def reset_auto_rebuild_grace_period() -> None
```

##### `reset_cross_cluster_revocation` <a name="reset_cross_cluster_revocation" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetCrossClusterRevocation"></a>

```python
def reset_cross_cluster_revocation() -> None
```

##### `reset_delta_rebuild_interval` <a name="reset_delta_rebuild_interval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDeltaRebuildInterval"></a>

```python
def reset_delta_rebuild_interval() -> None
```

##### `reset_disable` <a name="reset_disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetDisable"></a>

```python
def reset_disable() -> None
```

##### `reset_enable_delta` <a name="reset_enable_delta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetEnableDelta"></a>

```python
def reset_enable_delta() -> None
```

##### `reset_expiry` <a name="reset_expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetExpiry"></a>

```python
def reset_expiry() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ocsp_disable` <a name="reset_ocsp_disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspDisable"></a>

```python
def reset_ocsp_disable() -> None
```

##### `reset_ocsp_expiry` <a name="reset_ocsp_expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetOcspExpiry"></a>

```python
def reset_ocsp_expiry() -> None
```

##### `reset_unified_crl` <a name="reset_unified_crl" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrl"></a>

```python
def reset_unified_crl() -> None
```

##### `reset_unified_crl_on_existing_paths` <a name="reset_unified_crl_on_existing_paths" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.resetUnifiedCrlOnExistingPaths"></a>

```python
def reset_unified_crl_on_existing_paths() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendCrlConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_crl_config

pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_crl_config

pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_crl_config

pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_crl_config

pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendCrlConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendCrlConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendCrlConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendCrlConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriodInput">auto_rebuild_grace_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildInput">auto_rebuild_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocationInput">cross_cluster_revocation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildIntervalInput">delta_rebuild_interval_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disableInput">disable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDeltaInput">enable_delta_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiryInput">expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisableInput">ocsp_disable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiryInput">ocsp_expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlInput">unified_crl_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPathsInput">unified_crl_on_existing_paths_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuild">auto_rebuild</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriod">auto_rebuild_grace_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocation">cross_cluster_revocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildInterval">delta_rebuild_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disable">disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDelta">enable_delta</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisable">ocsp_disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiry">ocsp_expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrl">unified_crl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPaths">unified_crl_on_existing_paths</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_rebuild_grace_period_input`<sup>Optional</sup> <a name="auto_rebuild_grace_period_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriodInput"></a>

```python
auto_rebuild_grace_period_input: str
```

- *Type:* str

---

##### `auto_rebuild_input`<sup>Optional</sup> <a name="auto_rebuild_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildInput"></a>

```python
auto_rebuild_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `cross_cluster_revocation_input`<sup>Optional</sup> <a name="cross_cluster_revocation_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocationInput"></a>

```python
cross_cluster_revocation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delta_rebuild_interval_input`<sup>Optional</sup> <a name="delta_rebuild_interval_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildIntervalInput"></a>

```python
delta_rebuild_interval_input: str
```

- *Type:* str

---

##### `disable_input`<sup>Optional</sup> <a name="disable_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disableInput"></a>

```python
disable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_delta_input`<sup>Optional</sup> <a name="enable_delta_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDeltaInput"></a>

```python
enable_delta_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiry_input`<sup>Optional</sup> <a name="expiry_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiryInput"></a>

```python
expiry_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `ocsp_disable_input`<sup>Optional</sup> <a name="ocsp_disable_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisableInput"></a>

```python
ocsp_disable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_expiry_input`<sup>Optional</sup> <a name="ocsp_expiry_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiryInput"></a>

```python
ocsp_expiry_input: str
```

- *Type:* str

---

##### `unified_crl_input`<sup>Optional</sup> <a name="unified_crl_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlInput"></a>

```python
unified_crl_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unified_crl_on_existing_paths_input`<sup>Optional</sup> <a name="unified_crl_on_existing_paths_input" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPathsInput"></a>

```python
unified_crl_on_existing_paths_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_rebuild`<sup>Required</sup> <a name="auto_rebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuild"></a>

```python
auto_rebuild: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_rebuild_grace_period`<sup>Required</sup> <a name="auto_rebuild_grace_period" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.autoRebuildGracePeriod"></a>

```python
auto_rebuild_grace_period: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `cross_cluster_revocation`<sup>Required</sup> <a name="cross_cluster_revocation" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.crossClusterRevocation"></a>

```python
cross_cluster_revocation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delta_rebuild_interval`<sup>Required</sup> <a name="delta_rebuild_interval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.deltaRebuildInterval"></a>

```python
delta_rebuild_interval: str
```

- *Type:* str

---

##### `disable`<sup>Required</sup> <a name="disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.disable"></a>

```python
disable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_delta`<sup>Required</sup> <a name="enable_delta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.enableDelta"></a>

```python
enable_delta: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `ocsp_disable`<sup>Required</sup> <a name="ocsp_disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspDisable"></a>

```python
ocsp_disable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_expiry`<sup>Required</sup> <a name="ocsp_expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.ocspExpiry"></a>

```python
ocsp_expiry: str
```

- *Type:* str

---

##### `unified_crl`<sup>Required</sup> <a name="unified_crl" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrl"></a>

```python
unified_crl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unified_crl_on_existing_paths`<sup>Required</sup> <a name="unified_crl_on_existing_paths" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.unifiedCrlOnExistingPaths"></a>

```python
unified_crl_on_existing_paths: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendCrlConfigConfig <a name="PkiSecretBackendCrlConfigConfig" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_crl_config

pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  auto_rebuild: typing.Union[bool, IResolvable] = None,
  auto_rebuild_grace_period: str = None,
  cross_cluster_revocation: typing.Union[bool, IResolvable] = None,
  delta_rebuild_interval: str = None,
  disable: typing.Union[bool, IResolvable] = None,
  enable_delta: typing.Union[bool, IResolvable] = None,
  expiry: str = None,
  id: str = None,
  namespace: str = None,
  ocsp_disable: typing.Union[bool, IResolvable] = None,
  ocsp_expiry: str = None,
  unified_crl: typing.Union[bool, IResolvable] = None,
  unified_crl_on_existing_paths: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.backend">backend</a></code> | <code>str</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuild">auto_rebuild</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables or disables periodic rebuilding of the CRL upon expiry. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuildGracePeriod">auto_rebuild_grace_period</a></code> | <code>str</code> | Grace period before CRL expiry to attempt rebuild of CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.crossClusterRevocation">cross_cluster_revocation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable cross-cluster revocation request queues. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.deltaRebuildInterval">delta_rebuild_interval</a></code> | <code>str</code> | Interval to check for new revocations on, to regenerate the delta CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.disable">disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables or enables CRL building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.enableDelta">enable_delta</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.expiry">expiry</a></code> | <code>str</code> | Specifies the time until expiration. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspDisable">ocsp_disable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disables or enables the OCSP responder in Vault. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspExpiry">ocsp_expiry</a></code> | <code>str</code> | The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrl">unified_crl</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables unified CRL and OCSP building. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrlOnExistingPaths">unified_crl_on_existing_paths</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables serving the unified CRL and OCSP on the existing, previously cluster-local paths. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#backend PkiSecretBackendCrlConfig#backend}

---

##### `auto_rebuild`<sup>Optional</sup> <a name="auto_rebuild" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuild"></a>

```python
auto_rebuild: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables or disables periodic rebuilding of the CRL upon expiry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#auto_rebuild PkiSecretBackendCrlConfig#auto_rebuild}

---

##### `auto_rebuild_grace_period`<sup>Optional</sup> <a name="auto_rebuild_grace_period" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.autoRebuildGracePeriod"></a>

```python
auto_rebuild_grace_period: str
```

- *Type:* str

Grace period before CRL expiry to attempt rebuild of CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#auto_rebuild_grace_period PkiSecretBackendCrlConfig#auto_rebuild_grace_period}

---

##### `cross_cluster_revocation`<sup>Optional</sup> <a name="cross_cluster_revocation" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.crossClusterRevocation"></a>

```python
cross_cluster_revocation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable cross-cluster revocation request queues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#cross_cluster_revocation PkiSecretBackendCrlConfig#cross_cluster_revocation}

---

##### `delta_rebuild_interval`<sup>Optional</sup> <a name="delta_rebuild_interval" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.deltaRebuildInterval"></a>

```python
delta_rebuild_interval: str
```

- *Type:* str

Interval to check for new revocations on, to regenerate the delta CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#delta_rebuild_interval PkiSecretBackendCrlConfig#delta_rebuild_interval}

---

##### `disable`<sup>Optional</sup> <a name="disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.disable"></a>

```python
disable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables or enables CRL building.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#disable PkiSecretBackendCrlConfig#disable}

---

##### `enable_delta`<sup>Optional</sup> <a name="enable_delta" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.enableDelta"></a>

```python
enable_delta: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables or disables building of delta CRLs with up-to-date revocation information, augmenting the last complete CRL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#enable_delta PkiSecretBackendCrlConfig#enable_delta}

---

##### `expiry`<sup>Optional</sup> <a name="expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

Specifies the time until expiration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#expiry PkiSecretBackendCrlConfig#expiry}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#id PkiSecretBackendCrlConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#namespace PkiSecretBackendCrlConfig#namespace}

---

##### `ocsp_disable`<sup>Optional</sup> <a name="ocsp_disable" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspDisable"></a>

```python
ocsp_disable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disables or enables the OCSP responder in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#ocsp_disable PkiSecretBackendCrlConfig#ocsp_disable}

---

##### `ocsp_expiry`<sup>Optional</sup> <a name="ocsp_expiry" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.ocspExpiry"></a>

```python
ocsp_expiry: str
```

- *Type:* str

The amount of time an OCSP response can be cached for, useful for OCSP stapling refresh durations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#ocsp_expiry PkiSecretBackendCrlConfig#ocsp_expiry}

---

##### `unified_crl`<sup>Optional</sup> <a name="unified_crl" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrl"></a>

```python
unified_crl: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables unified CRL and OCSP building.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#unified_crl PkiSecretBackendCrlConfig#unified_crl}

---

##### `unified_crl_on_existing_paths`<sup>Optional</sup> <a name="unified_crl_on_existing_paths" id="@cdktf/provider-vault.pkiSecretBackendCrlConfig.PkiSecretBackendCrlConfigConfig.property.unifiedCrlOnExistingPaths"></a>

```python
unified_crl_on_existing_paths: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables serving the unified CRL and OCSP on the existing, previously cluster-local paths.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.0.0/docs/resources/pki_secret_backend_crl_config#unified_crl_on_existing_paths PkiSecretBackendCrlConfig#unified_crl_on_existing_paths}

---



