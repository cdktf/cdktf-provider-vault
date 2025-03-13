# `pkiSecretBackendConfigAutoTidy` Submodule <a name="`pkiSecretBackendConfigAutoTidy` Submodule" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendConfigAutoTidy <a name="PkiSecretBackendConfigAutoTidy" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy vault_pki_secret_backend_config_auto_tidy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer"></a>

```typescript
import { pkiSecretBackendConfigAutoTidy } from '@cdktf/provider-vault'

new pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy(scope: Construct, id: string, config: PkiSecretBackendConfigAutoTidyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig">PkiSecretBackendConfigAutoTidyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig">PkiSecretBackendConfigAutoTidyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetAcmeAccountSafetyBuffer">resetAcmeAccountSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIntervalDuration">resetIntervalDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIssuerSafetyBuffer">resetIssuerSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaintainStoredCertificateCounts">resetMaintainStoredCertificateCounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaxStartupBackoffDuration">resetMaxStartupBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMinStartupBackoffDuration">resetMinStartupBackoffDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPauseDuration">resetPauseDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPublishStoredCertificateCountMetrics">resetPublishStoredCertificateCountMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetRevocationQueueSafetyBuffer">resetRevocationQueueSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetSafetyBuffer">resetSafetyBuffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyAcme">resetTidyAcme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertMetadata">resetTidyCertMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertStore">resetTidyCertStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCmpv2NonceStore">resetTidyCmpv2NonceStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCrossClusterRevokedCerts">resetTidyCrossClusterRevokedCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyExpiredIssuers">resetTidyExpiredIssuers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyMoveLegacyCaBundle">resetTidyMoveLegacyCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevocationQueue">resetTidyRevocationQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCertIssuerAssociations">resetTidyRevokedCertIssuerAssociations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCerts">resetTidyRevokedCerts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAcmeAccountSafetyBuffer` <a name="resetAcmeAccountSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetAcmeAccountSafetyBuffer"></a>

```typescript
public resetAcmeAccountSafetyBuffer(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIntervalDuration` <a name="resetIntervalDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIntervalDuration"></a>

```typescript
public resetIntervalDuration(): void
```

##### `resetIssuerSafetyBuffer` <a name="resetIssuerSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetIssuerSafetyBuffer"></a>

```typescript
public resetIssuerSafetyBuffer(): void
```

##### `resetMaintainStoredCertificateCounts` <a name="resetMaintainStoredCertificateCounts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaintainStoredCertificateCounts"></a>

```typescript
public resetMaintainStoredCertificateCounts(): void
```

##### `resetMaxStartupBackoffDuration` <a name="resetMaxStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMaxStartupBackoffDuration"></a>

```typescript
public resetMaxStartupBackoffDuration(): void
```

##### `resetMinStartupBackoffDuration` <a name="resetMinStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetMinStartupBackoffDuration"></a>

```typescript
public resetMinStartupBackoffDuration(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPauseDuration` <a name="resetPauseDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPauseDuration"></a>

```typescript
public resetPauseDuration(): void
```

##### `resetPublishStoredCertificateCountMetrics` <a name="resetPublishStoredCertificateCountMetrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetPublishStoredCertificateCountMetrics"></a>

```typescript
public resetPublishStoredCertificateCountMetrics(): void
```

##### `resetRevocationQueueSafetyBuffer` <a name="resetRevocationQueueSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetRevocationQueueSafetyBuffer"></a>

```typescript
public resetRevocationQueueSafetyBuffer(): void
```

##### `resetSafetyBuffer` <a name="resetSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetSafetyBuffer"></a>

```typescript
public resetSafetyBuffer(): void
```

##### `resetTidyAcme` <a name="resetTidyAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyAcme"></a>

```typescript
public resetTidyAcme(): void
```

##### `resetTidyCertMetadata` <a name="resetTidyCertMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertMetadata"></a>

```typescript
public resetTidyCertMetadata(): void
```

##### `resetTidyCertStore` <a name="resetTidyCertStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCertStore"></a>

```typescript
public resetTidyCertStore(): void
```

##### `resetTidyCmpv2NonceStore` <a name="resetTidyCmpv2NonceStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCmpv2NonceStore"></a>

```typescript
public resetTidyCmpv2NonceStore(): void
```

##### `resetTidyCrossClusterRevokedCerts` <a name="resetTidyCrossClusterRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyCrossClusterRevokedCerts"></a>

```typescript
public resetTidyCrossClusterRevokedCerts(): void
```

##### `resetTidyExpiredIssuers` <a name="resetTidyExpiredIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyExpiredIssuers"></a>

```typescript
public resetTidyExpiredIssuers(): void
```

##### `resetTidyMoveLegacyCaBundle` <a name="resetTidyMoveLegacyCaBundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyMoveLegacyCaBundle"></a>

```typescript
public resetTidyMoveLegacyCaBundle(): void
```

##### `resetTidyRevocationQueue` <a name="resetTidyRevocationQueue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevocationQueue"></a>

```typescript
public resetTidyRevocationQueue(): void
```

##### `resetTidyRevokedCertIssuerAssociations` <a name="resetTidyRevokedCertIssuerAssociations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCertIssuerAssociations"></a>

```typescript
public resetTidyRevokedCertIssuerAssociations(): void
```

##### `resetTidyRevokedCerts` <a name="resetTidyRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.resetTidyRevokedCerts"></a>

```typescript
public resetTidyRevokedCerts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendConfigAutoTidy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct"></a>

```typescript
import { pkiSecretBackendConfigAutoTidy } from '@cdktf/provider-vault'

pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement"></a>

```typescript
import { pkiSecretBackendConfigAutoTidy } from '@cdktf/provider-vault'

pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource"></a>

```typescript
import { pkiSecretBackendConfigAutoTidy } from '@cdktf/provider-vault'

pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendConfigAutoTidy } from '@cdktf/provider-vault'

pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendConfigAutoTidy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendConfigAutoTidy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendConfigAutoTidy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendConfigAutoTidy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBufferInput">acmeAccountSafetyBufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDurationInput">intervalDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBufferInput">issuerSafetyBufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCountsInput">maintainStoredCertificateCountsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDurationInput">maxStartupBackoffDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDurationInput">minStartupBackoffDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDurationInput">pauseDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetricsInput">publishStoredCertificateCountMetricsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBufferInput">revocationQueueSafetyBufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBufferInput">safetyBufferInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcmeInput">tidyAcmeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadataInput">tidyCertMetadataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStoreInput">tidyCertStoreInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStoreInput">tidyCmpv2NonceStoreInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCertsInput">tidyCrossClusterRevokedCertsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuersInput">tidyExpiredIssuersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundleInput">tidyMoveLegacyCaBundleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueueInput">tidyRevocationQueueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociationsInput">tidyRevokedCertIssuerAssociationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertsInput">tidyRevokedCertsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBuffer">acmeAccountSafetyBuffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDuration">intervalDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBuffer">issuerSafetyBuffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCounts">maintainStoredCertificateCounts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDuration">maxStartupBackoffDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDuration">minStartupBackoffDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDuration">pauseDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetrics">publishStoredCertificateCountMetrics</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBuffer">revocationQueueSafetyBuffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBuffer">safetyBuffer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcme">tidyAcme</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadata">tidyCertMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStore">tidyCertStore</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStore">tidyCmpv2NonceStore</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCerts">tidyCrossClusterRevokedCerts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuers">tidyExpiredIssuers</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundle">tidyMoveLegacyCaBundle</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueue">tidyRevocationQueue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociations">tidyRevokedCertIssuerAssociations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCerts">tidyRevokedCerts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acmeAccountSafetyBufferInput`<sup>Optional</sup> <a name="acmeAccountSafetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBufferInput"></a>

```typescript
public readonly acmeAccountSafetyBufferInput: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `intervalDurationInput`<sup>Optional</sup> <a name="intervalDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDurationInput"></a>

```typescript
public readonly intervalDurationInput: string;
```

- *Type:* string

---

##### `issuerSafetyBufferInput`<sup>Optional</sup> <a name="issuerSafetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBufferInput"></a>

```typescript
public readonly issuerSafetyBufferInput: string;
```

- *Type:* string

---

##### `maintainStoredCertificateCountsInput`<sup>Optional</sup> <a name="maintainStoredCertificateCountsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCountsInput"></a>

```typescript
public readonly maintainStoredCertificateCountsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxStartupBackoffDurationInput`<sup>Optional</sup> <a name="maxStartupBackoffDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDurationInput"></a>

```typescript
public readonly maxStartupBackoffDurationInput: string;
```

- *Type:* string

---

##### `minStartupBackoffDurationInput`<sup>Optional</sup> <a name="minStartupBackoffDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDurationInput"></a>

```typescript
public readonly minStartupBackoffDurationInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pauseDurationInput`<sup>Optional</sup> <a name="pauseDurationInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDurationInput"></a>

```typescript
public readonly pauseDurationInput: string;
```

- *Type:* string

---

##### `publishStoredCertificateCountMetricsInput`<sup>Optional</sup> <a name="publishStoredCertificateCountMetricsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetricsInput"></a>

```typescript
public readonly publishStoredCertificateCountMetricsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `revocationQueueSafetyBufferInput`<sup>Optional</sup> <a name="revocationQueueSafetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBufferInput"></a>

```typescript
public readonly revocationQueueSafetyBufferInput: string;
```

- *Type:* string

---

##### `safetyBufferInput`<sup>Optional</sup> <a name="safetyBufferInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBufferInput"></a>

```typescript
public readonly safetyBufferInput: string;
```

- *Type:* string

---

##### `tidyAcmeInput`<sup>Optional</sup> <a name="tidyAcmeInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcmeInput"></a>

```typescript
public readonly tidyAcmeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyCertMetadataInput`<sup>Optional</sup> <a name="tidyCertMetadataInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadataInput"></a>

```typescript
public readonly tidyCertMetadataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyCertStoreInput`<sup>Optional</sup> <a name="tidyCertStoreInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStoreInput"></a>

```typescript
public readonly tidyCertStoreInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyCmpv2NonceStoreInput`<sup>Optional</sup> <a name="tidyCmpv2NonceStoreInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStoreInput"></a>

```typescript
public readonly tidyCmpv2NonceStoreInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyCrossClusterRevokedCertsInput`<sup>Optional</sup> <a name="tidyCrossClusterRevokedCertsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCertsInput"></a>

```typescript
public readonly tidyCrossClusterRevokedCertsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyExpiredIssuersInput`<sup>Optional</sup> <a name="tidyExpiredIssuersInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuersInput"></a>

```typescript
public readonly tidyExpiredIssuersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyMoveLegacyCaBundleInput`<sup>Optional</sup> <a name="tidyMoveLegacyCaBundleInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundleInput"></a>

```typescript
public readonly tidyMoveLegacyCaBundleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyRevocationQueueInput`<sup>Optional</sup> <a name="tidyRevocationQueueInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueueInput"></a>

```typescript
public readonly tidyRevocationQueueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyRevokedCertIssuerAssociationsInput`<sup>Optional</sup> <a name="tidyRevokedCertIssuerAssociationsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociationsInput"></a>

```typescript
public readonly tidyRevokedCertIssuerAssociationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyRevokedCertsInput`<sup>Optional</sup> <a name="tidyRevokedCertsInput" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertsInput"></a>

```typescript
public readonly tidyRevokedCertsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acmeAccountSafetyBuffer`<sup>Required</sup> <a name="acmeAccountSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.acmeAccountSafetyBuffer"></a>

```typescript
public readonly acmeAccountSafetyBuffer: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `intervalDuration`<sup>Required</sup> <a name="intervalDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.intervalDuration"></a>

```typescript
public readonly intervalDuration: string;
```

- *Type:* string

---

##### `issuerSafetyBuffer`<sup>Required</sup> <a name="issuerSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.issuerSafetyBuffer"></a>

```typescript
public readonly issuerSafetyBuffer: string;
```

- *Type:* string

---

##### `maintainStoredCertificateCounts`<sup>Required</sup> <a name="maintainStoredCertificateCounts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maintainStoredCertificateCounts"></a>

```typescript
public readonly maintainStoredCertificateCounts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxStartupBackoffDuration`<sup>Required</sup> <a name="maxStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.maxStartupBackoffDuration"></a>

```typescript
public readonly maxStartupBackoffDuration: string;
```

- *Type:* string

---

##### `minStartupBackoffDuration`<sup>Required</sup> <a name="minStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.minStartupBackoffDuration"></a>

```typescript
public readonly minStartupBackoffDuration: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `pauseDuration`<sup>Required</sup> <a name="pauseDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.pauseDuration"></a>

```typescript
public readonly pauseDuration: string;
```

- *Type:* string

---

##### `publishStoredCertificateCountMetrics`<sup>Required</sup> <a name="publishStoredCertificateCountMetrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.publishStoredCertificateCountMetrics"></a>

```typescript
public readonly publishStoredCertificateCountMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `revocationQueueSafetyBuffer`<sup>Required</sup> <a name="revocationQueueSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.revocationQueueSafetyBuffer"></a>

```typescript
public readonly revocationQueueSafetyBuffer: string;
```

- *Type:* string

---

##### `safetyBuffer`<sup>Required</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.safetyBuffer"></a>

```typescript
public readonly safetyBuffer: string;
```

- *Type:* string

---

##### `tidyAcme`<sup>Required</sup> <a name="tidyAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyAcme"></a>

```typescript
public readonly tidyAcme: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyCertMetadata`<sup>Required</sup> <a name="tidyCertMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertMetadata"></a>

```typescript
public readonly tidyCertMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyCertStore`<sup>Required</sup> <a name="tidyCertStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCertStore"></a>

```typescript
public readonly tidyCertStore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyCmpv2NonceStore`<sup>Required</sup> <a name="tidyCmpv2NonceStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCmpv2NonceStore"></a>

```typescript
public readonly tidyCmpv2NonceStore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyCrossClusterRevokedCerts`<sup>Required</sup> <a name="tidyCrossClusterRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyCrossClusterRevokedCerts"></a>

```typescript
public readonly tidyCrossClusterRevokedCerts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyExpiredIssuers`<sup>Required</sup> <a name="tidyExpiredIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyExpiredIssuers"></a>

```typescript
public readonly tidyExpiredIssuers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyMoveLegacyCaBundle`<sup>Required</sup> <a name="tidyMoveLegacyCaBundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyMoveLegacyCaBundle"></a>

```typescript
public readonly tidyMoveLegacyCaBundle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyRevocationQueue`<sup>Required</sup> <a name="tidyRevocationQueue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevocationQueue"></a>

```typescript
public readonly tidyRevocationQueue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyRevokedCertIssuerAssociations`<sup>Required</sup> <a name="tidyRevokedCertIssuerAssociations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCertIssuerAssociations"></a>

```typescript
public readonly tidyRevokedCertIssuerAssociations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tidyRevokedCerts`<sup>Required</sup> <a name="tidyRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tidyRevokedCerts"></a>

```typescript
public readonly tidyRevokedCerts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendConfigAutoTidyConfig <a name="PkiSecretBackendConfigAutoTidyConfig" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.Initializer"></a>

```typescript
import { pkiSecretBackendConfigAutoTidy } from '@cdktf/provider-vault'

const pkiSecretBackendConfigAutoTidyConfig: pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.backend">backend</a></code> | <code>string</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether automatic tidy is enabled or not. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.acmeAccountSafetyBuffer">acmeAccountSafetyBuffer</a></code> | <code>string</code> | The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.intervalDuration">intervalDuration</a></code> | <code>string</code> | Interval at which to run an auto-tidy operation. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.issuerSafetyBuffer">issuerSafetyBuffer</a></code> | <code>string</code> | The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maintainStoredCertificateCounts">maintainStoredCertificateCounts</a></code> | <code>boolean \| cdktf.IResolvable</code> | This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maxStartupBackoffDuration">maxStartupBackoffDuration</a></code> | <code>string</code> | The maximum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.minStartupBackoffDuration">minStartupBackoffDuration</a></code> | <code>string</code> | The minimum amount of time auto-tidy will be delayed after startup. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.pauseDuration">pauseDuration</a></code> | <code>string</code> | The amount of time to wait between processing certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.publishStoredCertificateCountMetrics">publishStoredCertificateCountMetrics</a></code> | <code>boolean \| cdktf.IResolvable</code> | This configures whether the stored certificate count is published to the metrics consumer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.revocationQueueSafetyBuffer">revocationQueueSafetyBuffer</a></code> | <code>string</code> | The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.safetyBuffer">safetyBuffer</a></code> | <code>string</code> | The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyAcme">tidyAcme</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to enable tidying ACME accounts, orders and authorizations. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertMetadata">tidyCertMetadata</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to enable tidying up certificate metadata. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertStore">tidyCertStore</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to enable tidying up the certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCmpv2NonceStore">tidyCmpv2NonceStore</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to enable tidying up the CMPv2 nonce store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCrossClusterRevokedCerts">tidyCrossClusterRevokedCerts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to enable tidying up the cross-cluster revoked certificate store. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyExpiredIssuers">tidyExpiredIssuers</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to automatically remove expired issuers past the issuer_safety_buffer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyMoveLegacyCaBundle">tidyMoveLegacyCaBundle</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevocationQueue">tidyRevocationQueue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCertIssuerAssociations">tidyRevokedCertIssuerAssociations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to validate issuer associations on revocation entries. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCerts">tidyRevokedCerts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true to remove all invalid and expired certificates from storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#backend PkiSecretBackendConfigAutoTidy#backend}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether automatic tidy is enabled or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#enabled PkiSecretBackendConfigAutoTidy#enabled}

---

##### `acmeAccountSafetyBuffer`<sup>Optional</sup> <a name="acmeAccountSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.acmeAccountSafetyBuffer"></a>

```typescript
public readonly acmeAccountSafetyBuffer: string;
```

- *Type:* string

The amount of time that must pass after creation that an account with no orders is marked revoked, and the amount of time after being marked revoked or deactivated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#acme_account_safety_buffer PkiSecretBackendConfigAutoTidy#acme_account_safety_buffer}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#id PkiSecretBackendConfigAutoTidy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `intervalDuration`<sup>Optional</sup> <a name="intervalDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.intervalDuration"></a>

```typescript
public readonly intervalDuration: string;
```

- *Type:* string

Interval at which to run an auto-tidy operation.

This is the time between tidy invocations (after one finishes to the start of the next).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#interval_duration PkiSecretBackendConfigAutoTidy#interval_duration}

---

##### `issuerSafetyBuffer`<sup>Optional</sup> <a name="issuerSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.issuerSafetyBuffer"></a>

```typescript
public readonly issuerSafetyBuffer: string;
```

- *Type:* string

The amount of extra time that must have passed beyond issuer's expiration before it is removed from the backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#issuer_safety_buffer PkiSecretBackendConfigAutoTidy#issuer_safety_buffer}

---

##### `maintainStoredCertificateCounts`<sup>Optional</sup> <a name="maintainStoredCertificateCounts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maintainStoredCertificateCounts"></a>

```typescript
public readonly maintainStoredCertificateCounts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This configures whether stored certificate are counted upon initialization of the backend, and whether during normal operation, a running count of certificates stored is maintained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#maintain_stored_certificate_counts PkiSecretBackendConfigAutoTidy#maintain_stored_certificate_counts}

---

##### `maxStartupBackoffDuration`<sup>Optional</sup> <a name="maxStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.maxStartupBackoffDuration"></a>

```typescript
public readonly maxStartupBackoffDuration: string;
```

- *Type:* string

The maximum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#max_startup_backoff_duration PkiSecretBackendConfigAutoTidy#max_startup_backoff_duration}

---

##### `minStartupBackoffDuration`<sup>Optional</sup> <a name="minStartupBackoffDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.minStartupBackoffDuration"></a>

```typescript
public readonly minStartupBackoffDuration: string;
```

- *Type:* string

The minimum amount of time auto-tidy will be delayed after startup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#min_startup_backoff_duration PkiSecretBackendConfigAutoTidy#min_startup_backoff_duration}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#namespace PkiSecretBackendConfigAutoTidy#namespace}

---

##### `pauseDuration`<sup>Optional</sup> <a name="pauseDuration" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.pauseDuration"></a>

```typescript
public readonly pauseDuration: string;
```

- *Type:* string

The amount of time to wait between processing certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#pause_duration PkiSecretBackendConfigAutoTidy#pause_duration}

---

##### `publishStoredCertificateCountMetrics`<sup>Optional</sup> <a name="publishStoredCertificateCountMetrics" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.publishStoredCertificateCountMetrics"></a>

```typescript
public readonly publishStoredCertificateCountMetrics: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This configures whether the stored certificate count is published to the metrics consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#publish_stored_certificate_count_metrics PkiSecretBackendConfigAutoTidy#publish_stored_certificate_count_metrics}

---

##### `revocationQueueSafetyBuffer`<sup>Optional</sup> <a name="revocationQueueSafetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.revocationQueueSafetyBuffer"></a>

```typescript
public readonly revocationQueueSafetyBuffer: string;
```

- *Type:* string

The amount of time that must pass from the cross-cluster revocation request being initiated to when it will be slated for removal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#revocation_queue_safety_buffer PkiSecretBackendConfigAutoTidy#revocation_queue_safety_buffer}

---

##### `safetyBuffer`<sup>Optional</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.safetyBuffer"></a>

```typescript
public readonly safetyBuffer: string;
```

- *Type:* string

The amount of extra time that must have passed beyond certificate expiration before it is removed from the backend storage and/or revocation list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#safety_buffer PkiSecretBackendConfigAutoTidy#safety_buffer}

---

##### `tidyAcme`<sup>Optional</sup> <a name="tidyAcme" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyAcme"></a>

```typescript
public readonly tidyAcme: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to enable tidying ACME accounts, orders and authorizations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_acme PkiSecretBackendConfigAutoTidy#tidy_acme}

---

##### `tidyCertMetadata`<sup>Optional</sup> <a name="tidyCertMetadata" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertMetadata"></a>

```typescript
public readonly tidyCertMetadata: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to enable tidying up certificate metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_metadata PkiSecretBackendConfigAutoTidy#tidy_cert_metadata}

---

##### `tidyCertStore`<sup>Optional</sup> <a name="tidyCertStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCertStore"></a>

```typescript
public readonly tidyCertStore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to enable tidying up the certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cert_store PkiSecretBackendConfigAutoTidy#tidy_cert_store}

---

##### `tidyCmpv2NonceStore`<sup>Optional</sup> <a name="tidyCmpv2NonceStore" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCmpv2NonceStore"></a>

```typescript
public readonly tidyCmpv2NonceStore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to enable tidying up the CMPv2 nonce store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cmpv2_nonce_store PkiSecretBackendConfigAutoTidy#tidy_cmpv2_nonce_store}

---

##### `tidyCrossClusterRevokedCerts`<sup>Optional</sup> <a name="tidyCrossClusterRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyCrossClusterRevokedCerts"></a>

```typescript
public readonly tidyCrossClusterRevokedCerts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to enable tidying up the cross-cluster revoked certificate store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_cross_cluster_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_cross_cluster_revoked_certs}

---

##### `tidyExpiredIssuers`<sup>Optional</sup> <a name="tidyExpiredIssuers" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyExpiredIssuers"></a>

```typescript
public readonly tidyExpiredIssuers: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to automatically remove expired issuers past the issuer_safety_buffer.

No keys will be removed as part of this operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_expired_issuers PkiSecretBackendConfigAutoTidy#tidy_expired_issuers}

---

##### `tidyMoveLegacyCaBundle`<sup>Optional</sup> <a name="tidyMoveLegacyCaBundle" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyMoveLegacyCaBundle"></a>

```typescript
public readonly tidyMoveLegacyCaBundle: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to move the legacy ca_bundle from /config/ca_bundle to /config/ca_bundle.bak.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_move_legacy_ca_bundle PkiSecretBackendConfigAutoTidy#tidy_move_legacy_ca_bundle}

---

##### `tidyRevocationQueue`<sup>Optional</sup> <a name="tidyRevocationQueue" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevocationQueue"></a>

```typescript
public readonly tidyRevocationQueue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to remove stale revocation queue entries that haven't been confirmed by any active cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revocation_queue PkiSecretBackendConfigAutoTidy#tidy_revocation_queue}

---

##### `tidyRevokedCertIssuerAssociations`<sup>Optional</sup> <a name="tidyRevokedCertIssuerAssociations" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCertIssuerAssociations"></a>

```typescript
public readonly tidyRevokedCertIssuerAssociations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to validate issuer associations on revocation entries.

This helps increase the performance of CRL building and OCSP responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_cert_issuer_associations PkiSecretBackendConfigAutoTidy#tidy_revoked_cert_issuer_associations}

---

##### `tidyRevokedCerts`<sup>Optional</sup> <a name="tidyRevokedCerts" id="@cdktf/provider-vault.pkiSecretBackendConfigAutoTidy.PkiSecretBackendConfigAutoTidyConfig.property.tidyRevokedCerts"></a>

```typescript
public readonly tidyRevokedCerts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true to remove all invalid and expired certificates from storage.

A revoked storage entry is considered invalid if the entry is empty, or the value within the entry is empty. If a certificate is removed due to expiry, the entry will also be removed from the CRL, and the CRL will be rotated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_config_auto_tidy#tidy_revoked_certs PkiSecretBackendConfigAutoTidy#tidy_revoked_certs}

---



