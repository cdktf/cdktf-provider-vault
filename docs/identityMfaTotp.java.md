# `identityMfaTotp` Submodule <a name="`identityMfaTotp` Submodule" id="@cdktf/provider-vault.identityMfaTotp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaTotp <a name="IdentityMfaTotp" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp vault_identity_mfa_totp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_totp.IdentityMfaTotp;

IdentityMfaTotp.Builder.create(Construct scope, java.lang.String id)
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
    .issuer(java.lang.String)
//  .algorithm(java.lang.String)
//  .digits(java.lang.Number)
//  .id(java.lang.String)
//  .keySize(java.lang.Number)
//  .maxValidationAttempts(java.lang.Number)
//  .namespace(java.lang.String)
//  .period(java.lang.Number)
//  .qrSize(java.lang.Number)
//  .skew(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.issuer">issuer</a></code> | <code>java.lang.String</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.digits">digits</a></code> | <code>java.lang.Number</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.keySize">keySize</a></code> | <code>java.lang.Number</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.maxValidationAttempts">maxValidationAttempts</a></code> | <code>java.lang.Number</code> | The maximum number of consecutive failed validation attempts allowed. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.period">period</a></code> | <code>java.lang.Number</code> | The length of time in seconds used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.qrSize">qrSize</a></code> | <code>java.lang.Number</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.skew">skew</a></code> | <code>java.lang.Number</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.issuer"></a>

- *Type:* java.lang.String

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#issuer IdentityMfaTotp#issuer}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.algorithm"></a>

- *Type:* java.lang.String

Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#algorithm IdentityMfaTotp#algorithm}

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.digits"></a>

- *Type:* java.lang.Number

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#digits IdentityMfaTotp#digits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.keySize"></a>

- *Type:* java.lang.Number

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#key_size IdentityMfaTotp#key_size}

---

##### `maxValidationAttempts`<sup>Optional</sup> <a name="maxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.maxValidationAttempts"></a>

- *Type:* java.lang.Number

The maximum number of consecutive failed validation attempts allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#max_validation_attempts IdentityMfaTotp#max_validation_attempts}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#namespace IdentityMfaTotp#namespace}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.period"></a>

- *Type:* java.lang.Number

The length of time in seconds used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#period IdentityMfaTotp#period}

---

##### `qrSize`<sup>Optional</sup> <a name="qrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.qrSize"></a>

- *Type:* java.lang.Number

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#qr_size IdentityMfaTotp#qr_size}

---

##### `skew`<sup>Optional</sup> <a name="skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.Initializer.parameter.skew"></a>

- *Type:* java.lang.Number

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#skew IdentityMfaTotp#skew}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetDigits">resetDigits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetKeySize">resetKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetMaxValidationAttempts">resetMaxValidationAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetQrSize">resetQrSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetSkew">resetSkew</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetDigits` <a name="resetDigits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetDigits"></a>

```java
public void resetDigits()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetId"></a>

```java
public void resetId()
```

##### `resetKeySize` <a name="resetKeySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetKeySize"></a>

```java
public void resetKeySize()
```

##### `resetMaxValidationAttempts` <a name="resetMaxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetMaxValidationAttempts"></a>

```java
public void resetMaxValidationAttempts()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetPeriod"></a>

```java
public void resetPeriod()
```

##### `resetQrSize` <a name="resetQrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetQrSize"></a>

```java
public void resetQrSize()
```

##### `resetSkew` <a name="resetSkew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.resetSkew"></a>

```java
public void resetSkew()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityMfaTotp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_totp.IdentityMfaTotp;

IdentityMfaTotp.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_totp.IdentityMfaTotp;

IdentityMfaTotp.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_totp.IdentityMfaTotp;

IdentityMfaTotp.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_totp.IdentityMfaTotp;

IdentityMfaTotp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IdentityMfaTotp.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IdentityMfaTotp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IdentityMfaTotp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IdentityMfaTotp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMfaTotp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.methodId">methodId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.mountAccessor">mountAccessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespacePath">namespacePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.uuid">uuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digitsInput">digitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySizeInput">keySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttemptsInput">maxValidationAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.periodInput">periodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSizeInput">qrSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skewInput">skewInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digits">digits</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySize">keySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttempts">maxValidationAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.period">period</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSize">qrSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skew">skew</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `methodId`<sup>Required</sup> <a name="methodId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.methodId"></a>

```java
public java.lang.String getMethodId();
```

- *Type:* java.lang.String

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.mountAccessor"></a>

```java
public java.lang.String getMountAccessor();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespacePath"></a>

```java
public java.lang.String getNamespacePath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.uuid"></a>

```java
public java.lang.String getUuid();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `digitsInput`<sup>Optional</sup> <a name="digitsInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digitsInput"></a>

```java
public java.lang.Number getDigitsInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `keySizeInput`<sup>Optional</sup> <a name="keySizeInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySizeInput"></a>

```java
public java.lang.Number getKeySizeInput();
```

- *Type:* java.lang.Number

---

##### `maxValidationAttemptsInput`<sup>Optional</sup> <a name="maxValidationAttemptsInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttemptsInput"></a>

```java
public java.lang.Number getMaxValidationAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.periodInput"></a>

```java
public java.lang.Number getPeriodInput();
```

- *Type:* java.lang.Number

---

##### `qrSizeInput`<sup>Optional</sup> <a name="qrSizeInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSizeInput"></a>

```java
public java.lang.Number getQrSizeInput();
```

- *Type:* java.lang.Number

---

##### `skewInput`<sup>Optional</sup> <a name="skewInput" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skewInput"></a>

```java
public java.lang.Number getSkewInput();
```

- *Type:* java.lang.Number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `digits`<sup>Required</sup> <a name="digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.digits"></a>

```java
public java.lang.Number getDigits();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `keySize`<sup>Required</sup> <a name="keySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.keySize"></a>

```java
public java.lang.Number getKeySize();
```

- *Type:* java.lang.Number

---

##### `maxValidationAttempts`<sup>Required</sup> <a name="maxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.maxValidationAttempts"></a>

```java
public java.lang.Number getMaxValidationAttempts();
```

- *Type:* java.lang.Number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

---

##### `qrSize`<sup>Required</sup> <a name="qrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.qrSize"></a>

```java
public java.lang.Number getQrSize();
```

- *Type:* java.lang.Number

---

##### `skew`<sup>Required</sup> <a name="skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.skew"></a>

```java
public java.lang.Number getSkew();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotp.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaTotpConfig <a name="IdentityMfaTotpConfig" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.vault.identity_mfa_totp.IdentityMfaTotpConfig;

IdentityMfaTotpConfig.builder()
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
    .issuer(java.lang.String)
//  .algorithm(java.lang.String)
//  .digits(java.lang.Number)
//  .id(java.lang.String)
//  .keySize(java.lang.Number)
//  .maxValidationAttempts(java.lang.Number)
//  .namespace(java.lang.String)
//  .period(java.lang.Number)
//  .qrSize(java.lang.Number)
//  .skew(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.issuer">issuer</a></code> | <code>java.lang.String</code> | The name of the key's issuing organization. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.digits">digits</a></code> | <code>java.lang.Number</code> | The number of digits in the generated TOTP token. This value can either be 6 or 8. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.keySize">keySize</a></code> | <code>java.lang.Number</code> | Specifies the size in bytes of the generated key. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.maxValidationAttempts">maxValidationAttempts</a></code> | <code>java.lang.Number</code> | The maximum number of consecutive failed validation attempts allowed. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.period">period</a></code> | <code>java.lang.Number</code> | The length of time in seconds used to generate a counter for the TOTP token calculation. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.qrSize">qrSize</a></code> | <code>java.lang.Number</code> | The pixel size of the generated square QR code. |
| <code><a href="#@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.skew">skew</a></code> | <code>java.lang.Number</code> | The number of delay periods that are allowed when validating a TOTP token. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

The name of the key's issuing organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#issuer IdentityMfaTotp#issuer}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Specifies the hashing algorithm used to generate the TOTP code. Options include SHA1, SHA256, SHA512.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#algorithm IdentityMfaTotp#algorithm}

---

##### `digits`<sup>Optional</sup> <a name="digits" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.digits"></a>

```java
public java.lang.Number getDigits();
```

- *Type:* java.lang.Number

The number of digits in the generated TOTP token. This value can either be 6 or 8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#digits IdentityMfaTotp#digits}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#id IdentityMfaTotp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keySize`<sup>Optional</sup> <a name="keySize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.keySize"></a>

```java
public java.lang.Number getKeySize();
```

- *Type:* java.lang.Number

Specifies the size in bytes of the generated key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#key_size IdentityMfaTotp#key_size}

---

##### `maxValidationAttempts`<sup>Optional</sup> <a name="maxValidationAttempts" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.maxValidationAttempts"></a>

```java
public java.lang.Number getMaxValidationAttempts();
```

- *Type:* java.lang.Number

The maximum number of consecutive failed validation attempts allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#max_validation_attempts IdentityMfaTotp#max_validation_attempts}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#namespace IdentityMfaTotp#namespace}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.period"></a>

```java
public java.lang.Number getPeriod();
```

- *Type:* java.lang.Number

The length of time in seconds used to generate a counter for the TOTP token calculation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#period IdentityMfaTotp#period}

---

##### `qrSize`<sup>Optional</sup> <a name="qrSize" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.qrSize"></a>

```java
public java.lang.Number getQrSize();
```

- *Type:* java.lang.Number

The pixel size of the generated square QR code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#qr_size IdentityMfaTotp#qr_size}

---

##### `skew`<sup>Optional</sup> <a name="skew" id="@cdktf/provider-vault.identityMfaTotp.IdentityMfaTotpConfig.property.skew"></a>

```java
public java.lang.Number getSkew();
```

- *Type:* java.lang.Number

The number of delay periods that are allowed when validating a TOTP token.

This value can either be 0 or 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.0.0/docs/resources/identity_mfa_totp#skew IdentityMfaTotp#skew}

---



