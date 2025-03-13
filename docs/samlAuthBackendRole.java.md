# `samlAuthBackendRole` Submodule <a name="`samlAuthBackendRole` Submodule" id="@cdktf/provider-vault.samlAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlAuthBackendRole <a name="SamlAuthBackendRole" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role vault_saml_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.saml_auth_backend_role.SamlAuthBackendRole;

SamlAuthBackendRole.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .path(java.lang.String)
//  .boundAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .boundAttributesType(java.lang.String)
//  .boundSubjects(java.util.List<java.lang.String>)
//  .boundSubjectsType(java.lang.String)
//  .groupsAttribute(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean)
//  .tokenNoDefaultPolicy(IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Unique name of the role. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Path where SAML Auth engine is mounted. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.boundAttributes">boundAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of attribute names to values that are expected to exist in the SAML assertion. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.boundAttributesType">boundAttributesType</a></code> | <code>java.lang.String</code> | The type of matching assertion to perform on bound_attributes. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.boundSubjects">boundSubjects</a></code> | <code>java.util.List<java.lang.String></code> | The subject being asserted for SAML authentication. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.boundSubjectsType">boundSubjectsType</a></code> | <code>java.lang.String</code> | The type of matching assertion to perform on bound_subjects. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | The attribute to use to identify the set of groups to which the user belongs. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#id SamlAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Unique name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#name SamlAuthBackendRole#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Path where SAML Auth engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#path SamlAuthBackendRole#path}

---

##### `boundAttributes`<sup>Optional</sup> <a name="boundAttributes" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.boundAttributes"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of attribute names to values that are expected to exist in the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#bound_attributes SamlAuthBackendRole#bound_attributes}

---

##### `boundAttributesType`<sup>Optional</sup> <a name="boundAttributesType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.boundAttributesType"></a>

- *Type:* java.lang.String

The type of matching assertion to perform on bound_attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#bound_attributes_type SamlAuthBackendRole#bound_attributes_type}

---

##### `boundSubjects`<sup>Optional</sup> <a name="boundSubjects" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.boundSubjects"></a>

- *Type:* java.util.List<java.lang.String>

The subject being asserted for SAML authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#bound_subjects SamlAuthBackendRole#bound_subjects}

---

##### `boundSubjectsType`<sup>Optional</sup> <a name="boundSubjectsType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.boundSubjectsType"></a>

- *Type:* java.lang.String

The type of matching assertion to perform on bound_subjects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#bound_subjects_type SamlAuthBackendRole#bound_subjects_type}

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.groupsAttribute"></a>

- *Type:* java.lang.String

The attribute to use to identify the set of groups to which the user belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#groups_attribute SamlAuthBackendRole#groups_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#id SamlAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#namespace SamlAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_bound_cidrs SamlAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_explicit_max_ttl SamlAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_max_ttl SamlAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_no_default_policy SamlAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_num_uses SamlAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_period SamlAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_policies SamlAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_ttl SamlAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_type SamlAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetBoundAttributes">resetBoundAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetBoundAttributesType">resetBoundAttributesType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetBoundSubjects">resetBoundSubjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetBoundSubjectsType">resetBoundSubjectsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetGroupsAttribute">resetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBoundAttributes` <a name="resetBoundAttributes" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetBoundAttributes"></a>

```java
public void resetBoundAttributes()
```

##### `resetBoundAttributesType` <a name="resetBoundAttributesType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetBoundAttributesType"></a>

```java
public void resetBoundAttributesType()
```

##### `resetBoundSubjects` <a name="resetBoundSubjects" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetBoundSubjects"></a>

```java
public void resetBoundSubjects()
```

##### `resetBoundSubjectsType` <a name="resetBoundSubjectsType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetBoundSubjectsType"></a>

```java
public void resetBoundSubjectsType()
```

##### `resetGroupsAttribute` <a name="resetGroupsAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetGroupsAttribute"></a>

```java
public void resetGroupsAttribute()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.resetTokenType"></a>

```java
public void resetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SamlAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.saml_auth_backend_role.SamlAuthBackendRole;

SamlAuthBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.saml_auth_backend_role.SamlAuthBackendRole;

SamlAuthBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.saml_auth_backend_role.SamlAuthBackendRole;

SamlAuthBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.saml_auth_backend_role.SamlAuthBackendRole;

SamlAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SamlAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SamlAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SamlAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SamlAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SamlAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundAttributesInput">boundAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundAttributesTypeInput">boundAttributesTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundSubjectsInput">boundSubjectsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundSubjectsTypeInput">boundSubjectsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.groupsAttributeInput">groupsAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundAttributes">boundAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundAttributesType">boundAttributesType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundSubjects">boundSubjects</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundSubjectsType">boundSubjectsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `boundAttributesInput`<sup>Optional</sup> <a name="boundAttributesInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBoundAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `boundAttributesTypeInput`<sup>Optional</sup> <a name="boundAttributesTypeInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundAttributesTypeInput"></a>

```java
public java.lang.String getBoundAttributesTypeInput();
```

- *Type:* java.lang.String

---

##### `boundSubjectsInput`<sup>Optional</sup> <a name="boundSubjectsInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundSubjectsInput"></a>

```java
public java.util.List<java.lang.String> getBoundSubjectsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundSubjectsTypeInput`<sup>Optional</sup> <a name="boundSubjectsTypeInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundSubjectsTypeInput"></a>

```java
public java.lang.String getBoundSubjectsTypeInput();
```

- *Type:* java.lang.String

---

##### `groupsAttributeInput`<sup>Optional</sup> <a name="groupsAttributeInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.groupsAttributeInput"></a>

```java
public java.lang.String getGroupsAttributeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Object getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `boundAttributes`<sup>Required</sup> <a name="boundAttributes" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBoundAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `boundAttributesType`<sup>Required</sup> <a name="boundAttributesType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundAttributesType"></a>

```java
public java.lang.String getBoundAttributesType();
```

- *Type:* java.lang.String

---

##### `boundSubjects`<sup>Required</sup> <a name="boundSubjects" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundSubjects"></a>

```java
public java.util.List<java.lang.String> getBoundSubjects();
```

- *Type:* java.util.List<java.lang.String>

---

##### `boundSubjectsType`<sup>Required</sup> <a name="boundSubjectsType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.boundSubjectsType"></a>

```java
public java.lang.String getBoundSubjectsType();
```

- *Type:* java.lang.String

---

##### `groupsAttribute`<sup>Required</sup> <a name="groupsAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SamlAuthBackendRoleConfig <a name="SamlAuthBackendRoleConfig" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.saml_auth_backend_role.SamlAuthBackendRoleConfig;

SamlAuthBackendRoleConfig.builder()
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
    .name(java.lang.String)
    .path(java.lang.String)
//  .boundAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .boundAttributesType(java.lang.String)
//  .boundSubjects(java.util.List<java.lang.String>)
//  .boundSubjectsType(java.lang.String)
//  .groupsAttribute(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean)
//  .tokenNoDefaultPolicy(IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Unique name of the role. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.path">path</a></code> | <code>java.lang.String</code> | Path where SAML Auth engine is mounted. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.boundAttributes">boundAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Mapping of attribute names to values that are expected to exist in the SAML assertion. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.boundAttributesType">boundAttributesType</a></code> | <code>java.lang.String</code> | The type of matching assertion to perform on bound_attributes. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.boundSubjects">boundSubjects</a></code> | <code>java.util.List<java.lang.String></code> | The subject being asserted for SAML authentication. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.boundSubjectsType">boundSubjectsType</a></code> | <code>java.lang.String</code> | The type of matching assertion to perform on bound_subjects. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.groupsAttribute">groupsAttribute</a></code> | <code>java.lang.String</code> | The attribute to use to identify the set of groups to which the user belongs. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#id SamlAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Unique name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#name SamlAuthBackendRole#name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path where SAML Auth engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#path SamlAuthBackendRole#path}

---

##### `boundAttributes`<sup>Optional</sup> <a name="boundAttributes" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.boundAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getBoundAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Mapping of attribute names to values that are expected to exist in the SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#bound_attributes SamlAuthBackendRole#bound_attributes}

---

##### `boundAttributesType`<sup>Optional</sup> <a name="boundAttributesType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.boundAttributesType"></a>

```java
public java.lang.String getBoundAttributesType();
```

- *Type:* java.lang.String

The type of matching assertion to perform on bound_attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#bound_attributes_type SamlAuthBackendRole#bound_attributes_type}

---

##### `boundSubjects`<sup>Optional</sup> <a name="boundSubjects" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.boundSubjects"></a>

```java
public java.util.List<java.lang.String> getBoundSubjects();
```

- *Type:* java.util.List<java.lang.String>

The subject being asserted for SAML authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#bound_subjects SamlAuthBackendRole#bound_subjects}

---

##### `boundSubjectsType`<sup>Optional</sup> <a name="boundSubjectsType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.boundSubjectsType"></a>

```java
public java.lang.String getBoundSubjectsType();
```

- *Type:* java.lang.String

The type of matching assertion to perform on bound_subjects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#bound_subjects_type SamlAuthBackendRole#bound_subjects_type}

---

##### `groupsAttribute`<sup>Optional</sup> <a name="groupsAttribute" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.groupsAttribute"></a>

```java
public java.lang.String getGroupsAttribute();
```

- *Type:* java.lang.String

The attribute to use to identify the set of groups to which the user belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#groups_attribute SamlAuthBackendRole#groups_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#id SamlAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#namespace SamlAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_bound_cidrs SamlAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_explicit_max_ttl SamlAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_max_ttl SamlAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_no_default_policy SamlAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_num_uses SamlAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_period SamlAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_policies SamlAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_ttl SamlAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.samlAuthBackendRole.SamlAuthBackendRoleConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/saml_auth_backend_role#token_type SamlAuthBackendRole#token_type}

---



