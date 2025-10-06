# `pkiSecretBackendConfigCmpv2` Submodule <a name="`pkiSecretBackendConfigCmpv2` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigCmpv2 <a name="PkiSecretBackendConfigCmpv2" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2 vault_pki_secret_backend_config_cmpv2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_cmpv2.PkiSecretBackendConfigCmpv2;

PkiSecretBackendConfigCmpv2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
//  .auditFields(java.util.List<java.lang.String>)
//  .authenticators(PkiSecretBackendConfigCmpv2Authenticators)
//  .defaultPathPolicy(java.lang.String)
//  .disabledValidations(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .enableSentinelParsing(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.auditFields">auditFields</a></code> | <code>java.util.List<java.lang.String></code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.disabledValidations">disabledValidations</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list of validations not to perform on CMPv2 messages. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether CMPv2 is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.enableSentinelParsing">enableSentinelParsing</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#backend PkiSecretBackendConfigCmpv2#backend}

---

##### `auditFields`<sup>Optional</sup> <a name="auditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.auditFields"></a>

- *Type:* java.util.List<java.lang.String>

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#audit_fields PkiSecretBackendConfigCmpv2#audit_fields}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.authenticators"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#authenticators PkiSecretBackendConfigCmpv2#authenticators}

---

##### `defaultPathPolicy`<sup>Optional</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.defaultPathPolicy"></a>

- *Type:* java.lang.String

Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#default_path_policy PkiSecretBackendConfigCmpv2#default_path_policy}

---

##### `disabledValidations`<sup>Optional</sup> <a name="disabledValidations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.disabledValidations"></a>

- *Type:* java.util.List<java.lang.String>

A comma-separated list of validations not to perform on CMPv2 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#disabled_validations PkiSecretBackendConfigCmpv2#disabled_validations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether CMPv2 is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#enabled PkiSecretBackendConfigCmpv2#enabled}

---

##### `enableSentinelParsing`<sup>Optional</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.enableSentinelParsing"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#enable_sentinel_parsing PkiSecretBackendConfigCmpv2#enable_sentinel_parsing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#namespace PkiSecretBackendConfigCmpv2#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators">putAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuditFields">resetAuditFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuthenticators">resetAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDefaultPathPolicy">resetDefaultPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDisabledValidations">resetDisabledValidations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnableSentinelParsing">resetEnableSentinelParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticators` <a name="putAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators"></a>

```java
public void putAuthenticators(PkiSecretBackendConfigCmpv2Authenticators value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.putAuthenticators.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---

##### `resetAuditFields` <a name="resetAuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuditFields"></a>

```java
public void resetAuditFields()
```

##### `resetAuthenticators` <a name="resetAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetAuthenticators"></a>

```java
public void resetAuthenticators()
```

##### `resetDefaultPathPolicy` <a name="resetDefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDefaultPathPolicy"></a>

```java
public void resetDefaultPathPolicy()
```

##### `resetDisabledValidations` <a name="resetDisabledValidations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetDisabledValidations"></a>

```java
public void resetDisabledValidations()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEnableSentinelParsing` <a name="resetEnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetEnableSentinelParsing"></a>

```java
public void resetEnableSentinelParsing()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetId"></a>

```java
public void resetId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_cmpv2.PkiSecretBackendConfigCmpv2;

PkiSecretBackendConfigCmpv2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_cmpv2.PkiSecretBackendConfigCmpv2;

PkiSecretBackendConfigCmpv2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_cmpv2.PkiSecretBackendConfigCmpv2;

PkiSecretBackendConfigCmpv2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_cmpv2.PkiSecretBackendConfigCmpv2;

PkiSecretBackendConfigCmpv2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiSecretBackendConfigCmpv2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PkiSecretBackendConfigCmpv2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiSecretBackendConfigCmpv2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiSecretBackendConfigCmpv2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigCmpv2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference">PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFieldsInput">auditFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticatorsInput">authenticatorsInput</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicyInput">defaultPathPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidationsInput">disabledValidationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsingInput">enableSentinelParsingInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFields">auditFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidations">disabledValidations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsing">enableSentinelParsing</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticators"></a>

```java
public PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference getAuthenticators();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference">PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference</a>

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `auditFieldsInput`<sup>Optional</sup> <a name="auditFieldsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFieldsInput"></a>

```java
public java.util.List<java.lang.String> getAuditFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticatorsInput`<sup>Optional</sup> <a name="authenticatorsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.authenticatorsInput"></a>

```java
public PkiSecretBackendConfigCmpv2Authenticators getAuthenticatorsInput();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `defaultPathPolicyInput`<sup>Optional</sup> <a name="defaultPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicyInput"></a>

```java
public java.lang.String getDefaultPathPolicyInput();
```

- *Type:* java.lang.String

---

##### `disabledValidationsInput`<sup>Optional</sup> <a name="disabledValidationsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidationsInput"></a>

```java
public java.util.List<java.lang.String> getDisabledValidationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableSentinelParsingInput`<sup>Optional</sup> <a name="enableSentinelParsingInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableSentinelParsingInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `auditFields`<sup>Required</sup> <a name="auditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.auditFields"></a>

```java
public java.util.List<java.lang.String> getAuditFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `defaultPathPolicy`<sup>Required</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.defaultPathPolicy"></a>

```java
public java.lang.String getDefaultPathPolicy();
```

- *Type:* java.lang.String

---

##### `disabledValidations`<sup>Required</sup> <a name="disabledValidations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.disabledValidations"></a>

```java
public java.util.List<java.lang.String> getDisabledValidations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableSentinelParsing`<sup>Required</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.enableSentinelParsing"></a>

```java
public java.lang.Boolean|IResolvable getEnableSentinelParsing();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigCmpv2Authenticators <a name="PkiSecretBackendConfigCmpv2Authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_cmpv2.PkiSecretBackendConfigCmpv2Authenticators;

PkiSecretBackendConfigCmpv2Authenticators.builder()
//  .cert(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.property.cert">cert</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#cert PkiSecretBackendConfigCmpv2#cert}. |

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators.property.cert"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCert();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#cert PkiSecretBackendConfigCmpv2#cert}.

---

### PkiSecretBackendConfigCmpv2Config <a name="PkiSecretBackendConfigCmpv2Config" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_cmpv2.PkiSecretBackendConfigCmpv2Config;

PkiSecretBackendConfigCmpv2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
//  .auditFields(java.util.List<java.lang.String>)
//  .authenticators(PkiSecretBackendConfigCmpv2Authenticators)
//  .defaultPathPolicy(java.lang.String)
//  .disabledValidations(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean|IResolvable)
//  .enableSentinelParsing(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.auditFields">auditFields</a></code> | <code>java.util.List<java.lang.String></code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | Can be sign-verbatim or a role given by role:<role_name>. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.disabledValidations">disabledValidations</a></code> | <code>java.util.List<java.lang.String></code> | A comma-separated list of validations not to perform on CMPv2 messages. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether CMPv2 is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enableSentinelParsing">enableSentinelParsing</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#backend PkiSecretBackendConfigCmpv2#backend}

---

##### `auditFields`<sup>Optional</sup> <a name="auditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.auditFields"></a>

```java
public java.util.List<java.lang.String> getAuditFields();
```

- *Type:* java.util.List<java.lang.String>

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#audit_fields PkiSecretBackendConfigCmpv2#audit_fields}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.authenticators"></a>

```java
public PkiSecretBackendConfigCmpv2Authenticators getAuthenticators();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#authenticators PkiSecretBackendConfigCmpv2#authenticators}

---

##### `defaultPathPolicy`<sup>Optional</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.defaultPathPolicy"></a>

```java
public java.lang.String getDefaultPathPolicy();
```

- *Type:* java.lang.String

Can be sign-verbatim or a role given by role:<role_name>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#default_path_policy PkiSecretBackendConfigCmpv2#default_path_policy}

---

##### `disabledValidations`<sup>Optional</sup> <a name="disabledValidations" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.disabledValidations"></a>

```java
public java.util.List<java.lang.String> getDisabledValidations();
```

- *Type:* java.util.List<java.lang.String>

A comma-separated list of validations not to perform on CMPv2 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#disabled_validations PkiSecretBackendConfigCmpv2#disabled_validations}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether CMPv2 is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#enabled PkiSecretBackendConfigCmpv2#enabled}

---

##### `enableSentinelParsing`<sup>Optional</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.enableSentinelParsing"></a>

```java
public java.lang.Boolean|IResolvable getEnableSentinelParsing();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#enable_sentinel_parsing PkiSecretBackendConfigCmpv2#enable_sentinel_parsing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#id PkiSecretBackendConfigCmpv2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Config.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.3.0/docs/resources/pki_secret_backend_config_cmpv2#namespace PkiSecretBackendConfigCmpv2#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference <a name="PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_cmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference;

new PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resetCert">resetCert</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCert` <a name="resetCert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.resetCert"></a>

```java
public void resetCert()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.certInput">certInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert">cert</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.certInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCertInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.cert"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCert();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2AuthenticatorsOutputReference.property.internalValue"></a>

```java
public PkiSecretBackendConfigCmpv2Authenticators getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigCmpv2.PkiSecretBackendConfigCmpv2Authenticators">PkiSecretBackendConfigCmpv2Authenticators</a>

---



