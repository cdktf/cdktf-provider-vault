# `ociAuthBackendRole` Submodule <a name="`ociAuthBackendRole` Submodule" id="@cdktf/provider-vault.ociAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OciAuthBackendRole <a name="OciAuthBackendRole" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role vault_oci_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.oci_auth_backend_role.OciAuthBackendRole;

OciAuthBackendRole.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .backend(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .ocidList(java.util.List<java.lang.String>)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
//  .tokenNumUses(java.lang.Number)
//  .tokenPeriod(java.lang.Number)
//  .tokenPolicies(java.util.List<java.lang.String>)
//  .tokenTtl(java.lang.Number)
//  .tokenType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#id OciAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.ocidList">ocidList</a></code> | <code>java.util.List<java.lang.String></code> | A list of Group or Dynamic Group OCIDs that can take this role. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#name OciAuthBackendRole#name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#backend OciAuthBackendRole#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#id OciAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#namespace OciAuthBackendRole#namespace}

---

##### `ocidList`<sup>Optional</sup> <a name="ocidList" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.ocidList"></a>

- *Type:* java.util.List<java.lang.String>

A list of Group or Dynamic Group OCIDs that can take this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#ocid_list OciAuthBackendRole#ocid_list}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenBoundCidrs"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_bound_cidrs OciAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenExplicitMaxTtl"></a>

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_explicit_max_ttl OciAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenMaxTtl"></a>

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_max_ttl OciAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenNoDefaultPolicy"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_no_default_policy OciAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenNumUses"></a>

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_num_uses OciAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenPeriod"></a>

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_period OciAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenPolicies"></a>

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_policies OciAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenTtl"></a>

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_ttl OciAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.Initializer.parameter.tokenType"></a>

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_type OciAuthBackendRole#token_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetOcidList">resetOcidList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetOcidList` <a name="resetOcidList" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetOcidList"></a>

```java
public void resetOcidList()
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenBoundCidrs"></a>

```java
public void resetTokenBoundCidrs()
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```java
public void resetTokenExplicitMaxTtl()
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenMaxTtl"></a>

```java
public void resetTokenMaxTtl()
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```java
public void resetTokenNoDefaultPolicy()
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenNumUses"></a>

```java
public void resetTokenNumUses()
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenPeriod"></a>

```java
public void resetTokenPeriod()
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenPolicies"></a>

```java
public void resetTokenPolicies()
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenTtl"></a>

```java
public void resetTokenTtl()
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.resetTokenType"></a>

```java
public void resetTokenType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OciAuthBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.oci_auth_backend_role.OciAuthBackendRole;

OciAuthBackendRole.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.oci_auth_backend_role.OciAuthBackendRole;

OciAuthBackendRole.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.oci_auth_backend_role.OciAuthBackendRole;

OciAuthBackendRole.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.oci_auth_backend_role.OciAuthBackendRole;

OciAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OciAuthBackendRole.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OciAuthBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OciAuthBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OciAuthBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OciAuthBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.ocidListInput">ocidListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.ocidList">ocidList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `ocidListInput`<sup>Optional</sup> <a name="ocidListInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.ocidListInput"></a>

```java
public java.util.List<java.lang.String> getOcidListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenBoundCidrsInput"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```java
public java.lang.Number getTokenExplicitMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenMaxTtlInput"></a>

```java
public java.lang.Number getTokenMaxTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNumUsesInput"></a>

```java
public java.lang.Number getTokenNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPeriodInput"></a>

```java
public java.lang.Number getTokenPeriodInput();
```

- *Type:* java.lang.Number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPoliciesInput"></a>

```java
public java.util.List<java.lang.String> getTokenPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTtlInput"></a>

```java
public java.lang.Number getTokenTtlInput();
```

- *Type:* java.lang.Number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTypeInput"></a>

```java
public java.lang.String getTokenTypeInput();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `ocidList`<sup>Required</sup> <a name="ocidList" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.ocidList"></a>

```java
public java.util.List<java.lang.String> getOcidList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRole.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OciAuthBackendRoleConfig <a name="OciAuthBackendRoleConfig" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.oci_auth_backend_role.OciAuthBackendRoleConfig;

OciAuthBackendRoleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .backend(java.lang.String)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
//  .ocidList(java.util.List<java.lang.String>)
//  .tokenBoundCidrs(java.util.List<java.lang.String>)
//  .tokenExplicitMaxTtl(java.lang.Number)
//  .tokenMaxTtl(java.lang.Number)
//  .tokenNoDefaultPolicy(java.lang.Boolean|IResolvable)
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
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#id OciAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.ocidList">ocidList</a></code> | <code>java.util.List<java.lang.String></code> | A list of Group or Dynamic Group OCIDs that can take this role. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>java.lang.Number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>java.lang.Number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>java.lang.Number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>java.lang.Number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>java.lang.Number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>java.lang.String</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#name OciAuthBackendRole#name}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#backend OciAuthBackendRole#backend}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#id OciAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#namespace OciAuthBackendRole#namespace}

---

##### `ocidList`<sup>Optional</sup> <a name="ocidList" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.ocidList"></a>

```java
public java.util.List<java.lang.String> getOcidList();
```

- *Type:* java.util.List<java.lang.String>

A list of Group or Dynamic Group OCIDs that can take this role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#ocid_list OciAuthBackendRole#ocid_list}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```java
public java.util.List<java.lang.String> getTokenBoundCidrs();
```

- *Type:* java.util.List<java.lang.String>

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_bound_cidrs OciAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```java
public java.lang.Number getTokenExplicitMaxTtl();
```

- *Type:* java.lang.Number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_explicit_max_ttl OciAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```java
public java.lang.Number getTokenMaxTtl();
```

- *Type:* java.lang.Number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_max_ttl OciAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```java
public java.lang.Boolean|IResolvable getTokenNoDefaultPolicy();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_no_default_policy OciAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenNumUses"></a>

```java
public java.lang.Number getTokenNumUses();
```

- *Type:* java.lang.Number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_num_uses OciAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenPeriod"></a>

```java
public java.lang.Number getTokenPeriod();
```

- *Type:* java.lang.Number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_period OciAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_policies OciAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenTtl"></a>

```java
public java.lang.Number getTokenTtl();
```

- *Type:* java.lang.Number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_ttl OciAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.ociAuthBackendRole.OciAuthBackendRoleConfig.property.tokenType"></a>

```java
public java.lang.String getTokenType();
```

- *Type:* java.lang.String

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/oci_auth_backend_role#token_type OciAuthBackendRole#token_type}

---



