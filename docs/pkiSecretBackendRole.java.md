# `vault_pki_secret_backend_role`

Refer to the Terraform Registory for docs: [`vault_pki_secret_backend_role`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role).

# `pkiSecretBackendRole` Submodule <a name="`pkiSecretBackendRole` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRole <a name="PkiSecretBackendRole" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role vault_pki_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_role.PkiSecretBackendRole;

PkiSecretBackendRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backend(java.lang.String)
    .name(java.lang.String)
//  .allowAnyName(java.lang.Boolean)
//  .allowAnyName(IResolvable)
//  .allowBareDomains(java.lang.Boolean)
//  .allowBareDomains(IResolvable)
//  .allowedDomains(java.util.List<java.lang.String>)
//  .allowedDomainsTemplate(java.lang.Boolean)
//  .allowedDomainsTemplate(IResolvable)
//  .allowedOtherSans(java.util.List<java.lang.String>)
//  .allowedSerialNumbers(java.util.List<java.lang.String>)
//  .allowedUriSans(java.util.List<java.lang.String>)
//  .allowedUriSansTemplate(java.lang.Boolean)
//  .allowedUriSansTemplate(IResolvable)
//  .allowedUserIds(java.util.List<java.lang.String>)
//  .allowGlobDomains(java.lang.Boolean)
//  .allowGlobDomains(IResolvable)
//  .allowIpSans(java.lang.Boolean)
//  .allowIpSans(IResolvable)
//  .allowLocalhost(java.lang.Boolean)
//  .allowLocalhost(IResolvable)
//  .allowSubdomains(java.lang.Boolean)
//  .allowSubdomains(IResolvable)
//  .allowWildcardCertificates(java.lang.Boolean)
//  .allowWildcardCertificates(IResolvable)
//  .basicConstraintsValidForNonCa(java.lang.Boolean)
//  .basicConstraintsValidForNonCa(IResolvable)
//  .clientFlag(java.lang.Boolean)
//  .clientFlag(IResolvable)
//  .codeSigningFlag(java.lang.Boolean)
//  .codeSigningFlag(IResolvable)
//  .country(java.util.List<java.lang.String>)
//  .emailProtectionFlag(java.lang.Boolean)
//  .emailProtectionFlag(IResolvable)
//  .enforceHostnames(java.lang.Boolean)
//  .enforceHostnames(IResolvable)
//  .extKeyUsage(java.util.List<java.lang.String>)
//  .generateLease(java.lang.Boolean)
//  .generateLease(IResolvable)
//  .id(java.lang.String)
//  .issuerRef(java.lang.String)
//  .keyBits(java.lang.Number)
//  .keyType(java.lang.String)
//  .keyUsage(java.util.List<java.lang.String>)
//  .locality(java.util.List<java.lang.String>)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .noStore(java.lang.Boolean)
//  .noStore(IResolvable)
//  .notBeforeDuration(java.lang.String)
//  .organization(java.util.List<java.lang.String>)
//  .ou(java.util.List<java.lang.String>)
//  .policyIdentifier(IResolvable)
//  .policyIdentifier(java.util.List<PkiSecretBackendRolePolicyIdentifier>)
//  .policyIdentifiers(java.util.List<java.lang.String>)
//  .postalCode(java.util.List<java.lang.String>)
//  .province(java.util.List<java.lang.String>)
//  .requireCn(java.lang.Boolean)
//  .requireCn(IResolvable)
//  .serverFlag(java.lang.Boolean)
//  .serverFlag(IResolvable)
//  .streetAddress(java.util.List<java.lang.String>)
//  .ttl(java.lang.String)
//  .useCsrCommonName(java.lang.Boolean)
//  .useCsrCommonName(IResolvable)
//  .useCsrSans(java.lang.Boolean)
//  .useCsrSans(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowAnyName">allowAnyName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow any name. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowBareDomains">allowBareDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow certificates matching the actual domain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedDomains">allowedDomains</a></code> | <code>java.util.List<java.lang.String></code> | The domains of the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedDomainsTemplate">allowedDomainsTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedOtherSans">allowedOtherSans</a></code> | <code>java.util.List<java.lang.String></code> | Defines allowed custom SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedSerialNumbers">allowedSerialNumbers</a></code> | <code>java.util.List<java.lang.String></code> | Defines allowed Subject serial numbers. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUriSans">allowedUriSans</a></code> | <code>java.util.List<java.lang.String></code> | Defines allowed URI SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUriSansTemplate">allowedUriSansTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUserIds">allowedUserIds</a></code> | <code>java.util.List<java.lang.String></code> | The allowed User ID's. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowGlobDomains">allowGlobDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow names containing glob patterns. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowIpSans">allowIpSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow IP SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowLocalhost">allowLocalhost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow certificates for localhost. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowSubdomains">allowSubdomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow certificates matching subdomains. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowWildcardCertificates">allowWildcardCertificates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow wildcard certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.basicConstraintsValidForNonCa">basicConstraintsValidForNonCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to mark basic constraints valid when issuing non-CA certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.clientFlag">clientFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify certificates for client use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.codeSigningFlag">codeSigningFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify certificates for code signing use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.country">country</a></code> | <code>java.util.List<java.lang.String></code> | The country of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.emailProtectionFlag">emailProtectionFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify certificates for email protection use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.enforceHostnames">enforceHostnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow only valid host names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.extKeyUsage">extKeyUsage</a></code> | <code>java.util.List<java.lang.String></code> | Specify the allowed extended key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.generateLease">generateLease</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to generate leases with certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyBits">keyBits</a></code> | <code>java.lang.Number</code> | The number of bits of generated keys. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyType">keyType</a></code> | <code>java.lang.String</code> | The generated key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyUsage">keyUsage</a></code> | <code>java.util.List<java.lang.String></code> | Specify the allowed key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.locality">locality</a></code> | <code>java.util.List<java.lang.String></code> | The locality of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | The maximum TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.noStore">noStore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to not store certificates in the storage backend. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.notBeforeDuration">notBeforeDuration</a></code> | <code>java.lang.String</code> | Specifies the duration by which to backdate the NotBefore property. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.organization">organization</a></code> | <code>java.util.List<java.lang.String></code> | The organization of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.ou">ou</a></code> | <code>java.util.List<java.lang.String></code> | The organization unit of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.policyIdentifier">policyIdentifier</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>></code> | policy_identifier block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.policyIdentifiers">policyIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Specify the list of allowed policies OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.postalCode">postalCode</a></code> | <code>java.util.List<java.lang.String></code> | The postal code of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.province">province</a></code> | <code>java.util.List<java.lang.String></code> | The province of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.requireCn">requireCn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to force CN usage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.serverFlag">serverFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify certificates for server use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.streetAddress">streetAddress</a></code> | <code>java.util.List<java.lang.String></code> | The street address of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.useCsrCommonName">useCsrCommonName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to use the CN in the CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.useCsrSans">useCsrSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to use the SANs in the CSR. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#backend PkiSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#name PkiSecretBackendRole#name}

---

##### `allowAnyName`<sup>Optional</sup> <a name="allowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowAnyName"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow any name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_any_name PkiSecretBackendRole#allow_any_name}

---

##### `allowBareDomains`<sup>Optional</sup> <a name="allowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowBareDomains"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow certificates matching the actual domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_bare_domains PkiSecretBackendRole#allow_bare_domains}

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedDomains"></a>

- *Type:* java.util.List<java.lang.String>

The domains of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_domains PkiSecretBackendRole#allowed_domains}

---

##### `allowedDomainsTemplate`<sup>Optional</sup> <a name="allowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedDomainsTemplate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_domains_template PkiSecretBackendRole#allowed_domains_template}

---

##### `allowedOtherSans`<sup>Optional</sup> <a name="allowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedOtherSans"></a>

- *Type:* java.util.List<java.lang.String>

Defines allowed custom SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_other_sans PkiSecretBackendRole#allowed_other_sans}

---

##### `allowedSerialNumbers`<sup>Optional</sup> <a name="allowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedSerialNumbers"></a>

- *Type:* java.util.List<java.lang.String>

Defines allowed Subject serial numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_serial_numbers PkiSecretBackendRole#allowed_serial_numbers}

---

##### `allowedUriSans`<sup>Optional</sup> <a name="allowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUriSans"></a>

- *Type:* java.util.List<java.lang.String>

Defines allowed URI SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_uri_sans PkiSecretBackendRole#allowed_uri_sans}

---

##### `allowedUriSansTemplate`<sup>Optional</sup> <a name="allowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUriSansTemplate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_uri_sans_template PkiSecretBackendRole#allowed_uri_sans_template}

---

##### `allowedUserIds`<sup>Optional</sup> <a name="allowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowedUserIds"></a>

- *Type:* java.util.List<java.lang.String>

The allowed User ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_user_ids PkiSecretBackendRole#allowed_user_ids}

---

##### `allowGlobDomains`<sup>Optional</sup> <a name="allowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowGlobDomains"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow names containing glob patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_glob_domains PkiSecretBackendRole#allow_glob_domains}

---

##### `allowIpSans`<sup>Optional</sup> <a name="allowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowIpSans"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow IP SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_ip_sans PkiSecretBackendRole#allow_ip_sans}

---

##### `allowLocalhost`<sup>Optional</sup> <a name="allowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowLocalhost"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow certificates for localhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_localhost PkiSecretBackendRole#allow_localhost}

---

##### `allowSubdomains`<sup>Optional</sup> <a name="allowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowSubdomains"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow certificates matching subdomains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_subdomains PkiSecretBackendRole#allow_subdomains}

---

##### `allowWildcardCertificates`<sup>Optional</sup> <a name="allowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.allowWildcardCertificates"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow wildcard certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_wildcard_certificates PkiSecretBackendRole#allow_wildcard_certificates}

---

##### `basicConstraintsValidForNonCa`<sup>Optional</sup> <a name="basicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.basicConstraintsValidForNonCa"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to mark basic constraints valid when issuing non-CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#basic_constraints_valid_for_non_ca PkiSecretBackendRole#basic_constraints_valid_for_non_ca}

---

##### `clientFlag`<sup>Optional</sup> <a name="clientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.clientFlag"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify certificates for client use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#client_flag PkiSecretBackendRole#client_flag}

---

##### `codeSigningFlag`<sup>Optional</sup> <a name="codeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.codeSigningFlag"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify certificates for code signing use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#code_signing_flag PkiSecretBackendRole#code_signing_flag}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.country"></a>

- *Type:* java.util.List<java.lang.String>

The country of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#country PkiSecretBackendRole#country}

---

##### `emailProtectionFlag`<sup>Optional</sup> <a name="emailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.emailProtectionFlag"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify certificates for email protection use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#email_protection_flag PkiSecretBackendRole#email_protection_flag}

---

##### `enforceHostnames`<sup>Optional</sup> <a name="enforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.enforceHostnames"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow only valid host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#enforce_hostnames PkiSecretBackendRole#enforce_hostnames}

---

##### `extKeyUsage`<sup>Optional</sup> <a name="extKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.extKeyUsage"></a>

- *Type:* java.util.List<java.lang.String>

Specify the allowed extended key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#ext_key_usage PkiSecretBackendRole#ext_key_usage}

---

##### `generateLease`<sup>Optional</sup> <a name="generateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.generateLease"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to generate leases with certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#generate_lease PkiSecretBackendRole#generate_lease}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerRef`<sup>Optional</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.issuerRef"></a>

- *Type:* java.lang.String

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#issuer_ref PkiSecretBackendRole#issuer_ref}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyBits"></a>

- *Type:* java.lang.Number

The number of bits of generated keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#key_bits PkiSecretBackendRole#key_bits}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyType"></a>

- *Type:* java.lang.String

The generated key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#key_type PkiSecretBackendRole#key_type}

---

##### `keyUsage`<sup>Optional</sup> <a name="keyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.keyUsage"></a>

- *Type:* java.util.List<java.lang.String>

Specify the allowed key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#key_usage PkiSecretBackendRole#key_usage}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.locality"></a>

- *Type:* java.util.List<java.lang.String>

The locality of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#locality PkiSecretBackendRole#locality}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.maxTtl"></a>

- *Type:* java.lang.String

The maximum TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#max_ttl PkiSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#namespace PkiSecretBackendRole#namespace}

---

##### `noStore`<sup>Optional</sup> <a name="noStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.noStore"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to not store certificates in the storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#no_store PkiSecretBackendRole#no_store}

---

##### `notBeforeDuration`<sup>Optional</sup> <a name="notBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.notBeforeDuration"></a>

- *Type:* java.lang.String

Specifies the duration by which to backdate the NotBefore property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#not_before_duration PkiSecretBackendRole#not_before_duration}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.organization"></a>

- *Type:* java.util.List<java.lang.String>

The organization of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#organization PkiSecretBackendRole#organization}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.ou"></a>

- *Type:* java.util.List<java.lang.String>

The organization unit of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#ou PkiSecretBackendRole#ou}

---

##### `policyIdentifier`<sup>Optional</sup> <a name="policyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.policyIdentifier"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>>

policy_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#policy_identifier PkiSecretBackendRole#policy_identifier}

---

##### `policyIdentifiers`<sup>Optional</sup> <a name="policyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.policyIdentifiers"></a>

- *Type:* java.util.List<java.lang.String>

Specify the list of allowed policies OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#policy_identifiers PkiSecretBackendRole#policy_identifiers}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.postalCode"></a>

- *Type:* java.util.List<java.lang.String>

The postal code of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#postal_code PkiSecretBackendRole#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.province"></a>

- *Type:* java.util.List<java.lang.String>

The province of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#province PkiSecretBackendRole#province}

---

##### `requireCn`<sup>Optional</sup> <a name="requireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.requireCn"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to force CN usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#require_cn PkiSecretBackendRole#require_cn}

---

##### `serverFlag`<sup>Optional</sup> <a name="serverFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.serverFlag"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify certificates for server use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#server_flag PkiSecretBackendRole#server_flag}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.streetAddress"></a>

- *Type:* java.util.List<java.lang.String>

The street address of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#street_address PkiSecretBackendRole#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

The TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#ttl PkiSecretBackendRole#ttl}

---

##### `useCsrCommonName`<sup>Optional</sup> <a name="useCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.useCsrCommonName"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to use the CN in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#use_csr_common_name PkiSecretBackendRole#use_csr_common_name}

---

##### `useCsrSans`<sup>Optional</sup> <a name="useCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.useCsrSans"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to use the SANs in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#use_csr_sans PkiSecretBackendRole#use_csr_sans}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier">putPolicyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowAnyName">resetAllowAnyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowBareDomains">resetAllowBareDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomainsTemplate">resetAllowedDomainsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedOtherSans">resetAllowedOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedSerialNumbers">resetAllowedSerialNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSans">resetAllowedUriSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSansTemplate">resetAllowedUriSansTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUserIds">resetAllowedUserIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowGlobDomains">resetAllowGlobDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowIpSans">resetAllowIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowLocalhost">resetAllowLocalhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowSubdomains">resetAllowSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowWildcardCertificates">resetAllowWildcardCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetBasicConstraintsValidForNonCa">resetBasicConstraintsValidForNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetClientFlag">resetClientFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCodeSigningFlag">resetCodeSigningFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEmailProtectionFlag">resetEmailProtectionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEnforceHostnames">resetEnforceHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsage">resetExtKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetGenerateLease">resetGenerateLease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetIssuerRef">resetIssuerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyUsage">resetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStore">resetNoStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotBeforeDuration">resetNotBeforeDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOu">resetOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifier">resetPolicyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifiers">resetPolicyIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetRequireCn">resetRequireCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetServerFlag">resetServerFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrCommonName">resetUseCsrCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrSans">resetUseCsrSans</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putPolicyIdentifier` <a name="putPolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier"></a>

```java
public void putPolicyIdentifier(IResolvable OR java.util.List<PkiSecretBackendRolePolicyIdentifier> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>>

---

##### `resetAllowAnyName` <a name="resetAllowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowAnyName"></a>

```java
public void resetAllowAnyName()
```

##### `resetAllowBareDomains` <a name="resetAllowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowBareDomains"></a>

```java
public void resetAllowBareDomains()
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomains"></a>

```java
public void resetAllowedDomains()
```

##### `resetAllowedDomainsTemplate` <a name="resetAllowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomainsTemplate"></a>

```java
public void resetAllowedDomainsTemplate()
```

##### `resetAllowedOtherSans` <a name="resetAllowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedOtherSans"></a>

```java
public void resetAllowedOtherSans()
```

##### `resetAllowedSerialNumbers` <a name="resetAllowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedSerialNumbers"></a>

```java
public void resetAllowedSerialNumbers()
```

##### `resetAllowedUriSans` <a name="resetAllowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSans"></a>

```java
public void resetAllowedUriSans()
```

##### `resetAllowedUriSansTemplate` <a name="resetAllowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSansTemplate"></a>

```java
public void resetAllowedUriSansTemplate()
```

##### `resetAllowedUserIds` <a name="resetAllowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUserIds"></a>

```java
public void resetAllowedUserIds()
```

##### `resetAllowGlobDomains` <a name="resetAllowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowGlobDomains"></a>

```java
public void resetAllowGlobDomains()
```

##### `resetAllowIpSans` <a name="resetAllowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowIpSans"></a>

```java
public void resetAllowIpSans()
```

##### `resetAllowLocalhost` <a name="resetAllowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowLocalhost"></a>

```java
public void resetAllowLocalhost()
```

##### `resetAllowSubdomains` <a name="resetAllowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowSubdomains"></a>

```java
public void resetAllowSubdomains()
```

##### `resetAllowWildcardCertificates` <a name="resetAllowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowWildcardCertificates"></a>

```java
public void resetAllowWildcardCertificates()
```

##### `resetBasicConstraintsValidForNonCa` <a name="resetBasicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetBasicConstraintsValidForNonCa"></a>

```java
public void resetBasicConstraintsValidForNonCa()
```

##### `resetClientFlag` <a name="resetClientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetClientFlag"></a>

```java
public void resetClientFlag()
```

##### `resetCodeSigningFlag` <a name="resetCodeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCodeSigningFlag"></a>

```java
public void resetCodeSigningFlag()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetEmailProtectionFlag` <a name="resetEmailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEmailProtectionFlag"></a>

```java
public void resetEmailProtectionFlag()
```

##### `resetEnforceHostnames` <a name="resetEnforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEnforceHostnames"></a>

```java
public void resetEnforceHostnames()
```

##### `resetExtKeyUsage` <a name="resetExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsage"></a>

```java
public void resetExtKeyUsage()
```

##### `resetGenerateLease` <a name="resetGenerateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetGenerateLease"></a>

```java
public void resetGenerateLease()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetIssuerRef` <a name="resetIssuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetIssuerRef"></a>

```java
public void resetIssuerRef()
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyBits"></a>

```java
public void resetKeyBits()
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyType"></a>

```java
public void resetKeyType()
```

##### `resetKeyUsage` <a name="resetKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyUsage"></a>

```java
public void resetKeyUsage()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetMaxTtl"></a>

```java
public void resetMaxTtl()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNoStore` <a name="resetNoStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStore"></a>

```java
public void resetNoStore()
```

##### `resetNotBeforeDuration` <a name="resetNotBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotBeforeDuration"></a>

```java
public void resetNotBeforeDuration()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOu` <a name="resetOu" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOu"></a>

```java
public void resetOu()
```

##### `resetPolicyIdentifier` <a name="resetPolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifier"></a>

```java
public void resetPolicyIdentifier()
```

##### `resetPolicyIdentifiers` <a name="resetPolicyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifiers"></a>

```java
public void resetPolicyIdentifiers()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetRequireCn` <a name="resetRequireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetRequireCn"></a>

```java
public void resetRequireCn()
```

##### `resetServerFlag` <a name="resetServerFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetServerFlag"></a>

```java
public void resetServerFlag()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetUseCsrCommonName` <a name="resetUseCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrCommonName"></a>

```java
public void resetUseCsrCommonName()
```

##### `resetUseCsrSans` <a name="resetUseCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrSans"></a>

```java
public void resetUseCsrSans()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_role.PkiSecretBackendRole;

PkiSecretBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_role.PkiSecretBackendRole;

PkiSecretBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_role.PkiSecretBackendRole;

PkiSecretBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_role.PkiSecretBackendRole;

PkiSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiSecretBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PkiSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifier">policyIdentifier</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList">PkiSecretBackendRolePolicyIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyNameInput">allowAnyNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomainsInput">allowBareDomainsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplateInput">allowedDomainsTemplateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSansInput">allowedOtherSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbersInput">allowedSerialNumbersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansInput">allowedUriSansInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplateInput">allowedUriSansTemplateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIdsInput">allowedUserIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomainsInput">allowGlobDomainsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSansInput">allowIpSansInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhostInput">allowLocalhostInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomainsInput">allowSubdomainsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificatesInput">allowWildcardCertificatesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCaInput">basicConstraintsValidForNonCaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlagInput">clientFlagInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlagInput">codeSigningFlagInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.countryInput">countryInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlagInput">emailProtectionFlagInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnamesInput">enforceHostnamesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageInput">extKeyUsageInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLeaseInput">generateLeaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRefInput">issuerRefInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBitsInput">keyBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsageInput">keyUsageInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.localityInput">localityInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreInput">noStoreInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDurationInput">notBeforeDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organizationInput">organizationInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ouInput">ouInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifierInput">policyIdentifierInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiersInput">policyIdentifiersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCodeInput">postalCodeInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provinceInput">provinceInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCnInput">requireCnInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlagInput">serverFlagInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddressInput">streetAddressInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonNameInput">useCsrCommonNameInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSansInput">useCsrSansInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyName">allowAnyName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomains">allowBareDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomains">allowedDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplate">allowedDomainsTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSans">allowedOtherSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbers">allowedSerialNumbers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSans">allowedUriSans</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplate">allowedUriSansTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIds">allowedUserIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomains">allowGlobDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSans">allowIpSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhost">allowLocalhost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomains">allowSubdomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificates">allowWildcardCertificates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCa">basicConstraintsValidForNonCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlag">clientFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlag">codeSigningFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.country">country</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlag">emailProtectionFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnames">enforceHostnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsage">extKeyUsage</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLease">generateLease</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBits">keyBits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsage">keyUsage</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.locality">locality</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStore">noStore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDuration">notBeforeDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organization">organization</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ou">ou</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiers">policyIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCode">postalCode</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.province">province</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCn">requireCn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlag">serverFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddress">streetAddress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonName">useCsrCommonName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSans">useCsrSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `policyIdentifier`<sup>Required</sup> <a name="policyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifier"></a>

```java
public PkiSecretBackendRolePolicyIdentifierList getPolicyIdentifier();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList">PkiSecretBackendRolePolicyIdentifierList</a>

---

##### `allowAnyNameInput`<sup>Optional</sup> <a name="allowAnyNameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyNameInput"></a>

```java
public java.lang.Object getAllowAnyNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowBareDomainsInput`<sup>Optional</sup> <a name="allowBareDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomainsInput"></a>

```java
public java.lang.Object getAllowBareDomainsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDomainsTemplateInput`<sup>Optional</sup> <a name="allowedDomainsTemplateInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplateInput"></a>

```java
public java.lang.Object getAllowedDomainsTemplateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedOtherSansInput`<sup>Optional</sup> <a name="allowedOtherSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSansInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOtherSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedSerialNumbersInput`<sup>Optional</sup> <a name="allowedSerialNumbersInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedSerialNumbersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedUriSansInput`<sup>Optional</sup> <a name="allowedUriSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansInput"></a>

```java
public java.util.List<java.lang.String> getAllowedUriSansInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedUriSansTemplateInput`<sup>Optional</sup> <a name="allowedUriSansTemplateInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplateInput"></a>

```java
public java.lang.Object getAllowedUriSansTemplateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedUserIdsInput`<sup>Optional</sup> <a name="allowedUserIdsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIdsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedUserIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowGlobDomainsInput`<sup>Optional</sup> <a name="allowGlobDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomainsInput"></a>

```java
public java.lang.Object getAllowGlobDomainsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowIpSansInput`<sup>Optional</sup> <a name="allowIpSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSansInput"></a>

```java
public java.lang.Object getAllowIpSansInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowLocalhostInput`<sup>Optional</sup> <a name="allowLocalhostInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhostInput"></a>

```java
public java.lang.Object getAllowLocalhostInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowSubdomainsInput`<sup>Optional</sup> <a name="allowSubdomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomainsInput"></a>

```java
public java.lang.Object getAllowSubdomainsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowWildcardCertificatesInput`<sup>Optional</sup> <a name="allowWildcardCertificatesInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificatesInput"></a>

```java
public java.lang.Object getAllowWildcardCertificatesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `basicConstraintsValidForNonCaInput`<sup>Optional</sup> <a name="basicConstraintsValidForNonCaInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCaInput"></a>

```java
public java.lang.Object getBasicConstraintsValidForNonCaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientFlagInput`<sup>Optional</sup> <a name="clientFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlagInput"></a>

```java
public java.lang.Object getClientFlagInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `codeSigningFlagInput`<sup>Optional</sup> <a name="codeSigningFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlagInput"></a>

```java
public java.lang.Object getCodeSigningFlagInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.countryInput"></a>

```java
public java.util.List<java.lang.String> getCountryInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailProtectionFlagInput`<sup>Optional</sup> <a name="emailProtectionFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlagInput"></a>

```java
public java.lang.Object getEmailProtectionFlagInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforceHostnamesInput`<sup>Optional</sup> <a name="enforceHostnamesInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnamesInput"></a>

```java
public java.lang.Object getEnforceHostnamesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extKeyUsageInput`<sup>Optional</sup> <a name="extKeyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageInput"></a>

```java
public java.util.List<java.lang.String> getExtKeyUsageInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `generateLeaseInput`<sup>Optional</sup> <a name="generateLeaseInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLeaseInput"></a>

```java
public java.lang.Object getGenerateLeaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerRefInput`<sup>Optional</sup> <a name="issuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRefInput"></a>

```java
public java.lang.String getIssuerRefInput();
```

- *Type:* java.lang.String

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBitsInput"></a>

```java
public java.lang.Number getKeyBitsInput();
```

- *Type:* java.lang.Number

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsageInput"></a>

```java
public java.util.List<java.lang.String> getKeyUsageInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.localityInput"></a>

```java
public java.util.List<java.lang.String> getLocalityInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtlInput"></a>

```java
public java.lang.String getMaxTtlInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `noStoreInput`<sup>Optional</sup> <a name="noStoreInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreInput"></a>

```java
public java.lang.Object getNoStoreInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notBeforeDurationInput`<sup>Optional</sup> <a name="notBeforeDurationInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDurationInput"></a>

```java
public java.lang.String getNotBeforeDurationInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organizationInput"></a>

```java
public java.util.List<java.lang.String> getOrganizationInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ouInput`<sup>Optional</sup> <a name="ouInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ouInput"></a>

```java
public java.util.List<java.lang.String> getOuInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyIdentifierInput`<sup>Optional</sup> <a name="policyIdentifierInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifierInput"></a>

```java
public java.lang.Object getPolicyIdentifierInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>>

---

##### `policyIdentifiersInput`<sup>Optional</sup> <a name="policyIdentifiersInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiersInput"></a>

```java
public java.util.List<java.lang.String> getPolicyIdentifiersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCodeInput"></a>

```java
public java.util.List<java.lang.String> getPostalCodeInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provinceInput"></a>

```java
public java.util.List<java.lang.String> getProvinceInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireCnInput`<sup>Optional</sup> <a name="requireCnInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCnInput"></a>

```java
public java.lang.Object getRequireCnInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverFlagInput`<sup>Optional</sup> <a name="serverFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlagInput"></a>

```java
public java.lang.Object getServerFlagInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddressInput"></a>

```java
public java.util.List<java.lang.String> getStreetAddressInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `useCsrCommonNameInput`<sup>Optional</sup> <a name="useCsrCommonNameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonNameInput"></a>

```java
public java.lang.Object getUseCsrCommonNameInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useCsrSansInput`<sup>Optional</sup> <a name="useCsrSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSansInput"></a>

```java
public java.lang.Object getUseCsrSansInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowAnyName`<sup>Required</sup> <a name="allowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyName"></a>

```java
public java.lang.Object getAllowAnyName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowBareDomains`<sup>Required</sup> <a name="allowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomains"></a>

```java
public java.lang.Object getAllowBareDomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedDomainsTemplate`<sup>Required</sup> <a name="allowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplate"></a>

```java
public java.lang.Object getAllowedDomainsTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedOtherSans`<sup>Required</sup> <a name="allowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSans"></a>

```java
public java.util.List<java.lang.String> getAllowedOtherSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedSerialNumbers`<sup>Required</sup> <a name="allowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbers"></a>

```java
public java.util.List<java.lang.String> getAllowedSerialNumbers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedUriSans`<sup>Required</sup> <a name="allowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSans"></a>

```java
public java.util.List<java.lang.String> getAllowedUriSans();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedUriSansTemplate`<sup>Required</sup> <a name="allowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplate"></a>

```java
public java.lang.Object getAllowedUriSansTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedUserIds`<sup>Required</sup> <a name="allowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIds"></a>

```java
public java.util.List<java.lang.String> getAllowedUserIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowGlobDomains`<sup>Required</sup> <a name="allowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomains"></a>

```java
public java.lang.Object getAllowGlobDomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowIpSans`<sup>Required</sup> <a name="allowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSans"></a>

```java
public java.lang.Object getAllowIpSans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowLocalhost`<sup>Required</sup> <a name="allowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhost"></a>

```java
public java.lang.Object getAllowLocalhost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowSubdomains`<sup>Required</sup> <a name="allowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomains"></a>

```java
public java.lang.Object getAllowSubdomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowWildcardCertificates`<sup>Required</sup> <a name="allowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificates"></a>

```java
public java.lang.Object getAllowWildcardCertificates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `basicConstraintsValidForNonCa`<sup>Required</sup> <a name="basicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCa"></a>

```java
public java.lang.Object getBasicConstraintsValidForNonCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientFlag`<sup>Required</sup> <a name="clientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlag"></a>

```java
public java.lang.Object getClientFlag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `codeSigningFlag`<sup>Required</sup> <a name="codeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlag"></a>

```java
public java.lang.Object getCodeSigningFlag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.country"></a>

```java
public java.util.List<java.lang.String> getCountry();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailProtectionFlag`<sup>Required</sup> <a name="emailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlag"></a>

```java
public java.lang.Object getEmailProtectionFlag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforceHostnames`<sup>Required</sup> <a name="enforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnames"></a>

```java
public java.lang.Object getEnforceHostnames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `extKeyUsage`<sup>Required</sup> <a name="extKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsage"></a>

```java
public java.util.List<java.lang.String> getExtKeyUsage();
```

- *Type:* java.util.List<java.lang.String>

---

##### `generateLease`<sup>Required</sup> <a name="generateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLease"></a>

```java
public java.lang.Object getGenerateLease();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRef"></a>

```java
public java.lang.String getIssuerRef();
```

- *Type:* java.lang.String

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBits"></a>

```java
public java.lang.Number getKeyBits();
```

- *Type:* java.lang.Number

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsage"></a>

```java
public java.util.List<java.lang.String> getKeyUsage();
```

- *Type:* java.util.List<java.lang.String>

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.locality"></a>

```java
public java.util.List<java.lang.String> getLocality();
```

- *Type:* java.util.List<java.lang.String>

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `noStore`<sup>Required</sup> <a name="noStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStore"></a>

```java
public java.lang.Object getNoStore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `notBeforeDuration`<sup>Required</sup> <a name="notBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDuration"></a>

```java
public java.lang.String getNotBeforeDuration();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organization"></a>

```java
public java.util.List<java.lang.String> getOrganization();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ou`<sup>Required</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ou"></a>

```java
public java.util.List<java.lang.String> getOu();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyIdentifiers`<sup>Required</sup> <a name="policyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiers"></a>

```java
public java.util.List<java.lang.String> getPolicyIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCode"></a>

```java
public java.util.List<java.lang.String> getPostalCode();
```

- *Type:* java.util.List<java.lang.String>

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.province"></a>

```java
public java.util.List<java.lang.String> getProvince();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireCn`<sup>Required</sup> <a name="requireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCn"></a>

```java
public java.lang.Object getRequireCn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverFlag`<sup>Required</sup> <a name="serverFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlag"></a>

```java
public java.lang.Object getServerFlag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddress"></a>

```java
public java.util.List<java.lang.String> getStreetAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `useCsrCommonName`<sup>Required</sup> <a name="useCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonName"></a>

```java
public java.lang.Object getUseCsrCommonName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `useCsrSans`<sup>Required</sup> <a name="useCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSans"></a>

```java
public java.lang.Object getUseCsrSans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRoleConfig <a name="PkiSecretBackendRoleConfig" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_role.PkiSecretBackendRoleConfig;

PkiSecretBackendRoleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backend(java.lang.String)
    .name(java.lang.String)
//  .allowAnyName(java.lang.Boolean)
//  .allowAnyName(IResolvable)
//  .allowBareDomains(java.lang.Boolean)
//  .allowBareDomains(IResolvable)
//  .allowedDomains(java.util.List<java.lang.String>)
//  .allowedDomainsTemplate(java.lang.Boolean)
//  .allowedDomainsTemplate(IResolvable)
//  .allowedOtherSans(java.util.List<java.lang.String>)
//  .allowedSerialNumbers(java.util.List<java.lang.String>)
//  .allowedUriSans(java.util.List<java.lang.String>)
//  .allowedUriSansTemplate(java.lang.Boolean)
//  .allowedUriSansTemplate(IResolvable)
//  .allowedUserIds(java.util.List<java.lang.String>)
//  .allowGlobDomains(java.lang.Boolean)
//  .allowGlobDomains(IResolvable)
//  .allowIpSans(java.lang.Boolean)
//  .allowIpSans(IResolvable)
//  .allowLocalhost(java.lang.Boolean)
//  .allowLocalhost(IResolvable)
//  .allowSubdomains(java.lang.Boolean)
//  .allowSubdomains(IResolvable)
//  .allowWildcardCertificates(java.lang.Boolean)
//  .allowWildcardCertificates(IResolvable)
//  .basicConstraintsValidForNonCa(java.lang.Boolean)
//  .basicConstraintsValidForNonCa(IResolvable)
//  .clientFlag(java.lang.Boolean)
//  .clientFlag(IResolvable)
//  .codeSigningFlag(java.lang.Boolean)
//  .codeSigningFlag(IResolvable)
//  .country(java.util.List<java.lang.String>)
//  .emailProtectionFlag(java.lang.Boolean)
//  .emailProtectionFlag(IResolvable)
//  .enforceHostnames(java.lang.Boolean)
//  .enforceHostnames(IResolvable)
//  .extKeyUsage(java.util.List<java.lang.String>)
//  .generateLease(java.lang.Boolean)
//  .generateLease(IResolvable)
//  .id(java.lang.String)
//  .issuerRef(java.lang.String)
//  .keyBits(java.lang.Number)
//  .keyType(java.lang.String)
//  .keyUsage(java.util.List<java.lang.String>)
//  .locality(java.util.List<java.lang.String>)
//  .maxTtl(java.lang.String)
//  .namespace(java.lang.String)
//  .noStore(java.lang.Boolean)
//  .noStore(IResolvable)
//  .notBeforeDuration(java.lang.String)
//  .organization(java.util.List<java.lang.String>)
//  .ou(java.util.List<java.lang.String>)
//  .policyIdentifier(IResolvable)
//  .policyIdentifier(java.util.List<PkiSecretBackendRolePolicyIdentifier>)
//  .policyIdentifiers(java.util.List<java.lang.String>)
//  .postalCode(java.util.List<java.lang.String>)
//  .province(java.util.List<java.lang.String>)
//  .requireCn(java.lang.Boolean)
//  .requireCn(IResolvable)
//  .serverFlag(java.lang.Boolean)
//  .serverFlag(IResolvable)
//  .streetAddress(java.util.List<java.lang.String>)
//  .ttl(java.lang.String)
//  .useCsrCommonName(java.lang.Boolean)
//  .useCsrCommonName(IResolvable)
//  .useCsrSans(java.lang.Boolean)
//  .useCsrSans(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowAnyName">allowAnyName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow any name. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowBareDomains">allowBareDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow certificates matching the actual domain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomains">allowedDomains</a></code> | <code>java.util.List<java.lang.String></code> | The domains of the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomainsTemplate">allowedDomainsTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedOtherSans">allowedOtherSans</a></code> | <code>java.util.List<java.lang.String></code> | Defines allowed custom SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedSerialNumbers">allowedSerialNumbers</a></code> | <code>java.util.List<java.lang.String></code> | Defines allowed Subject serial numbers. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSans">allowedUriSans</a></code> | <code>java.util.List<java.lang.String></code> | Defines allowed URI SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSansTemplate">allowedUriSansTemplate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUserIds">allowedUserIds</a></code> | <code>java.util.List<java.lang.String></code> | The allowed User ID's. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowGlobDomains">allowGlobDomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow names containing glob patterns. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowIpSans">allowIpSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow IP SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowLocalhost">allowLocalhost</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow certificates for localhost. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowSubdomains">allowSubdomains</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow certificates matching subdomains. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowWildcardCertificates">allowWildcardCertificates</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow wildcard certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.basicConstraintsValidForNonCa">basicConstraintsValidForNonCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to mark basic constraints valid when issuing non-CA certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.clientFlag">clientFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify certificates for client use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.codeSigningFlag">codeSigningFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify certificates for code signing use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.country">country</a></code> | <code>java.util.List<java.lang.String></code> | The country of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.emailProtectionFlag">emailProtectionFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify certificates for email protection use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.enforceHostnames">enforceHostnames</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow only valid host names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsage">extKeyUsage</a></code> | <code>java.util.List<java.lang.String></code> | Specify the allowed extended key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.generateLease">generateLease</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to generate leases with certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.issuerRef">issuerRef</a></code> | <code>java.lang.String</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyBits">keyBits</a></code> | <code>java.lang.Number</code> | The number of bits of generated keys. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyType">keyType</a></code> | <code>java.lang.String</code> | The generated key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyUsage">keyUsage</a></code> | <code>java.util.List<java.lang.String></code> | Specify the allowed key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.locality">locality</a></code> | <code>java.util.List<java.lang.String></code> | The locality of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>java.lang.String</code> | The maximum TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStore">noStore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to not store certificates in the storage backend. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notBeforeDuration">notBeforeDuration</a></code> | <code>java.lang.String</code> | Specifies the duration by which to backdate the NotBefore property. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.organization">organization</a></code> | <code>java.util.List<java.lang.String></code> | The organization of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ou">ou</a></code> | <code>java.util.List<java.lang.String></code> | The organization unit of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifier">policyIdentifier</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>></code> | policy_identifier block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifiers">policyIdentifiers</a></code> | <code>java.util.List<java.lang.String></code> | Specify the list of allowed policies OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.postalCode">postalCode</a></code> | <code>java.util.List<java.lang.String></code> | The postal code of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.province">province</a></code> | <code>java.util.List<java.lang.String></code> | The province of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.requireCn">requireCn</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to force CN usage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serverFlag">serverFlag</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to specify certificates for server use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.streetAddress">streetAddress</a></code> | <code>java.util.List<java.lang.String></code> | The street address of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrCommonName">useCsrCommonName</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to use the CN in the CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrSans">useCsrSans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to use the SANs in the CSR. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#backend PkiSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#name PkiSecretBackendRole#name}

---

##### `allowAnyName`<sup>Optional</sup> <a name="allowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowAnyName"></a>

```java
public java.lang.Object getAllowAnyName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow any name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_any_name PkiSecretBackendRole#allow_any_name}

---

##### `allowBareDomains`<sup>Optional</sup> <a name="allowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowBareDomains"></a>

```java
public java.lang.Object getAllowBareDomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow certificates matching the actual domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_bare_domains PkiSecretBackendRole#allow_bare_domains}

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedDomains();
```

- *Type:* java.util.List<java.lang.String>

The domains of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_domains PkiSecretBackendRole#allowed_domains}

---

##### `allowedDomainsTemplate`<sup>Optional</sup> <a name="allowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomainsTemplate"></a>

```java
public java.lang.Object getAllowedDomainsTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_domains_template PkiSecretBackendRole#allowed_domains_template}

---

##### `allowedOtherSans`<sup>Optional</sup> <a name="allowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedOtherSans"></a>

```java
public java.util.List<java.lang.String> getAllowedOtherSans();
```

- *Type:* java.util.List<java.lang.String>

Defines allowed custom SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_other_sans PkiSecretBackendRole#allowed_other_sans}

---

##### `allowedSerialNumbers`<sup>Optional</sup> <a name="allowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedSerialNumbers"></a>

```java
public java.util.List<java.lang.String> getAllowedSerialNumbers();
```

- *Type:* java.util.List<java.lang.String>

Defines allowed Subject serial numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_serial_numbers PkiSecretBackendRole#allowed_serial_numbers}

---

##### `allowedUriSans`<sup>Optional</sup> <a name="allowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSans"></a>

```java
public java.util.List<java.lang.String> getAllowedUriSans();
```

- *Type:* java.util.List<java.lang.String>

Defines allowed URI SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_uri_sans PkiSecretBackendRole#allowed_uri_sans}

---

##### `allowedUriSansTemplate`<sup>Optional</sup> <a name="allowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSansTemplate"></a>

```java
public java.lang.Object getAllowedUriSansTemplate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_uri_sans_template PkiSecretBackendRole#allowed_uri_sans_template}

---

##### `allowedUserIds`<sup>Optional</sup> <a name="allowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUserIds"></a>

```java
public java.util.List<java.lang.String> getAllowedUserIds();
```

- *Type:* java.util.List<java.lang.String>

The allowed User ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allowed_user_ids PkiSecretBackendRole#allowed_user_ids}

---

##### `allowGlobDomains`<sup>Optional</sup> <a name="allowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowGlobDomains"></a>

```java
public java.lang.Object getAllowGlobDomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow names containing glob patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_glob_domains PkiSecretBackendRole#allow_glob_domains}

---

##### `allowIpSans`<sup>Optional</sup> <a name="allowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowIpSans"></a>

```java
public java.lang.Object getAllowIpSans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow IP SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_ip_sans PkiSecretBackendRole#allow_ip_sans}

---

##### `allowLocalhost`<sup>Optional</sup> <a name="allowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowLocalhost"></a>

```java
public java.lang.Object getAllowLocalhost();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow certificates for localhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_localhost PkiSecretBackendRole#allow_localhost}

---

##### `allowSubdomains`<sup>Optional</sup> <a name="allowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowSubdomains"></a>

```java
public java.lang.Object getAllowSubdomains();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow certificates matching subdomains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_subdomains PkiSecretBackendRole#allow_subdomains}

---

##### `allowWildcardCertificates`<sup>Optional</sup> <a name="allowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowWildcardCertificates"></a>

```java
public java.lang.Object getAllowWildcardCertificates();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow wildcard certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#allow_wildcard_certificates PkiSecretBackendRole#allow_wildcard_certificates}

---

##### `basicConstraintsValidForNonCa`<sup>Optional</sup> <a name="basicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.basicConstraintsValidForNonCa"></a>

```java
public java.lang.Object getBasicConstraintsValidForNonCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to mark basic constraints valid when issuing non-CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#basic_constraints_valid_for_non_ca PkiSecretBackendRole#basic_constraints_valid_for_non_ca}

---

##### `clientFlag`<sup>Optional</sup> <a name="clientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.clientFlag"></a>

```java
public java.lang.Object getClientFlag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify certificates for client use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#client_flag PkiSecretBackendRole#client_flag}

---

##### `codeSigningFlag`<sup>Optional</sup> <a name="codeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.codeSigningFlag"></a>

```java
public java.lang.Object getCodeSigningFlag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify certificates for code signing use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#code_signing_flag PkiSecretBackendRole#code_signing_flag}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.country"></a>

```java
public java.util.List<java.lang.String> getCountry();
```

- *Type:* java.util.List<java.lang.String>

The country of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#country PkiSecretBackendRole#country}

---

##### `emailProtectionFlag`<sup>Optional</sup> <a name="emailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.emailProtectionFlag"></a>

```java
public java.lang.Object getEmailProtectionFlag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify certificates for email protection use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#email_protection_flag PkiSecretBackendRole#email_protection_flag}

---

##### `enforceHostnames`<sup>Optional</sup> <a name="enforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.enforceHostnames"></a>

```java
public java.lang.Object getEnforceHostnames();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow only valid host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#enforce_hostnames PkiSecretBackendRole#enforce_hostnames}

---

##### `extKeyUsage`<sup>Optional</sup> <a name="extKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsage"></a>

```java
public java.util.List<java.lang.String> getExtKeyUsage();
```

- *Type:* java.util.List<java.lang.String>

Specify the allowed extended key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#ext_key_usage PkiSecretBackendRole#ext_key_usage}

---

##### `generateLease`<sup>Optional</sup> <a name="generateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.generateLease"></a>

```java
public java.lang.Object getGenerateLease();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to generate leases with certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#generate_lease PkiSecretBackendRole#generate_lease}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerRef`<sup>Optional</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.issuerRef"></a>

```java
public java.lang.String getIssuerRef();
```

- *Type:* java.lang.String

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#issuer_ref PkiSecretBackendRole#issuer_ref}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyBits"></a>

```java
public java.lang.Number getKeyBits();
```

- *Type:* java.lang.Number

The number of bits of generated keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#key_bits PkiSecretBackendRole#key_bits}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

The generated key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#key_type PkiSecretBackendRole#key_type}

---

##### `keyUsage`<sup>Optional</sup> <a name="keyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyUsage"></a>

```java
public java.util.List<java.lang.String> getKeyUsage();
```

- *Type:* java.util.List<java.lang.String>

Specify the allowed key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#key_usage PkiSecretBackendRole#key_usage}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.locality"></a>

```java
public java.util.List<java.lang.String> getLocality();
```

- *Type:* java.util.List<java.lang.String>

The locality of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#locality PkiSecretBackendRole#locality}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.maxTtl"></a>

```java
public java.lang.String getMaxTtl();
```

- *Type:* java.lang.String

The maximum TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#max_ttl PkiSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#namespace PkiSecretBackendRole#namespace}

---

##### `noStore`<sup>Optional</sup> <a name="noStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStore"></a>

```java
public java.lang.Object getNoStore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to not store certificates in the storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#no_store PkiSecretBackendRole#no_store}

---

##### `notBeforeDuration`<sup>Optional</sup> <a name="notBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notBeforeDuration"></a>

```java
public java.lang.String getNotBeforeDuration();
```

- *Type:* java.lang.String

Specifies the duration by which to backdate the NotBefore property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#not_before_duration PkiSecretBackendRole#not_before_duration}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.organization"></a>

```java
public java.util.List<java.lang.String> getOrganization();
```

- *Type:* java.util.List<java.lang.String>

The organization of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#organization PkiSecretBackendRole#organization}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ou"></a>

```java
public java.util.List<java.lang.String> getOu();
```

- *Type:* java.util.List<java.lang.String>

The organization unit of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#ou PkiSecretBackendRole#ou}

---

##### `policyIdentifier`<sup>Optional</sup> <a name="policyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifier"></a>

```java
public java.lang.Object getPolicyIdentifier();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>>

policy_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#policy_identifier PkiSecretBackendRole#policy_identifier}

---

##### `policyIdentifiers`<sup>Optional</sup> <a name="policyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifiers"></a>

```java
public java.util.List<java.lang.String> getPolicyIdentifiers();
```

- *Type:* java.util.List<java.lang.String>

Specify the list of allowed policies OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#policy_identifiers PkiSecretBackendRole#policy_identifiers}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.postalCode"></a>

```java
public java.util.List<java.lang.String> getPostalCode();
```

- *Type:* java.util.List<java.lang.String>

The postal code of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#postal_code PkiSecretBackendRole#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.province"></a>

```java
public java.util.List<java.lang.String> getProvince();
```

- *Type:* java.util.List<java.lang.String>

The province of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#province PkiSecretBackendRole#province}

---

##### `requireCn`<sup>Optional</sup> <a name="requireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.requireCn"></a>

```java
public java.lang.Object getRequireCn();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to force CN usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#require_cn PkiSecretBackendRole#require_cn}

---

##### `serverFlag`<sup>Optional</sup> <a name="serverFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serverFlag"></a>

```java
public java.lang.Object getServerFlag();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to specify certificates for server use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#server_flag PkiSecretBackendRole#server_flag}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.streetAddress"></a>

```java
public java.util.List<java.lang.String> getStreetAddress();
```

- *Type:* java.util.List<java.lang.String>

The street address of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#street_address PkiSecretBackendRole#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

The TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#ttl PkiSecretBackendRole#ttl}

---

##### `useCsrCommonName`<sup>Optional</sup> <a name="useCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrCommonName"></a>

```java
public java.lang.Object getUseCsrCommonName();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to use the CN in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#use_csr_common_name PkiSecretBackendRole#use_csr_common_name}

---

##### `useCsrSans`<sup>Optional</sup> <a name="useCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrSans"></a>

```java
public java.lang.Object getUseCsrSans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to use the SANs in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#use_csr_sans PkiSecretBackendRole#use_csr_sans}

---

### PkiSecretBackendRolePolicyIdentifier <a name="PkiSecretBackendRolePolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_role.PkiSecretBackendRolePolicyIdentifier;

PkiSecretBackendRolePolicyIdentifier.builder()
    .oid(java.lang.String)
//  .cps(java.lang.String)
//  .notice(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.oid">oid</a></code> | <code>java.lang.String</code> | OID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.cps">cps</a></code> | <code>java.lang.String</code> | Optional CPS URL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.notice">notice</a></code> | <code>java.lang.String</code> | Optional notice. |

---

##### `oid`<sup>Required</sup> <a name="oid" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.oid"></a>

```java
public java.lang.String getOid();
```

- *Type:* java.lang.String

OID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#oid PkiSecretBackendRole#oid}

---

##### `cps`<sup>Optional</sup> <a name="cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.cps"></a>

```java
public java.lang.String getCps();
```

- *Type:* java.lang.String

Optional CPS URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#cps PkiSecretBackendRole#cps}

---

##### `notice`<sup>Optional</sup> <a name="notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.notice"></a>

```java
public java.lang.String getNotice();
```

- *Type:* java.lang.String

Optional notice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/pki_secret_backend_role#notice PkiSecretBackendRole#notice}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendRolePolicyIdentifierList <a name="PkiSecretBackendRolePolicyIdentifierList" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_role.PkiSecretBackendRolePolicyIdentifierList;

new PkiSecretBackendRolePolicyIdentifierList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get"></a>

```java
public PkiSecretBackendRolePolicyIdentifierOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>>

---


### PkiSecretBackendRolePolicyIdentifierOutputReference <a name="PkiSecretBackendRolePolicyIdentifierOutputReference" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_role.PkiSecretBackendRolePolicyIdentifierOutputReference;

new PkiSecretBackendRolePolicyIdentifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetCps">resetCps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetNotice">resetNotice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCps` <a name="resetCps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetCps"></a>

```java
public void resetCps()
```

##### `resetNotice` <a name="resetNotice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetNotice"></a>

```java
public void resetNotice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cpsInput">cpsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.noticeInput">noticeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oidInput">oidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cps">cps</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.notice">notice</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oid">oid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpsInput`<sup>Optional</sup> <a name="cpsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cpsInput"></a>

```java
public java.lang.String getCpsInput();
```

- *Type:* java.lang.String

---

##### `noticeInput`<sup>Optional</sup> <a name="noticeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.noticeInput"></a>

```java
public java.lang.String getNoticeInput();
```

- *Type:* java.lang.String

---

##### `oidInput`<sup>Optional</sup> <a name="oidInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oidInput"></a>

```java
public java.lang.String getOidInput();
```

- *Type:* java.lang.String

---

##### `cps`<sup>Required</sup> <a name="cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cps"></a>

```java
public java.lang.String getCps();
```

- *Type:* java.lang.String

---

##### `notice`<sup>Required</sup> <a name="notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.notice"></a>

```java
public java.lang.String getNotice();
```

- *Type:* java.lang.String

---

##### `oid`<sup>Required</sup> <a name="oid" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oid"></a>

```java
public java.lang.String getOid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>

---



