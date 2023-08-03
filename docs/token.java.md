# `vault_token`

Refer to the Terraform Registory for docs: [`vault_token`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token).

# `token` Submodule <a name="`token` Submodule" id="@cdktf/provider-vault.token"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Token <a name="Token" id="@cdktf/provider-vault.token.Token"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token vault_token}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.token.Token.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.token.Token;

Token.Builder.create(Construct scope, java.lang.String id)
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
//  .displayName(java.lang.String)
//  .explicitMaxTtl(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .noDefaultPolicy(java.lang.Boolean)
//  .noDefaultPolicy(IResolvable)
//  .noParent(java.lang.Boolean)
//  .noParent(IResolvable)
//  .numUses(java.lang.Number)
//  .period(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
//  .renewable(java.lang.Boolean)
//  .renewable(IResolvable)
//  .renewIncrement(java.lang.Number)
//  .renewMinLease(java.lang.Number)
//  .roleName(java.lang.String)
//  .ttl(java.lang.String)
//  .wrappingTtl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.explicitMaxTtl">explicitMaxTtl</a></code> | <code>java.lang.String</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#id Token#id}. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata to be associated with the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.noDefaultPolicy">noDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to disable the default policy. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.noParent">noParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to create a token without parent. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.numUses">numUses</a></code> | <code>java.lang.Number</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.period">period</a></code> | <code>java.lang.String</code> | The period of the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | List of policies. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.renewable">renewable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.renewIncrement">renewIncrement</a></code> | <code>java.lang.Number</code> | The renew increment. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.renewMinLease">renewMinLease</a></code> | <code>java.lang.Number</code> | The minimum lease to renew token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.roleName">roleName</a></code> | <code>java.lang.String</code> | The token role name. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL period of the token. |
| <code><a href="#@cdktf/provider-vault.token.Token.Initializer.parameter.wrappingTtl">wrappingTtl</a></code> | <code>java.lang.String</code> | The TTL period of the wrapped token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.token.Token.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.token.Token.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.token.Token.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.token.Token.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.token.Token.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.token.Token.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.Token.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.token.Token.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-vault.token.Token.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#display_name Token#display_name}

---

##### `explicitMaxTtl`<sup>Optional</sup> <a name="explicitMaxTtl" id="@cdktf/provider-vault.token.Token.Initializer.parameter.explicitMaxTtl"></a>

- *Type:* java.lang.String

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#explicit_max_ttl Token#explicit_max_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.token.Token.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#id Token#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.token.Token.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#metadata Token#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.token.Token.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#namespace Token#namespace}

---

##### `noDefaultPolicy`<sup>Optional</sup> <a name="noDefaultPolicy" id="@cdktf/provider-vault.token.Token.Initializer.parameter.noDefaultPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#no_default_policy Token#no_default_policy}

---

##### `noParent`<sup>Optional</sup> <a name="noParent" id="@cdktf/provider-vault.token.Token.Initializer.parameter.noParent"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#no_parent Token#no_parent}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktf/provider-vault.token.Token.Initializer.parameter.numUses"></a>

- *Type:* java.lang.Number

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#num_uses Token#num_uses}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.token.Token.Initializer.parameter.period"></a>

- *Type:* java.lang.String

The period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#period Token#period}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.token.Token.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

List of policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#policies Token#policies}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktf/provider-vault.token.Token.Initializer.parameter.renewable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#renewable Token#renewable}

---

##### `renewIncrement`<sup>Optional</sup> <a name="renewIncrement" id="@cdktf/provider-vault.token.Token.Initializer.parameter.renewIncrement"></a>

- *Type:* java.lang.Number

The renew increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#renew_increment Token#renew_increment}

---

##### `renewMinLease`<sup>Optional</sup> <a name="renewMinLease" id="@cdktf/provider-vault.token.Token.Initializer.parameter.renewMinLease"></a>

- *Type:* java.lang.Number

The minimum lease to renew token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#renew_min_lease Token#renew_min_lease}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-vault.token.Token.Initializer.parameter.roleName"></a>

- *Type:* java.lang.String

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#role_name Token#role_name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.token.Token.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#ttl Token#ttl}

---

##### `wrappingTtl`<sup>Optional</sup> <a name="wrappingTtl" id="@cdktf/provider-vault.token.Token.Initializer.parameter.wrappingTtl"></a>

- *Type:* java.lang.String

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#wrapping_ttl Token#wrapping_ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.token.Token.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.token.Token.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.token.Token.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetExplicitMaxTtl">resetExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNoDefaultPolicy">resetNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNoParent">resetNoParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetNumUses">resetNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewable">resetRenewable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewIncrement">resetRenewIncrement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRenewMinLease">resetRenewMinLease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.resetWrappingTtl">resetWrappingTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.token.Token.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.token.Token.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.token.Token.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.token.Token.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.token.Token.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.token.Token.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.token.Token.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.token.Token.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.token.Token.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.token.Token.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.token.Token.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.token.Token.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.token.Token.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.token.Token.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.token.Token.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.token.Token.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.token.Token.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.token.Token.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.token.Token.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.token.Token.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-vault.token.Token.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExplicitMaxTtl` <a name="resetExplicitMaxTtl" id="@cdktf/provider-vault.token.Token.resetExplicitMaxTtl"></a>

```java
public void resetExplicitMaxTtl()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.token.Token.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-vault.token.Token.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.token.Token.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetNoDefaultPolicy` <a name="resetNoDefaultPolicy" id="@cdktf/provider-vault.token.Token.resetNoDefaultPolicy"></a>

```java
public void resetNoDefaultPolicy()
```

##### `resetNoParent` <a name="resetNoParent" id="@cdktf/provider-vault.token.Token.resetNoParent"></a>

```java
public void resetNoParent()
```

##### `resetNumUses` <a name="resetNumUses" id="@cdktf/provider-vault.token.Token.resetNumUses"></a>

```java
public void resetNumUses()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-vault.token.Token.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.token.Token.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetRenewable` <a name="resetRenewable" id="@cdktf/provider-vault.token.Token.resetRenewable"></a>

```java
public void resetRenewable()
```

##### `resetRenewIncrement` <a name="resetRenewIncrement" id="@cdktf/provider-vault.token.Token.resetRenewIncrement"></a>

```java
public void resetRenewIncrement()
```

##### `resetRenewMinLease` <a name="resetRenewMinLease" id="@cdktf/provider-vault.token.Token.resetRenewMinLease"></a>

```java
public void resetRenewMinLease()
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-vault.token.Token.resetRoleName"></a>

```java
public void resetRoleName()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.token.Token.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetWrappingTtl` <a name="resetWrappingTtl" id="@cdktf/provider-vault.token.Token.resetWrappingTtl"></a>

```java
public void resetWrappingTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.token.Token.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.token.Token.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.token.Token;

Token.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.token.Token.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.token.Token.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.token.Token;

Token.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.token.Token.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.token.Token.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.token.Token;

Token.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.token.Token.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.token.Token.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.leaseStarted">leaseStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappedToken">wrappedToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingAccessor">wrappingAccessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.explicitMaxTtlInput">explicitMaxTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noDefaultPolicyInput">noDefaultPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noParentInput">noParentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.numUsesInput">numUsesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewableInput">renewableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewIncrementInput">renewIncrementInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewMinLeaseInput">renewMinLeaseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.roleNameInput">roleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingTtlInput">wrappingTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.explicitMaxTtl">explicitMaxTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.noParent">noParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.numUses">numUses</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewable">renewable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewIncrement">renewIncrement</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.renewMinLease">renewMinLease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.roleName">roleName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.Token.property.wrappingTtl">wrappingTtl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.token.Token.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.token.Token.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.token.Token.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.token.Token.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.token.Token.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.token.Token.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.token.Token.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.token.Token.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.token.Token.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.token.Token.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.token.Token.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.token.Token.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.Token.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.token.Token.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktf/provider-vault.token.Token.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktf/provider-vault.token.Token.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseStarted`<sup>Required</sup> <a name="leaseStarted" id="@cdktf/provider-vault.token.Token.property.leaseStarted"></a>

```java
public java.lang.String getLeaseStarted();
```

- *Type:* java.lang.String

---

##### `wrappedToken`<sup>Required</sup> <a name="wrappedToken" id="@cdktf/provider-vault.token.Token.property.wrappedToken"></a>

```java
public java.lang.String getWrappedToken();
```

- *Type:* java.lang.String

---

##### `wrappingAccessor`<sup>Required</sup> <a name="wrappingAccessor" id="@cdktf/provider-vault.token.Token.property.wrappingAccessor"></a>

```java
public java.lang.String getWrappingAccessor();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-vault.token.Token.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `explicitMaxTtlInput`<sup>Optional</sup> <a name="explicitMaxTtlInput" id="@cdktf/provider-vault.token.Token.property.explicitMaxTtlInput"></a>

```java
public java.lang.String getExplicitMaxTtlInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.token.Token.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-vault.token.Token.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.token.Token.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `noDefaultPolicyInput`<sup>Optional</sup> <a name="noDefaultPolicyInput" id="@cdktf/provider-vault.token.Token.property.noDefaultPolicyInput"></a>

```java
public java.lang.Object getNoDefaultPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noParentInput`<sup>Optional</sup> <a name="noParentInput" id="@cdktf/provider-vault.token.Token.property.noParentInput"></a>

```java
public java.lang.Object getNoParentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numUsesInput`<sup>Optional</sup> <a name="numUsesInput" id="@cdktf/provider-vault.token.Token.property.numUsesInput"></a>

```java
public java.lang.Number getNumUsesInput();
```

- *Type:* java.lang.Number

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-vault.token.Token.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.token.Token.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renewableInput`<sup>Optional</sup> <a name="renewableInput" id="@cdktf/provider-vault.token.Token.property.renewableInput"></a>

```java
public java.lang.Object getRenewableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `renewIncrementInput`<sup>Optional</sup> <a name="renewIncrementInput" id="@cdktf/provider-vault.token.Token.property.renewIncrementInput"></a>

```java
public java.lang.Number getRenewIncrementInput();
```

- *Type:* java.lang.Number

---

##### `renewMinLeaseInput`<sup>Optional</sup> <a name="renewMinLeaseInput" id="@cdktf/provider-vault.token.Token.property.renewMinLeaseInput"></a>

```java
public java.lang.Number getRenewMinLeaseInput();
```

- *Type:* java.lang.Number

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.token.Token.property.roleNameInput"></a>

```java
public java.lang.String getRoleNameInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.token.Token.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `wrappingTtlInput`<sup>Optional</sup> <a name="wrappingTtlInput" id="@cdktf/provider-vault.token.Token.property.wrappingTtlInput"></a>

```java
public java.lang.String getWrappingTtlInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-vault.token.Token.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `explicitMaxTtl`<sup>Required</sup> <a name="explicitMaxTtl" id="@cdktf/provider-vault.token.Token.property.explicitMaxTtl"></a>

```java
public java.lang.String getExplicitMaxTtl();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.token.Token.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.token.Token.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.token.Token.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `noDefaultPolicy`<sup>Required</sup> <a name="noDefaultPolicy" id="@cdktf/provider-vault.token.Token.property.noDefaultPolicy"></a>

```java
public java.lang.Object getNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `noParent`<sup>Required</sup> <a name="noParent" id="@cdktf/provider-vault.token.Token.property.noParent"></a>

```java
public java.lang.Object getNoParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `numUses`<sup>Required</sup> <a name="numUses" id="@cdktf/provider-vault.token.Token.property.numUses"></a>

```java
public java.lang.Number getNumUses();
```

- *Type:* java.lang.Number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-vault.token.Token.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.token.Token.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktf/provider-vault.token.Token.property.renewable"></a>

```java
public java.lang.Object getRenewable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `renewIncrement`<sup>Required</sup> <a name="renewIncrement" id="@cdktf/provider-vault.token.Token.property.renewIncrement"></a>

```java
public java.lang.Number getRenewIncrement();
```

- *Type:* java.lang.Number

---

##### `renewMinLease`<sup>Required</sup> <a name="renewMinLease" id="@cdktf/provider-vault.token.Token.property.renewMinLease"></a>

```java
public java.lang.Number getRenewMinLease();
```

- *Type:* java.lang.Number

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.token.Token.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.token.Token.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

##### `wrappingTtl`<sup>Required</sup> <a name="wrappingTtl" id="@cdktf/provider-vault.token.Token.property.wrappingTtl"></a>

```java
public java.lang.String getWrappingTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.Token.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.token.Token.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### TokenConfig <a name="TokenConfig" id="@cdktf/provider-vault.token.TokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.token.TokenConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.token.TokenConfig;

TokenConfig.builder()
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
//  .displayName(java.lang.String)
//  .explicitMaxTtl(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .noDefaultPolicy(java.lang.Boolean)
//  .noDefaultPolicy(IResolvable)
//  .noParent(java.lang.Boolean)
//  .noParent(IResolvable)
//  .numUses(java.lang.Number)
//  .period(java.lang.String)
//  .policies(java.util.List<java.lang.String>)
//  .renewable(java.lang.Boolean)
//  .renewable(IResolvable)
//  .renewIncrement(java.lang.Number)
//  .renewMinLease(java.lang.Number)
//  .roleName(java.lang.String)
//  .ttl(java.lang.String)
//  .wrappingTtl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.explicitMaxTtl">explicitMaxTtl</a></code> | <code>java.lang.String</code> | The explicit max TTL of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#id Token#id}. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata to be associated with the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.noDefaultPolicy">noDefaultPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to disable the default policy. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.noParent">noParent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to create a token without parent. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.numUses">numUses</a></code> | <code>java.lang.Number</code> | The number of allowed uses of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.period">period</a></code> | <code>java.lang.String</code> | The period of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | List of policies. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewable">renewable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Flag to allow the token to be renewed. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewIncrement">renewIncrement</a></code> | <code>java.lang.Number</code> | The renew increment. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.renewMinLease">renewMinLease</a></code> | <code>java.lang.Number</code> | The minimum lease to renew token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.roleName">roleName</a></code> | <code>java.lang.String</code> | The token role name. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | The TTL period of the token. |
| <code><a href="#@cdktf/provider-vault.token.TokenConfig.property.wrappingTtl">wrappingTtl</a></code> | <code>java.lang.String</code> | The TTL period of the wrapped token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.token.TokenConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.token.TokenConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.token.TokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.token.TokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.token.TokenConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.token.TokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.token.TokenConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-vault.token.TokenConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#display_name Token#display_name}

---

##### `explicitMaxTtl`<sup>Optional</sup> <a name="explicitMaxTtl" id="@cdktf/provider-vault.token.TokenConfig.property.explicitMaxTtl"></a>

```java
public java.lang.String getExplicitMaxTtl();
```

- *Type:* java.lang.String

The explicit max TTL of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#explicit_max_ttl Token#explicit_max_ttl}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.token.TokenConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#id Token#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-vault.token.TokenConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata to be associated with the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#metadata Token#metadata}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.token.TokenConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#namespace Token#namespace}

---

##### `noDefaultPolicy`<sup>Optional</sup> <a name="noDefaultPolicy" id="@cdktf/provider-vault.token.TokenConfig.property.noDefaultPolicy"></a>

```java
public java.lang.Object getNoDefaultPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to disable the default policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#no_default_policy Token#no_default_policy}

---

##### `noParent`<sup>Optional</sup> <a name="noParent" id="@cdktf/provider-vault.token.TokenConfig.property.noParent"></a>

```java
public java.lang.Object getNoParent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to create a token without parent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#no_parent Token#no_parent}

---

##### `numUses`<sup>Optional</sup> <a name="numUses" id="@cdktf/provider-vault.token.TokenConfig.property.numUses"></a>

```java
public java.lang.Number getNumUses();
```

- *Type:* java.lang.Number

The number of allowed uses of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#num_uses Token#num_uses}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.token.TokenConfig.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

The period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#period Token#period}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.token.TokenConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

List of policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#policies Token#policies}

---

##### `renewable`<sup>Optional</sup> <a name="renewable" id="@cdktf/provider-vault.token.TokenConfig.property.renewable"></a>

```java
public java.lang.Object getRenewable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Flag to allow the token to be renewed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#renewable Token#renewable}

---

##### `renewIncrement`<sup>Optional</sup> <a name="renewIncrement" id="@cdktf/provider-vault.token.TokenConfig.property.renewIncrement"></a>

```java
public java.lang.Number getRenewIncrement();
```

- *Type:* java.lang.Number

The renew increment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#renew_increment Token#renew_increment}

---

##### `renewMinLease`<sup>Optional</sup> <a name="renewMinLease" id="@cdktf/provider-vault.token.TokenConfig.property.renewMinLease"></a>

```java
public java.lang.Number getRenewMinLease();
```

- *Type:* java.lang.Number

The minimum lease to renew token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#renew_min_lease Token#renew_min_lease}

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-vault.token.TokenConfig.property.roleName"></a>

```java
public java.lang.String getRoleName();
```

- *Type:* java.lang.String

The token role name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#role_name Token#role_name}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.token.TokenConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

The TTL period of the token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#ttl Token#ttl}

---

##### `wrappingTtl`<sup>Optional</sup> <a name="wrappingTtl" id="@cdktf/provider-vault.token.TokenConfig.property.wrappingTtl"></a>

```java
public java.lang.String getWrappingTtl();
```

- *Type:* java.lang.String

The TTL period of the wrapped token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/token#wrapping_ttl Token#wrapping_ttl}

---



