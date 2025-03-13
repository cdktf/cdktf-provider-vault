# `pkiSecretBackendConfigEst` Submodule <a name="`pkiSecretBackendConfigEst` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigEst"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigEst <a name="PkiSecretBackendConfigEst" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est vault_pki_secret_backend_config_est}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_est.PkiSecretBackendConfigEst;

PkiSecretBackendConfigEst.Builder.create(Construct scope, java.lang.String id)
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
//  .auditFields(java.util.List<java.lang.String>)
//  .authenticators(PkiSecretBackendConfigEstAuthenticators)
//  .defaultMount(java.lang.Boolean)
//  .defaultMount(IResolvable)
//  .defaultPathPolicy(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .enableSentinelParsing(java.lang.Boolean)
//  .enableSentinelParsing(IResolvable)
//  .id(java.lang.String)
//  .labelToPathPolicy(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.auditFields">auditFields</a></code> | <code>java.util.List<java.lang.String></code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.defaultMount">defaultMount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | Required to be set if default_mount is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether EST is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.enableSentinelParsing">enableSentinelParsing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.labelToPathPolicy">labelToPathPolicy</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configures a pairing of an EST label with the redirected behavior for requests hitting that role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#backend PkiSecretBackendConfigEst#backend}

---

##### `auditFields`<sup>Optional</sup> <a name="auditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.auditFields"></a>

- *Type:* java.util.List<java.lang.String>

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#audit_fields PkiSecretBackendConfigEst#audit_fields}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.authenticators"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#authenticators PkiSecretBackendConfigEst#authenticators}

---

##### `defaultMount`<sup>Optional</sup> <a name="defaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.defaultMount"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#default_mount PkiSecretBackendConfigEst#default_mount}

---

##### `defaultPathPolicy`<sup>Optional</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.defaultPathPolicy"></a>

- *Type:* java.lang.String

Required to be set if default_mount is enabled.

Specifies the behavior for requests using the default EST label. Can be sign-verbatim or a role given by role:<role_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#default_path_policy PkiSecretBackendConfigEst#default_path_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether EST is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#enabled PkiSecretBackendConfigEst#enabled}

---

##### `enableSentinelParsing`<sup>Optional</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.enableSentinelParsing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#enable_sentinel_parsing PkiSecretBackendConfigEst#enable_sentinel_parsing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelToPathPolicy`<sup>Optional</sup> <a name="labelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.labelToPathPolicy"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configures a pairing of an EST label with the redirected behavior for requests hitting that role.

The path policy can be sign-verbatim or a role given by role:<role_name>. Labels must be unique across Vault cluster, and will register .well-known/est/<label> URL paths

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#label_to_path_policy PkiSecretBackendConfigEst#label_to_path_policy}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#namespace PkiSecretBackendConfigEst#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators">putAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuditFields">resetAuditFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuthenticators">resetAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultMount">resetDefaultMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultPathPolicy">resetDefaultPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnableSentinelParsing">resetEnableSentinelParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetLabelToPathPolicy">resetLabelToPathPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticators` <a name="putAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators"></a>

```java
public void putAuthenticators(PkiSecretBackendConfigEstAuthenticators value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.putAuthenticators.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---

##### `resetAuditFields` <a name="resetAuditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuditFields"></a>

```java
public void resetAuditFields()
```

##### `resetAuthenticators` <a name="resetAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetAuthenticators"></a>

```java
public void resetAuthenticators()
```

##### `resetDefaultMount` <a name="resetDefaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultMount"></a>

```java
public void resetDefaultMount()
```

##### `resetDefaultPathPolicy` <a name="resetDefaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetDefaultPathPolicy"></a>

```java
public void resetDefaultPathPolicy()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetEnableSentinelParsing` <a name="resetEnableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetEnableSentinelParsing"></a>

```java
public void resetEnableSentinelParsing()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetId"></a>

```java
public void resetId()
```

##### `resetLabelToPathPolicy` <a name="resetLabelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetLabelToPathPolicy"></a>

```java
public void resetLabelToPathPolicy()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_est.PkiSecretBackendConfigEst;

PkiSecretBackendConfigEst.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_est.PkiSecretBackendConfigEst;

PkiSecretBackendConfigEst.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_est.PkiSecretBackendConfigEst;

PkiSecretBackendConfigEst.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_est.PkiSecretBackendConfigEst;

PkiSecretBackendConfigEst.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PkiSecretBackendConfigEst.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PkiSecretBackendConfigEst resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PkiSecretBackendConfigEst to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PkiSecretBackendConfigEst that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigEst to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference">PkiSecretBackendConfigEstAuthenticatorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lastUpdated">lastUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFieldsInput">auditFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticatorsInput">authenticatorsInput</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMountInput">defaultMountInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicyInput">defaultPathPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsingInput">enableSentinelParsingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicyInput">labelToPathPolicyInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFields">auditFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMount">defaultMount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsing">enableSentinelParsing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicy">labelToPathPolicy</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authenticators`<sup>Required</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticators"></a>

```java
public PkiSecretBackendConfigEstAuthenticatorsOutputReference getAuthenticators();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference">PkiSecretBackendConfigEstAuthenticatorsOutputReference</a>

---

##### `lastUpdated`<sup>Required</sup> <a name="lastUpdated" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.lastUpdated"></a>

```java
public java.lang.String getLastUpdated();
```

- *Type:* java.lang.String

---

##### `auditFieldsInput`<sup>Optional</sup> <a name="auditFieldsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFieldsInput"></a>

```java
public java.util.List<java.lang.String> getAuditFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `authenticatorsInput`<sup>Optional</sup> <a name="authenticatorsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.authenticatorsInput"></a>

```java
public PkiSecretBackendConfigEstAuthenticators getAuthenticatorsInput();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `defaultMountInput`<sup>Optional</sup> <a name="defaultMountInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMountInput"></a>

```java
public java.lang.Object getDefaultMountInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultPathPolicyInput`<sup>Optional</sup> <a name="defaultPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicyInput"></a>

```java
public java.lang.String getDefaultPathPolicyInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSentinelParsingInput`<sup>Optional</sup> <a name="enableSentinelParsingInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsingInput"></a>

```java
public java.lang.Object getEnableSentinelParsingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelToPathPolicyInput`<sup>Optional</sup> <a name="labelToPathPolicyInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicyInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelToPathPolicyInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `auditFields`<sup>Required</sup> <a name="auditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.auditFields"></a>

```java
public java.util.List<java.lang.String> getAuditFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `defaultMount`<sup>Required</sup> <a name="defaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultMount"></a>

```java
public java.lang.Object getDefaultMount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultPathPolicy`<sup>Required</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.defaultPathPolicy"></a>

```java
public java.lang.String getDefaultPathPolicy();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSentinelParsing`<sup>Required</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.enableSentinelParsing"></a>

```java
public java.lang.Object getEnableSentinelParsing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labelToPathPolicy`<sup>Required</sup> <a name="labelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.labelToPathPolicy"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelToPathPolicy();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEst.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigEstAuthenticators <a name="PkiSecretBackendConfigEstAuthenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_est.PkiSecretBackendConfigEstAuthenticators;

PkiSecretBackendConfigEstAuthenticators.builder()
//  .cert(java.util.Map<java.lang.String, java.lang.String>)
//  .userpass(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.cert">cert</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#cert PkiSecretBackendConfigEst#cert}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.userpass">userpass</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#userpass PkiSecretBackendConfigEst#userpass}. |

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.cert"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCert();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#cert PkiSecretBackendConfigEst#cert}.

---

##### `userpass`<sup>Optional</sup> <a name="userpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators.property.userpass"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserpass();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#userpass PkiSecretBackendConfigEst#userpass}.

---

### PkiSecretBackendConfigEstConfig <a name="PkiSecretBackendConfigEstConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_est.PkiSecretBackendConfigEstConfig;

PkiSecretBackendConfigEstConfig.builder()
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
//  .auditFields(java.util.List<java.lang.String>)
//  .authenticators(PkiSecretBackendConfigEstAuthenticators)
//  .defaultMount(java.lang.Boolean)
//  .defaultMount(IResolvable)
//  .defaultPathPolicy(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .enableSentinelParsing(java.lang.Boolean)
//  .enableSentinelParsing(IResolvable)
//  .id(java.lang.String)
//  .labelToPathPolicy(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.auditFields">auditFields</a></code> | <code>java.util.List<java.lang.String></code> | Fields parsed from the CSR that appear in the audit and can be used by sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.authenticators">authenticators</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | authenticators block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultMount">defaultMount</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultPathPolicy">defaultPathPolicy</a></code> | <code>java.lang.String</code> | Required to be set if default_mount is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether EST is enabled. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enableSentinelParsing">enableSentinelParsing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If set, parse out fields from the provided CSR making them available for Sentinel policies. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.labelToPathPolicy">labelToPathPolicy</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Configures a pairing of an EST label with the redirected behavior for requests hitting that role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#backend PkiSecretBackendConfigEst#backend}

---

##### `auditFields`<sup>Optional</sup> <a name="auditFields" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.auditFields"></a>

```java
public java.util.List<java.lang.String> getAuditFields();
```

- *Type:* java.util.List<java.lang.String>

Fields parsed from the CSR that appear in the audit and can be used by sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#audit_fields PkiSecretBackendConfigEst#audit_fields}

---

##### `authenticators`<sup>Optional</sup> <a name="authenticators" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.authenticators"></a>

```java
public PkiSecretBackendConfigEstAuthenticators getAuthenticators();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

authenticators block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#authenticators PkiSecretBackendConfigEst#authenticators}

---

##### `defaultMount`<sup>Optional</sup> <a name="defaultMount" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultMount"></a>

```java
public java.lang.Object getDefaultMount();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, this mount will register the default `.well-known/est` URL path. Only a single mount can enable this across a Vault cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#default_mount PkiSecretBackendConfigEst#default_mount}

---

##### `defaultPathPolicy`<sup>Optional</sup> <a name="defaultPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.defaultPathPolicy"></a>

```java
public java.lang.String getDefaultPathPolicy();
```

- *Type:* java.lang.String

Required to be set if default_mount is enabled.

Specifies the behavior for requests using the default EST label. Can be sign-verbatim or a role given by role:<role_name>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#default_path_policy PkiSecretBackendConfigEst#default_path_policy}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether EST is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#enabled PkiSecretBackendConfigEst#enabled}

---

##### `enableSentinelParsing`<sup>Optional</sup> <a name="enableSentinelParsing" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.enableSentinelParsing"></a>

```java
public java.lang.Object getEnableSentinelParsing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If set, parse out fields from the provided CSR making them available for Sentinel policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#enable_sentinel_parsing PkiSecretBackendConfigEst#enable_sentinel_parsing}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#id PkiSecretBackendConfigEst#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labelToPathPolicy`<sup>Optional</sup> <a name="labelToPathPolicy" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.labelToPathPolicy"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelToPathPolicy();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Configures a pairing of an EST label with the redirected behavior for requests hitting that role.

The path policy can be sign-verbatim or a role given by role:<role_name>. Labels must be unique across Vault cluster, and will register .well-known/est/<label> URL paths

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#label_to_path_policy PkiSecretBackendConfigEst#label_to_path_policy}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_est#namespace PkiSecretBackendConfigEst#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendConfigEstAuthenticatorsOutputReference <a name="PkiSecretBackendConfigEstAuthenticatorsOutputReference" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.pki_secret_backend_config_est.PkiSecretBackendConfigEstAuthenticatorsOutputReference;

new PkiSecretBackendConfigEstAuthenticatorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetCert">resetCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetUserpass">resetUserpass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCert` <a name="resetCert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetCert"></a>

```java
public void resetCert()
```

##### `resetUserpass` <a name="resetUserpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.resetUserpass"></a>

```java
public void resetUserpass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.certInput">certInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpassInput">userpassInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.cert">cert</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpass">userpass</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.certInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCertInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userpassInput`<sup>Optional</sup> <a name="userpassInput" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpassInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserpassInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.cert"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCert();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `userpass`<sup>Required</sup> <a name="userpass" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.userpass"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getUserpass();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticatorsOutputReference.property.internalValue"></a>

```java
public PkiSecretBackendConfigEstAuthenticators getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigEst.PkiSecretBackendConfigEstAuthenticators">PkiSecretBackendConfigEstAuthenticators</a>

---



