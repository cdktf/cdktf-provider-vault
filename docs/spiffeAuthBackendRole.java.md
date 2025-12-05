# `spiffeAuthBackendRole` Submodule <a name="`spiffeAuthBackendRole` Submodule" id="@cdktf/provider-vault.spiffeAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpiffeAuthBackendRole <a name="SpiffeAuthBackendRole" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role vault_spiffe_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_role.SpiffeAuthBackendRole;

SpiffeAuthBackendRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .aliasMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .namespace(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
//  .workloadIdPatterns(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the SPIFFE auth role. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A display name for the role. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.workloadIdPatterns">workloadIdPatterns</a></code> | <code>java.util.List<java.lang.String></code> | A comma separated list of patterns that match an incoming workload id to this role. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#mount SpiffeAuthBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the SPIFFE auth role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#name SpiffeAuthBackendRole#name}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.aliasMetadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#alias_metadata SpiffeAuthBackendRole#alias_metadata}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A display name for the role.

This is only used for display purposes in Vault, if not provided it will default to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#display_name SpiffeAuthBackendRole#display_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#namespace SpiffeAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_bound_cidrs SpiffeAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_explicit_max_ttl SpiffeAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_max_ttl SpiffeAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_no_default_policy SpiffeAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_num_uses SpiffeAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_period SpiffeAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_policies SpiffeAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_ttl SpiffeAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_type SpiffeAuthBackendRole#token_type}

---

##### `workloadIdPatterns`<sup>Optional</sup> <a name="workloadIdPatterns" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.Initializer.parameter.workloadIdPatterns"></a>

- *Type:* java.util.List<java.lang.String>

A comma separated list of patterns that match an incoming workload id to this role.

A workload id is the part that remains after stripping the trust domain prefix and the slash separator from a spiffe id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#workload_id_patterns SpiffeAuthBackendRole#workload_id_patterns}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetAliasMetadata">resetAliasMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetWorkloadIdPatterns">resetWorkloadIdPatterns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAliasMetadata` <a name="resetAliasMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetAliasMetadata"></a>

```java
public void resetAliasMetadata()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetTokenType"></a>

```java
public void resetTokenType()
```

##### `resetWorkloadIdPatterns` <a name="resetWorkloadIdPatterns" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.resetWorkloadIdPatterns"></a>

```java
public void resetWorkloadIdPatterns()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpiffeAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_role.SpiffeAuthBackendRole;

SpiffeAuthBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_role.SpiffeAuthBackendRole;

SpiffeAuthBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_role.SpiffeAuthBackendRole;

SpiffeAuthBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_role.SpiffeAuthBackendRole;

SpiffeAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SpiffeAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SpiffeAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SpiffeAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SpiffeAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SpiffeAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadataInput">aliasMetadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatternsInput">workloadIdPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatterns">workloadIdPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `aliasMetadataInput`<sup>Optional</sup> <a name="aliasMetadataInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `workloadIdPatternsInput`<sup>Optional</sup> <a name="workloadIdPatternsInput" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatternsInput"></a>

```java
public java.util.List<java.lang.String> getWorkloadIdPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.aliasMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

##### `workloadIdPatterns`<sup>Required</sup> <a name="workloadIdPatterns" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.workloadIdPatterns"></a>

```java
public java.util.List<java.lang.String> getWorkloadIdPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SpiffeAuthBackendRoleConfig <a name="SpiffeAuthBackendRoleConfig" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.spiffe_auth_backend_role.SpiffeAuthBackendRoleConfig;

SpiffeAuthBackendRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mount(java.lang.String)
    .name(java.lang.String)
//  .aliasMetadata(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .namespace(java.lang.String)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
//  .workloadIdPatterns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Mount path for the SPIFFE auth engine in Vault. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the SPIFFE auth role. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.aliasMetadata">aliasMetadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of string to string that will be set as metadata on the identity alias. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A display name for the role. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.workloadIdPatterns">workloadIdPatterns</a></code> | <code>java.util.List<java.lang.String></code> | A comma separated list of patterns that match an incoming workload id to this role. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Mount path for the SPIFFE auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#mount SpiffeAuthBackendRole#mount}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the SPIFFE auth role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#name SpiffeAuthBackendRole#name}

---

##### `aliasMetadata`<sup>Optional</sup> <a name="aliasMetadata" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.aliasMetadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAliasMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of string to string that will be set as metadata on the identity alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#alias_metadata SpiffeAuthBackendRole#alias_metadata}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A display name for the role.

This is only used for display purposes in Vault, if not provided it will default to the role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#display_name SpiffeAuthBackendRole#display_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#namespace SpiffeAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_bound_cidrs SpiffeAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_explicit_max_ttl SpiffeAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_max_ttl SpiffeAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_no_default_policy SpiffeAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_num_uses SpiffeAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_period SpiffeAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_policies SpiffeAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_ttl SpiffeAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#token_type SpiffeAuthBackendRole#token_type}

---

##### `workloadIdPatterns`<sup>Optional</sup> <a name="workloadIdPatterns" id="@cdktf/provider-vault.spiffeAuthBackendRole.SpiffeAuthBackendRoleConfig.property.workloadIdPatterns"></a>

```java
public java.util.List<java.lang.String> getWorkloadIdPatterns();
```

- *Type:* java.util.List<java.lang.String>

A comma separated list of patterns that match an incoming workload id to this role.

A workload id is the part that remains after stripping the trust domain prefix and the slash separator from a spiffe id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/spiffe_auth_backend_role#workload_id_patterns SpiffeAuthBackendRole#workload_id_patterns}

---



