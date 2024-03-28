# `approleAuthBackendRole` Submodule <a name="`approleAuthBackendRole` Submodule" id="@cdktf/provider-vault.approleAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApproleAuthBackendRole <a name="ApproleAuthBackendRole" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role vault_approle_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role.ApproleAuthBackendRole;

ApproleAuthBackendRole.Builder.create(Construct scope, java.lang.String id)
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
    .roleName(java.lang.String)
//  .backend(java.lang.String)
//  .bindSecretId(java.lang.Boolean)
//  .bindSecretId(IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .roleId(java.lang.String)
//  .secretIdBoundCidrs(java.util.List<java.lang.String>)
//  .secretIdNumUses(java.lang.Number)
//  .secretIdTtl(java.lang.Number)
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
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.bindSecretId">bindSecretId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to require secret_id to be present when logging in using this AppRole. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#id ApproleAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.roleId">roleId</a></code> | <code>java.lang.String</code> | The RoleID of the role. Autogenerated if not set. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdBoundCidrs">secretIdBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | List of CIDR blocks that can log in using the AppRole. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdNumUses">secretIdNumUses</a></code> | <code>java.lang.Number</code> | Number of times which a particular SecretID can be used to fetch a token from this AppRole, after which the SecretID will expire. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdTtl">secretIdTtl</a></code> | <code>java.lang.Number</code> | Number of seconds a SecretID remains valid for. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#role_name ApproleAuthBackendRole#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#backend ApproleAuthBackendRole#backend}

---

##### `bindSecretId`<sup>Optional</sup> <a name="bindSecretId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.bindSecretId"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to require secret_id to be present when logging in using this AppRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#bind_secret_id ApproleAuthBackendRole#bind_secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#id ApproleAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#namespace ApproleAuthBackendRole#namespace}

---

##### `roleId`<sup>Optional</sup> <a name="roleId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.roleId"></a>

- *Type:* java.lang.String

The RoleID of the role. Autogenerated if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#role_id ApproleAuthBackendRole#role_id}

---

##### `secretIdBoundCidrs`<sup>Optional</sup> <a name="secretIdBoundCidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

List of CIDR blocks that can log in using the AppRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#secret_id_bound_cidrs ApproleAuthBackendRole#secret_id_bound_cidrs}

---

##### `secretIdNumUses`<sup>Optional</sup> <a name="secretIdNumUses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdNumUses"></a>

- *Type:* java.lang.Number

Number of times which a particular SecretID can be used to fetch a token from this AppRole, after which the SecretID will expire.

Leaving this unset or setting it to 0 will allow unlimited uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#secret_id_num_uses ApproleAuthBackendRole#secret_id_num_uses}

---

##### `secretIdTtl`<sup>Optional</sup> <a name="secretIdTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.secretIdTtl"></a>

- *Type:* java.lang.Number

Number of seconds a SecretID remains valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#secret_id_ttl ApproleAuthBackendRole#secret_id_ttl}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_bound_cidrs ApproleAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_explicit_max_ttl ApproleAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_max_ttl ApproleAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_no_default_policy ApproleAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_num_uses ApproleAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_period ApproleAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_policies ApproleAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_ttl ApproleAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_type ApproleAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetBindSecretId">resetBindSecretId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetRoleId">resetRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdBoundCidrs">resetSecretIdBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdNumUses">resetSecretIdNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdTtl">resetSecretIdTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetBindSecretId` <a name="resetBindSecretId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetBindSecretId"></a>

```java
public void resetBindSecretId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetRoleId` <a name="resetRoleId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetRoleId"></a>

```java
public void resetRoleId()
```

##### `resetSecretIdBoundCidrs` <a name="resetSecretIdBoundCidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdBoundCidrs"></a>

```java
public void resetSecretIdBoundCidrs()
```

##### `resetSecretIdNumUses` <a name="resetSecretIdNumUses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdNumUses"></a>

```java
public void resetSecretIdNumUses()
```

##### `resetSecretIdTtl` <a name="resetSecretIdTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetSecretIdTtl"></a>

```java
public void resetSecretIdTtl()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.resetTokenType"></a>

```java
public void resetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApproleAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role.ApproleAuthBackendRole;

ApproleAuthBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role.ApproleAuthBackendRole;

ApproleAuthBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role.ApproleAuthBackendRole;

ApproleAuthBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role.ApproleAuthBackendRole;

ApproleAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApproleAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ApproleAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApproleAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApproleAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ApproleAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.bindSecretIdInput">bindSecretIdInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleIdInput">roleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdBoundCidrsInput">secretIdBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdNumUsesInput">secretIdNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdTtlInput">secretIdTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.bindSecretId">bindSecretId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleId">roleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdBoundCidrs">secretIdBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdNumUses">secretIdNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdTtl">secretIdTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `bindSecretIdInput`<sup>Optional</sup> <a name="bindSecretIdInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.bindSecretIdInput"></a>

```java
public java.lang.Object getBindSecretIdInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `roleIdInput`<sup>Optional</sup> <a name="roleIdInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleIdInput"></a>

```java
public java.lang.String getRoleIdInput();
```

- *Type:* java.lang.String

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `secretIdBoundCidrsInput`<sup>Optional</sup> <a name="secretIdBoundCidrsInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getSecretIdBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretIdNumUsesInput`<sup>Optional</sup> <a name="secretIdNumUsesInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdNumUsesInput"></a>

```java
public java.lang.Number getSecretIdNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `secretIdTtlInput`<sup>Optional</sup> <a name="secretIdTtlInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdTtlInput"></a>

```java
public java.lang.Number getSecretIdTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Object getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `bindSecretId`<sup>Required</sup> <a name="bindSecretId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.bindSecretId"></a>

```java
public java.lang.Object getBindSecretId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `roleId`<sup>Required</sup> <a name="roleId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `secretIdBoundCidrs`<sup>Required</sup> <a name="secretIdBoundCidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getSecretIdBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretIdNumUses`<sup>Required</sup> <a name="secretIdNumUses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdNumUses"></a>

```java
public java.lang.Number getSecretIdNumUses();
```

- *Type:* java.lang.Number

---

##### `secretIdTtl`<sup>Required</sup> <a name="secretIdTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.secretIdTtl"></a>

```java
public java.lang.Number getSecretIdTtl();
```

- *Type:* java.lang.Number

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApproleAuthBackendRoleConfig <a name="ApproleAuthBackendRoleConfig" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.approle_auth_backend_role.ApproleAuthBackendRoleConfig;

ApproleAuthBackendRoleConfig.builder()
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
    .roleName(java.lang.String)
//  .backend(java.lang.String)
//  .bindSecretId(java.lang.Boolean)
//  .bindSecretId(IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .roleId(java.lang.String)
//  .secretIdBoundCidrs(java.util.List<java.lang.String>)
//  .secretIdNumUses(java.lang.Number)
//  .secretIdTtl(java.lang.Number)
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
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.bindSecretId">bindSecretId</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to require secret_id to be present when logging in using this AppRole. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#id ApproleAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.roleId">roleId</a></code> | <code>java.lang.String</code> | The RoleID of the role. Autogenerated if not set. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdBoundCidrs">secretIdBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | List of CIDR blocks that can log in using the AppRole. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdNumUses">secretIdNumUses</a></code> | <code>java.lang.Number</code> | Number of times which a particular SecretID can be used to fetch a token from this AppRole, after which the SecretID will expire. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdTtl">secretIdTtl</a></code> | <code>java.lang.Number</code> | Number of seconds a SecretID remains valid for. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#role_name ApproleAuthBackendRole#role_name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#backend ApproleAuthBackendRole#backend}

---

##### `bindSecretId`<sup>Optional</sup> <a name="bindSecretId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.bindSecretId"></a>

```java
public java.lang.Object getBindSecretId();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to require secret_id to be present when logging in using this AppRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#bind_secret_id ApproleAuthBackendRole#bind_secret_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#id ApproleAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#namespace ApproleAuthBackendRole#namespace}

---

##### `roleId`<sup>Optional</sup> <a name="roleId" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.roleId"></a>

```java
public java.lang.String getRoleId();
```

- *Type:* java.lang.String

The RoleID of the role. Autogenerated if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#role_id ApproleAuthBackendRole#role_id}

---

##### `secretIdBoundCidrs`<sup>Optional</sup> <a name="secretIdBoundCidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getSecretIdBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

List of CIDR blocks that can log in using the AppRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#secret_id_bound_cidrs ApproleAuthBackendRole#secret_id_bound_cidrs}

---

##### `secretIdNumUses`<sup>Optional</sup> <a name="secretIdNumUses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdNumUses"></a>

```java
public java.lang.Number getSecretIdNumUses();
```

- *Type:* java.lang.Number

Number of times which a particular SecretID can be used to fetch a token from this AppRole, after which the SecretID will expire.

Leaving this unset or setting it to 0 will allow unlimited uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#secret_id_num_uses ApproleAuthBackendRole#secret_id_num_uses}

---

##### `secretIdTtl`<sup>Optional</sup> <a name="secretIdTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.secretIdTtl"></a>

```java
public java.lang.Number getSecretIdTtl();
```

- *Type:* java.lang.Number

Number of seconds a SecretID remains valid for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#secret_id_ttl ApproleAuthBackendRole#secret_id_ttl}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_bound_cidrs ApproleAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_explicit_max_ttl ApproleAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_max_ttl ApproleAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Object getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_no_default_policy ApproleAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_num_uses ApproleAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_period ApproleAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_policies ApproleAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_ttl ApproleAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.approleAuthBackendRole.ApproleAuthBackendRoleConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.2.0/docs/resources/approle_auth_backend_role#token_type ApproleAuthBackendRole#token_type}

---



