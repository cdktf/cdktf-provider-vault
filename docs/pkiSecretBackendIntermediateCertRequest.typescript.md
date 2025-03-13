# `pkiSecretBackendIntermediateCertRequest` Submodule <a name="`pkiSecretBackendIntermediateCertRequest` Submodule" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendIntermediateCertRequest <a name="PkiSecretBackendIntermediateCertRequest" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request vault_pki_secret_backend_intermediate_cert_request}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer"></a>

```typescript
import { pkiSecretBackendIntermediateCertRequest } from '@cdktf/provider-vault'

new pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest(scope: Construct, id: string, config: PkiSecretBackendIntermediateCertRequestConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig">PkiSecretBackendIntermediateCertRequestConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig">PkiSecretBackendIntermediateCertRequestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAddBasicConstraints">resetAddBasicConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAltNames">resetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetExcludeCnFromSans">resetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetIpSans">resetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyRef">resetKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyUsage">resetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyId">resetManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyName">resetManagedKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOtherSans">resetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOu">resetOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPrivateKeyFormat">resetPrivateKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetSerialNumber">resetSerialNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetSignatureBits">resetSignatureBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetUriSans">resetUriSans</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAddBasicConstraints` <a name="resetAddBasicConstraints" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAddBasicConstraints"></a>

```typescript
public resetAddBasicConstraints(): void
```

##### `resetAltNames` <a name="resetAltNames" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetAltNames"></a>

```typescript
public resetAltNames(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetExcludeCnFromSans` <a name="resetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetExcludeCnFromSans"></a>

```typescript
public resetExcludeCnFromSans(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpSans` <a name="resetIpSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetIpSans"></a>

```typescript
public resetIpSans(): void
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyBits"></a>

```typescript
public resetKeyBits(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetKeyRef` <a name="resetKeyRef" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyRef"></a>

```typescript
public resetKeyRef(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetKeyUsage` <a name="resetKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetKeyUsage"></a>

```typescript
public resetKeyUsage(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetManagedKeyId` <a name="resetManagedKeyId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyId"></a>

```typescript
public resetManagedKeyId(): void
```

##### `resetManagedKeyName` <a name="resetManagedKeyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetManagedKeyName"></a>

```typescript
public resetManagedKeyName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOtherSans` <a name="resetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOtherSans"></a>

```typescript
public resetOtherSans(): void
```

##### `resetOu` <a name="resetOu" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetOu"></a>

```typescript
public resetOu(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetPrivateKeyFormat` <a name="resetPrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetPrivateKeyFormat"></a>

```typescript
public resetPrivateKeyFormat(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetSerialNumber` <a name="resetSerialNumber" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetSerialNumber"></a>

```typescript
public resetSerialNumber(): void
```

##### `resetSignatureBits` <a name="resetSignatureBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetSignatureBits"></a>

```typescript
public resetSignatureBits(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```

##### `resetUriSans` <a name="resetUriSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.resetUriSans"></a>

```typescript
public resetUriSans(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendIntermediateCertRequest resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isConstruct"></a>

```typescript
import { pkiSecretBackendIntermediateCertRequest } from '@cdktf/provider-vault'

pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformElement"></a>

```typescript
import { pkiSecretBackendIntermediateCertRequest } from '@cdktf/provider-vault'

pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformResource"></a>

```typescript
import { pkiSecretBackendIntermediateCertRequest } from '@cdktf/provider-vault'

pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendIntermediateCertRequest } from '@cdktf/provider-vault'

pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendIntermediateCertRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendIntermediateCertRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendIntermediateCertRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendIntermediateCertRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.csr">csr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyType">privateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraintsInput">addBasicConstraintsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNamesInput">altNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSansInput">excludeCnFromSansInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSansInput">ipSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBitsInput">keyBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRefInput">keyRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyUsageInput">keyUsageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyIdInput">managedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyNameInput">managedKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSansInput">otherSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ouInput">ouInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormatInput">privateKeyFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.serialNumberInput">serialNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.signatureBitsInput">signatureBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddressInput">streetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSansInput">uriSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraints">addBasicConstraints</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNames">altNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSans">ipSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBits">keyBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRef">keyRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyUsage">keyUsage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyId">managedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyName">managedKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSans">otherSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ou">ou</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormat">privateKeyFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.signatureBits">signatureBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSans">uriSans</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyType`<sup>Required</sup> <a name="privateKeyType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyType"></a>

```typescript
public readonly privateKeyType: string;
```

- *Type:* string

---

##### `addBasicConstraintsInput`<sup>Optional</sup> <a name="addBasicConstraintsInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraintsInput"></a>

```typescript
public readonly addBasicConstraintsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `altNamesInput`<sup>Optional</sup> <a name="altNamesInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNamesInput"></a>

```typescript
public readonly altNamesInput: string[];
```

- *Type:* string[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `excludeCnFromSansInput`<sup>Optional</sup> <a name="excludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSansInput"></a>

```typescript
public readonly excludeCnFromSansInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipSansInput`<sup>Optional</sup> <a name="ipSansInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSansInput"></a>

```typescript
public readonly ipSansInput: string[];
```

- *Type:* string[]

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBitsInput"></a>

```typescript
public readonly keyBitsInput: number;
```

- *Type:* number

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyRefInput`<sup>Optional</sup> <a name="keyRefInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRefInput"></a>

```typescript
public readonly keyRefInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyUsageInput"></a>

```typescript
public readonly keyUsageInput: string[];
```

- *Type:* string[]

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `managedKeyIdInput`<sup>Optional</sup> <a name="managedKeyIdInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyIdInput"></a>

```typescript
public readonly managedKeyIdInput: string;
```

- *Type:* string

---

##### `managedKeyNameInput`<sup>Optional</sup> <a name="managedKeyNameInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyNameInput"></a>

```typescript
public readonly managedKeyNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `otherSansInput`<sup>Optional</sup> <a name="otherSansInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSansInput"></a>

```typescript
public readonly otherSansInput: string[];
```

- *Type:* string[]

---

##### `ouInput`<sup>Optional</sup> <a name="ouInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ouInput"></a>

```typescript
public readonly ouInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `privateKeyFormatInput`<sup>Optional</sup> <a name="privateKeyFormatInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormatInput"></a>

```typescript
public readonly privateKeyFormatInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `serialNumberInput`<sup>Optional</sup> <a name="serialNumberInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.serialNumberInput"></a>

```typescript
public readonly serialNumberInput: string;
```

- *Type:* string

---

##### `signatureBitsInput`<sup>Optional</sup> <a name="signatureBitsInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.signatureBitsInput"></a>

```typescript
public readonly signatureBitsInput: number;
```

- *Type:* number

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriSansInput`<sup>Optional</sup> <a name="uriSansInput" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSansInput"></a>

```typescript
public readonly uriSansInput: string[];
```

- *Type:* string[]

---

##### `addBasicConstraints`<sup>Required</sup> <a name="addBasicConstraints" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.addBasicConstraints"></a>

```typescript
public readonly addBasicConstraints: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `altNames`<sup>Required</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.altNames"></a>

```typescript
public readonly altNames: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `excludeCnFromSans`<sup>Required</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.excludeCnFromSans"></a>

```typescript
public readonly excludeCnFromSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipSans`<sup>Required</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ipSans"></a>

```typescript
public readonly ipSans: string[];
```

- *Type:* string[]

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyBits"></a>

```typescript
public readonly keyBits: number;
```

- *Type:* number

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyRef`<sup>Required</sup> <a name="keyRef" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyRef"></a>

```typescript
public readonly keyRef: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.keyUsage"></a>

```typescript
public readonly keyUsage: string[];
```

- *Type:* string[]

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `managedKeyId`<sup>Required</sup> <a name="managedKeyId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyId"></a>

```typescript
public readonly managedKeyId: string;
```

- *Type:* string

---

##### `managedKeyName`<sup>Required</sup> <a name="managedKeyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.managedKeyName"></a>

```typescript
public readonly managedKeyName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `otherSans`<sup>Required</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.otherSans"></a>

```typescript
public readonly otherSans: string[];
```

- *Type:* string[]

---

##### `ou`<sup>Required</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.ou"></a>

```typescript
public readonly ou: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `privateKeyFormat`<sup>Required</sup> <a name="privateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.privateKeyFormat"></a>

```typescript
public readonly privateKeyFormat: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `signatureBits`<sup>Required</sup> <a name="signatureBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.signatureBits"></a>

```typescript
public readonly signatureBits: number;
```

- *Type:* number

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uriSans`<sup>Required</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.uriSans"></a>

```typescript
public readonly uriSans: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequest.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendIntermediateCertRequestConfig <a name="PkiSecretBackendIntermediateCertRequestConfig" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.Initializer"></a>

```typescript
import { pkiSecretBackendIntermediateCertRequest } from '@cdktf/provider-vault'

const pkiSecretBackendIntermediateCertRequestConfig: pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.backend">backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.commonName">commonName</a></code> | <code>string</code> | CN of intermediate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.type">type</a></code> | <code>string</code> | Type of intermediate to create. Must be either "existing", "exported", "internal" or "kms". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.addBasicConstraints">addBasicConstraints</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set 'CA: true' in a Basic Constraints extension. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.altNames">altNames</a></code> | <code>string[]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.country">country</a></code> | <code>string</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.format">format</a></code> | <code>string</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#id PkiSecretBackendIntermediateCertRequest#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ipSans">ipSans</a></code> | <code>string[]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyBits">keyBits</a></code> | <code>number</code> | The number of bits to use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyName">keyName</a></code> | <code>string</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyRef">keyRef</a></code> | <code>string</code> | Specifies the key to use for generating this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyType">keyType</a></code> | <code>string</code> | The desired key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyUsage">keyUsage</a></code> | <code>string[]</code> | Specify the key usages to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.locality">locality</a></code> | <code>string</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyId">managedKeyId</a></code> | <code>string</code> | The ID of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyName">managedKeyName</a></code> | <code>string</code> | The name of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.organization">organization</a></code> | <code>string</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.otherSans">otherSans</a></code> | <code>string[]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ou">ou</a></code> | <code>string</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.postalCode">postalCode</a></code> | <code>string</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.privateKeyFormat">privateKeyFormat</a></code> | <code>string</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.province">province</a></code> | <code>string</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.serialNumber">serialNumber</a></code> | <code>string</code> | The requested Subject's named serial number. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.signatureBits">signatureBits</a></code> | <code>number</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.streetAddress">streetAddress</a></code> | <code>string</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.uriSans">uriSans</a></code> | <code>string[]</code> | List of alternative URIs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#backend PkiSecretBackendIntermediateCertRequest#backend}

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

CN of intermediate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#common_name PkiSecretBackendIntermediateCertRequest#common_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of intermediate to create. Must be either "existing", "exported", "internal" or "kms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#type PkiSecretBackendIntermediateCertRequest#type}

---

##### `addBasicConstraints`<sup>Optional</sup> <a name="addBasicConstraints" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.addBasicConstraints"></a>

```typescript
public readonly addBasicConstraints: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set 'CA: true' in a Basic Constraints extension.

Only needed as
a workaround in some compatibility scenarios with Active Directory Certificate Services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#add_basic_constraints PkiSecretBackendIntermediateCertRequest#add_basic_constraints}

---

##### `altNames`<sup>Optional</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.altNames"></a>

```typescript
public readonly altNames: string[];
```

- *Type:* string[]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#alt_names PkiSecretBackendIntermediateCertRequest#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#country PkiSecretBackendIntermediateCertRequest#country}

---

##### `excludeCnFromSans`<sup>Optional</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.excludeCnFromSans"></a>

```typescript
public readonly excludeCnFromSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#exclude_cn_from_sans PkiSecretBackendIntermediateCertRequest#exclude_cn_from_sans}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#format PkiSecretBackendIntermediateCertRequest#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#id PkiSecretBackendIntermediateCertRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSans`<sup>Optional</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ipSans"></a>

```typescript
public readonly ipSans: string[];
```

- *Type:* string[]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#ip_sans PkiSecretBackendIntermediateCertRequest#ip_sans}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyBits"></a>

```typescript
public readonly keyBits: number;
```

- *Type:* number

The number of bits to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_bits PkiSecretBackendIntermediateCertRequest#key_bits}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_name PkiSecretBackendIntermediateCertRequest#key_name}

---

##### `keyRef`<sup>Optional</sup> <a name="keyRef" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyRef"></a>

```typescript
public readonly keyRef: string;
```

- *Type:* string

Specifies the key to use for generating this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_ref PkiSecretBackendIntermediateCertRequest#key_ref}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The desired key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_type PkiSecretBackendIntermediateCertRequest#key_type}

---

##### `keyUsage`<sup>Optional</sup> <a name="keyUsage" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.keyUsage"></a>

```typescript
public readonly keyUsage: string[];
```

- *Type:* string[]

Specify the key usages to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#key_usage PkiSecretBackendIntermediateCertRequest#key_usage}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#locality PkiSecretBackendIntermediateCertRequest#locality}

---

##### `managedKeyId`<sup>Optional</sup> <a name="managedKeyId" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyId"></a>

```typescript
public readonly managedKeyId: string;
```

- *Type:* string

The ID of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#managed_key_id PkiSecretBackendIntermediateCertRequest#managed_key_id}

---

##### `managedKeyName`<sup>Optional</sup> <a name="managedKeyName" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.managedKeyName"></a>

```typescript
public readonly managedKeyName: string;
```

- *Type:* string

The name of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#managed_key_name PkiSecretBackendIntermediateCertRequest#managed_key_name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#namespace PkiSecretBackendIntermediateCertRequest#namespace}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#organization PkiSecretBackendIntermediateCertRequest#organization}

---

##### `otherSans`<sup>Optional</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.otherSans"></a>

```typescript
public readonly otherSans: string[];
```

- *Type:* string[]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#other_sans PkiSecretBackendIntermediateCertRequest#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.ou"></a>

```typescript
public readonly ou: string;
```

- *Type:* string

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#ou PkiSecretBackendIntermediateCertRequest#ou}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#postal_code PkiSecretBackendIntermediateCertRequest#postal_code}

---

##### `privateKeyFormat`<sup>Optional</sup> <a name="privateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.privateKeyFormat"></a>

```typescript
public readonly privateKeyFormat: string;
```

- *Type:* string

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#private_key_format PkiSecretBackendIntermediateCertRequest#private_key_format}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#province PkiSecretBackendIntermediateCertRequest#province}

---

##### `serialNumber`<sup>Optional</sup> <a name="serialNumber" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

The requested Subject's named serial number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#serial_number PkiSecretBackendIntermediateCertRequest#serial_number}

---

##### `signatureBits`<sup>Optional</sup> <a name="signatureBits" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.signatureBits"></a>

```typescript
public readonly signatureBits: number;
```

- *Type:* number

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#signature_bits PkiSecretBackendIntermediateCertRequest#signature_bits}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#street_address PkiSecretBackendIntermediateCertRequest#street_address}

---

##### `uriSans`<sup>Optional</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendIntermediateCertRequest.PkiSecretBackendIntermediateCertRequestConfig.property.uriSans"></a>

```typescript
public readonly uriSans: string[];
```

- *Type:* string[]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/pki_secret_backend_intermediate_cert_request#uri_sans PkiSecretBackendIntermediateCertRequest#uri_sans}

---



