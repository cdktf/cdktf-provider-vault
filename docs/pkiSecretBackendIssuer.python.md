# `pkiSecretBackendIssuer` Submodule <a name="`pkiSecretBackendIssuer` Submodule" id="@cdktf/provider-vault.pkiSecretBackendIssuer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendIssuer <a name="PkiSecretBackendIssuer" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer vault_pki_secret_backend_issuer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_issuer

pkiSecretBackendIssuer.PkiSecretBackendIssuer(
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
  issuer_ref: str,
  crl_distribution_points: typing.List[str] = None,
  disable_critical_extension_checks: typing.Union[bool, IResolvable] = None,
  disable_name_checks: typing.Union[bool, IResolvable] = None,
  disable_name_constraint_checks: typing.Union[bool, IResolvable] = None,
  disable_path_length_checks: typing.Union[bool, IResolvable] = None,
  enable_aia_url_templating: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issuer_name: str = None,
  issuing_certificates: typing.List[str] = None,
  leaf_not_after_behavior: str = None,
  manual_chain: typing.List[str] = None,
  namespace: str = None,
  ocsp_servers: typing.List[str] = None,
  revocation_signature_algorithm: str = None,
  usage: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.backend">backend</a></code> | <code>str</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuerRef">issuer_ref</a></code> | <code>str</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.crlDistributionPoints">crl_distribution_points</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.disableCriticalExtensionChecks">disable_critical_extension_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.disableNameChecks">disable_name_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.disableNameConstraintChecks">disable_name_constraint_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.disablePathLengthChecks">disable_path_length_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.enableAiaUrlTemplating">enable_aia_url_templating</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies that the AIA URL values should be templated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuerName">issuer_name</a></code> | <code>str</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuingCertificates">issuing_certificates</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.leafNotAfterBehavior">leaf_not_after_behavior</a></code> | <code>str</code> | Behavior of a leaf's 'NotAfter' field during issuance. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.manualChain">manual_chain</a></code> | <code>typing.List[str]</code> | Chain of issuer references to build this issuer's computed CAChain field from, when non-empty. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.ocspServers">ocsp_servers</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the OCSP Servers field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.revocationSignatureAlgorithm">revocation_signature_algorithm</a></code> | <code>str</code> | Which signature algorithm to use when building CRLs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.usage">usage</a></code> | <code>str</code> | Comma-separated list of allowed usages for this issuer. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.backend"></a>

- *Type:* str

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#backend PkiSecretBackendIssuer#backend}

---

##### `issuer_ref`<sup>Required</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuerRef"></a>

- *Type:* str

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#issuer_ref PkiSecretBackendIssuer#issuer_ref}

---

##### `crl_distribution_points`<sup>Optional</sup> <a name="crl_distribution_points" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.crlDistributionPoints"></a>

- *Type:* typing.List[str]

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#crl_distribution_points PkiSecretBackendIssuer#crl_distribution_points}

---

##### `disable_critical_extension_checks`<sup>Optional</sup> <a name="disable_critical_extension_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.disableCriticalExtensionChecks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#disable_critical_extension_checks PkiSecretBackendIssuer#disable_critical_extension_checks}

---

##### `disable_name_checks`<sup>Optional</sup> <a name="disable_name_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.disableNameChecks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#disable_name_checks PkiSecretBackendIssuer#disable_name_checks}

---

##### `disable_name_constraint_checks`<sup>Optional</sup> <a name="disable_name_constraint_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.disableNameConstraintChecks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#disable_name_constraint_checks PkiSecretBackendIssuer#disable_name_constraint_checks}

---

##### `disable_path_length_checks`<sup>Optional</sup> <a name="disable_path_length_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.disablePathLengthChecks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#disable_path_length_checks PkiSecretBackendIssuer#disable_path_length_checks}

---

##### `enable_aia_url_templating`<sup>Optional</sup> <a name="enable_aia_url_templating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.enableAiaUrlTemplating"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies that the AIA URL values should be templated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#enable_aia_url_templating PkiSecretBackendIssuer#enable_aia_url_templating}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_name`<sup>Optional</sup> <a name="issuer_name" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuerName"></a>

- *Type:* str

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#issuer_name PkiSecretBackendIssuer#issuer_name}

---

##### `issuing_certificates`<sup>Optional</sup> <a name="issuing_certificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.issuingCertificates"></a>

- *Type:* typing.List[str]

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#issuing_certificates PkiSecretBackendIssuer#issuing_certificates}

---

##### `leaf_not_after_behavior`<sup>Optional</sup> <a name="leaf_not_after_behavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.leafNotAfterBehavior"></a>

- *Type:* str

Behavior of a leaf's 'NotAfter' field during issuance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#leaf_not_after_behavior PkiSecretBackendIssuer#leaf_not_after_behavior}

---

##### `manual_chain`<sup>Optional</sup> <a name="manual_chain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.manualChain"></a>

- *Type:* typing.List[str]

Chain of issuer references to build this issuer's computed CAChain field from, when non-empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#manual_chain PkiSecretBackendIssuer#manual_chain}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.namespace"></a>

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#namespace PkiSecretBackendIssuer#namespace}

---

##### `ocsp_servers`<sup>Optional</sup> <a name="ocsp_servers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.ocspServers"></a>

- *Type:* typing.List[str]

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#ocsp_servers PkiSecretBackendIssuer#ocsp_servers}

---

##### `revocation_signature_algorithm`<sup>Optional</sup> <a name="revocation_signature_algorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.revocationSignatureAlgorithm"></a>

- *Type:* str

Which signature algorithm to use when building CRLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#revocation_signature_algorithm PkiSecretBackendIssuer#revocation_signature_algorithm}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.Initializer.parameter.usage"></a>

- *Type:* str

Comma-separated list of allowed usages for this issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#usage PkiSecretBackendIssuer#usage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetCrlDistributionPoints">reset_crl_distribution_points</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetDisableCriticalExtensionChecks">reset_disable_critical_extension_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetDisableNameChecks">reset_disable_name_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetDisableNameConstraintChecks">reset_disable_name_constraint_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetDisablePathLengthChecks">reset_disable_path_length_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetEnableAiaUrlTemplating">reset_enable_aia_url_templating</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuerName">reset_issuer_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuingCertificates">reset_issuing_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetLeafNotAfterBehavior">reset_leaf_not_after_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetManualChain">reset_manual_chain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOcspServers">reset_ocsp_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetRevocationSignatureAlgorithm">reset_revocation_signature_algorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetUsage">reset_usage</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_crl_distribution_points` <a name="reset_crl_distribution_points" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetCrlDistributionPoints"></a>

```python
def reset_crl_distribution_points() -> None
```

##### `reset_disable_critical_extension_checks` <a name="reset_disable_critical_extension_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetDisableCriticalExtensionChecks"></a>

```python
def reset_disable_critical_extension_checks() -> None
```

##### `reset_disable_name_checks` <a name="reset_disable_name_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetDisableNameChecks"></a>

```python
def reset_disable_name_checks() -> None
```

##### `reset_disable_name_constraint_checks` <a name="reset_disable_name_constraint_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetDisableNameConstraintChecks"></a>

```python
def reset_disable_name_constraint_checks() -> None
```

##### `reset_disable_path_length_checks` <a name="reset_disable_path_length_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetDisablePathLengthChecks"></a>

```python
def reset_disable_path_length_checks() -> None
```

##### `reset_enable_aia_url_templating` <a name="reset_enable_aia_url_templating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetEnableAiaUrlTemplating"></a>

```python
def reset_enable_aia_url_templating() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_issuer_name` <a name="reset_issuer_name" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuerName"></a>

```python
def reset_issuer_name() -> None
```

##### `reset_issuing_certificates` <a name="reset_issuing_certificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetIssuingCertificates"></a>

```python
def reset_issuing_certificates() -> None
```

##### `reset_leaf_not_after_behavior` <a name="reset_leaf_not_after_behavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetLeafNotAfterBehavior"></a>

```python
def reset_leaf_not_after_behavior() -> None
```

##### `reset_manual_chain` <a name="reset_manual_chain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetManualChain"></a>

```python
def reset_manual_chain() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_ocsp_servers` <a name="reset_ocsp_servers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetOcspServers"></a>

```python
def reset_ocsp_servers() -> None
```

##### `reset_revocation_signature_algorithm` <a name="reset_revocation_signature_algorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetRevocationSignatureAlgorithm"></a>

```python
def reset_revocation_signature_algorithm() -> None
```

##### `reset_usage` <a name="reset_usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.resetUsage"></a>

```python
def reset_usage() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_issuer

pkiSecretBackendIssuer.PkiSecretBackendIssuer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_issuer

pkiSecretBackendIssuer.PkiSecretBackendIssuer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_issuer

pkiSecretBackendIssuer.PkiSecretBackendIssuer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_issuer

pkiSecretBackendIssuer.PkiSecretBackendIssuer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PkiSecretBackendIssuer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PkiSecretBackendIssuer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PkiSecretBackendIssuer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendIssuer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerId">issuer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backendInput">backend_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPointsInput">crl_distribution_points_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableCriticalExtensionChecksInput">disable_critical_extension_checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableNameChecksInput">disable_name_checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableNameConstraintChecksInput">disable_name_constraint_checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disablePathLengthChecksInput">disable_path_length_checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplatingInput">enable_aia_url_templating_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerNameInput">issuer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRefInput">issuer_ref_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificatesInput">issuing_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehaviorInput">leaf_not_after_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChainInput">manual_chain_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServersInput">ocsp_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithmInput">revocation_signature_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usageInput">usage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backend">backend</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPoints">crl_distribution_points</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableCriticalExtensionChecks">disable_critical_extension_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableNameChecks">disable_name_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableNameConstraintChecks">disable_name_constraint_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disablePathLengthChecks">disable_path_length_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplating">enable_aia_url_templating</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerName">issuer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRef">issuer_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificates">issuing_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehavior">leaf_not_after_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChain">manual_chain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServers">ocsp_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithm">revocation_signature_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usage">usage</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `issuer_id`<sup>Required</sup> <a name="issuer_id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerId"></a>

```python
issuer_id: str
```

- *Type:* str

---

##### `backend_input`<sup>Optional</sup> <a name="backend_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backendInput"></a>

```python
backend_input: str
```

- *Type:* str

---

##### `crl_distribution_points_input`<sup>Optional</sup> <a name="crl_distribution_points_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPointsInput"></a>

```python
crl_distribution_points_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disable_critical_extension_checks_input`<sup>Optional</sup> <a name="disable_critical_extension_checks_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableCriticalExtensionChecksInput"></a>

```python
disable_critical_extension_checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_name_checks_input`<sup>Optional</sup> <a name="disable_name_checks_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableNameChecksInput"></a>

```python
disable_name_checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_name_constraint_checks_input`<sup>Optional</sup> <a name="disable_name_constraint_checks_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableNameConstraintChecksInput"></a>

```python
disable_name_constraint_checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_path_length_checks_input`<sup>Optional</sup> <a name="disable_path_length_checks_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disablePathLengthChecksInput"></a>

```python
disable_path_length_checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_aia_url_templating_input`<sup>Optional</sup> <a name="enable_aia_url_templating_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplatingInput"></a>

```python
enable_aia_url_templating_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `issuer_name_input`<sup>Optional</sup> <a name="issuer_name_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerNameInput"></a>

```python
issuer_name_input: str
```

- *Type:* str

---

##### `issuer_ref_input`<sup>Optional</sup> <a name="issuer_ref_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRefInput"></a>

```python
issuer_ref_input: str
```

- *Type:* str

---

##### `issuing_certificates_input`<sup>Optional</sup> <a name="issuing_certificates_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificatesInput"></a>

```python
issuing_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `leaf_not_after_behavior_input`<sup>Optional</sup> <a name="leaf_not_after_behavior_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehaviorInput"></a>

```python
leaf_not_after_behavior_input: str
```

- *Type:* str

---

##### `manual_chain_input`<sup>Optional</sup> <a name="manual_chain_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChainInput"></a>

```python
manual_chain_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `ocsp_servers_input`<sup>Optional</sup> <a name="ocsp_servers_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServersInput"></a>

```python
ocsp_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `revocation_signature_algorithm_input`<sup>Optional</sup> <a name="revocation_signature_algorithm_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithmInput"></a>

```python
revocation_signature_algorithm_input: str
```

- *Type:* str

---

##### `usage_input`<sup>Optional</sup> <a name="usage_input" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usageInput"></a>

```python
usage_input: str
```

- *Type:* str

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.backend"></a>

```python
backend: str
```

- *Type:* str

---

##### `crl_distribution_points`<sup>Required</sup> <a name="crl_distribution_points" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.crlDistributionPoints"></a>

```python
crl_distribution_points: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disable_critical_extension_checks`<sup>Required</sup> <a name="disable_critical_extension_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableCriticalExtensionChecks"></a>

```python
disable_critical_extension_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_name_checks`<sup>Required</sup> <a name="disable_name_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableNameChecks"></a>

```python
disable_name_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_name_constraint_checks`<sup>Required</sup> <a name="disable_name_constraint_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disableNameConstraintChecks"></a>

```python
disable_name_constraint_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_path_length_checks`<sup>Required</sup> <a name="disable_path_length_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.disablePathLengthChecks"></a>

```python
disable_path_length_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_aia_url_templating`<sup>Required</sup> <a name="enable_aia_url_templating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.enableAiaUrlTemplating"></a>

```python
enable_aia_url_templating: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `issuer_name`<sup>Required</sup> <a name="issuer_name" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerName"></a>

```python
issuer_name: str
```

- *Type:* str

---

##### `issuer_ref`<sup>Required</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuerRef"></a>

```python
issuer_ref: str
```

- *Type:* str

---

##### `issuing_certificates`<sup>Required</sup> <a name="issuing_certificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.issuingCertificates"></a>

```python
issuing_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `leaf_not_after_behavior`<sup>Required</sup> <a name="leaf_not_after_behavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.leafNotAfterBehavior"></a>

```python
leaf_not_after_behavior: str
```

- *Type:* str

---

##### `manual_chain`<sup>Required</sup> <a name="manual_chain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.manualChain"></a>

```python
manual_chain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `ocsp_servers`<sup>Required</sup> <a name="ocsp_servers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.ocspServers"></a>

```python
ocsp_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `revocation_signature_algorithm`<sup>Required</sup> <a name="revocation_signature_algorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.revocationSignatureAlgorithm"></a>

```python
revocation_signature_algorithm: str
```

- *Type:* str

---

##### `usage`<sup>Required</sup> <a name="usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.usage"></a>

```python
usage: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendIssuerConfig <a name="PkiSecretBackendIssuerConfig" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_vault import pki_secret_backend_issuer

pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend: str,
  issuer_ref: str,
  crl_distribution_points: typing.List[str] = None,
  disable_critical_extension_checks: typing.Union[bool, IResolvable] = None,
  disable_name_checks: typing.Union[bool, IResolvable] = None,
  disable_name_constraint_checks: typing.Union[bool, IResolvable] = None,
  disable_path_length_checks: typing.Union[bool, IResolvable] = None,
  enable_aia_url_templating: typing.Union[bool, IResolvable] = None,
  id: str = None,
  issuer_name: str = None,
  issuing_certificates: typing.List[str] = None,
  leaf_not_after_behavior: str = None,
  manual_chain: typing.List[str] = None,
  namespace: str = None,
  ocsp_servers: typing.List[str] = None,
  revocation_signature_algorithm: str = None,
  usage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.backend">backend</a></code> | <code>str</code> | Full path where PKI backend is mounted. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerRef">issuer_ref</a></code> | <code>str</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.crlDistributionPoints">crl_distribution_points</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the CRL Distribution Points field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.disableCriticalExtensionChecks">disable_critical_extension_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.disableNameChecks">disable_name_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.disableNameConstraintChecks">disable_name_constraint_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.disablePathLengthChecks">disable_path_length_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.enableAiaUrlTemplating">enable_aia_url_templating</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies that the AIA URL values should be templated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerName">issuer_name</a></code> | <code>str</code> | Reference to an existing issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuingCertificates">issuing_certificates</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the Issuing Certificate field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.leafNotAfterBehavior">leaf_not_after_behavior</a></code> | <code>str</code> | Behavior of a leaf's 'NotAfter' field during issuance. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.manualChain">manual_chain</a></code> | <code>typing.List[str]</code> | Chain of issuer references to build this issuer's computed CAChain field from, when non-empty. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.namespace">namespace</a></code> | <code>str</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.ocspServers">ocsp_servers</a></code> | <code>typing.List[str]</code> | Specifies the URL values for the OCSP Servers field. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.revocationSignatureAlgorithm">revocation_signature_algorithm</a></code> | <code>str</code> | Which signature algorithm to use when building CRLs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.usage">usage</a></code> | <code>str</code> | Comma-separated list of allowed usages for this issuer. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.backend"></a>

```python
backend: str
```

- *Type:* str

Full path where PKI backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#backend PkiSecretBackendIssuer#backend}

---

##### `issuer_ref`<sup>Required</sup> <a name="issuer_ref" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerRef"></a>

```python
issuer_ref: str
```

- *Type:* str

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#issuer_ref PkiSecretBackendIssuer#issuer_ref}

---

##### `crl_distribution_points`<sup>Optional</sup> <a name="crl_distribution_points" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.crlDistributionPoints"></a>

```python
crl_distribution_points: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the URL values for the CRL Distribution Points field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#crl_distribution_points PkiSecretBackendIssuer#crl_distribution_points}

---

##### `disable_critical_extension_checks`<sup>Optional</sup> <a name="disable_critical_extension_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.disableCriticalExtensionChecks"></a>

```python
disable_critical_extension_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the issued certificate) contain critical extensions not processed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#disable_critical_extension_checks PkiSecretBackendIssuer#disable_critical_extension_checks}

---

##### `disable_name_checks`<sup>Optional</sup> <a name="disable_name_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.disableNameChecks"></a>

```python
disable_name_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) contains a link in which the subject of the issuing certificate does not match the named issuer of the certificate it signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#disable_name_checks PkiSecretBackendIssuer#disable_name_checks}

---

##### `disable_name_constraint_checks`<sup>Optional</sup> <a name="disable_name_constraint_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.disableNameConstraintChecks"></a>

```python
disable_name_constraint_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) violates the name constraints critical extension of one of the issuer certificates in the chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#disable_name_constraint_checks PkiSecretBackendIssuer#disable_name_constraint_checks}

---

##### `disable_path_length_checks`<sup>Optional</sup> <a name="disable_path_length_checks" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.disablePathLengthChecks"></a>

```python
disable_path_length_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This determines whether this issuer is able to issue certificates where the chain of trust (including the final issued certificate) is longer than allowed by a certificate authority in that chain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#disable_path_length_checks PkiSecretBackendIssuer#disable_path_length_checks}

---

##### `enable_aia_url_templating`<sup>Optional</sup> <a name="enable_aia_url_templating" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.enableAiaUrlTemplating"></a>

```python
enable_aia_url_templating: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies that the AIA URL values should be templated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#enable_aia_url_templating PkiSecretBackendIssuer#enable_aia_url_templating}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#id PkiSecretBackendIssuer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuer_name`<sup>Optional</sup> <a name="issuer_name" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuerName"></a>

```python
issuer_name: str
```

- *Type:* str

Reference to an existing issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#issuer_name PkiSecretBackendIssuer#issuer_name}

---

##### `issuing_certificates`<sup>Optional</sup> <a name="issuing_certificates" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.issuingCertificates"></a>

```python
issuing_certificates: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the URL values for the Issuing Certificate field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#issuing_certificates PkiSecretBackendIssuer#issuing_certificates}

---

##### `leaf_not_after_behavior`<sup>Optional</sup> <a name="leaf_not_after_behavior" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.leafNotAfterBehavior"></a>

```python
leaf_not_after_behavior: str
```

- *Type:* str

Behavior of a leaf's 'NotAfter' field during issuance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#leaf_not_after_behavior PkiSecretBackendIssuer#leaf_not_after_behavior}

---

##### `manual_chain`<sup>Optional</sup> <a name="manual_chain" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.manualChain"></a>

```python
manual_chain: typing.List[str]
```

- *Type:* typing.List[str]

Chain of issuer references to build this issuer's computed CAChain field from, when non-empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#manual_chain PkiSecretBackendIssuer#manual_chain}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#namespace PkiSecretBackendIssuer#namespace}

---

##### `ocsp_servers`<sup>Optional</sup> <a name="ocsp_servers" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.ocspServers"></a>

```python
ocsp_servers: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the URL values for the OCSP Servers field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#ocsp_servers PkiSecretBackendIssuer#ocsp_servers}

---

##### `revocation_signature_algorithm`<sup>Optional</sup> <a name="revocation_signature_algorithm" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.revocationSignatureAlgorithm"></a>

```python
revocation_signature_algorithm: str
```

- *Type:* str

Which signature algorithm to use when building CRLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#revocation_signature_algorithm PkiSecretBackendIssuer#revocation_signature_algorithm}

---

##### `usage`<sup>Optional</sup> <a name="usage" id="@cdktf/provider-vault.pkiSecretBackendIssuer.PkiSecretBackendIssuerConfig.property.usage"></a>

```python
usage: str
```

- *Type:* str

Comma-separated list of allowed usages for this issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.8.0/docs/resources/pki_secret_backend_issuer#usage PkiSecretBackendIssuer#usage}

---



