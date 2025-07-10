# `pkiSecretBackendRootCert` Submodule <a name="`pkiSecretBackendRootCert` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRootCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRootCert <a name="PkiSecretBackendRootCert" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert vault_pki_secret_backend_root_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer"></a>

```typescript
import { pkiSecretBackendRootCert } from '@cdktf/provider-vault'

new pkiSecretBackendRootCert.PkiSecretBackendRootCert(scope: Construct, id: string, config: PkiSecretBackendRootCertConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig">PkiSecretBackendRootCertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig">PkiSecretBackendRootCertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetAltNames">resetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludeCnFromSans">resetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedDnsDomains">resetExcludedDnsDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedEmailAddresses">resetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedIpRanges">resetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedUriDomains">resetExcludedUriDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIpSans">resetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIssuerName">resetIssuerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyRef">resetKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyId">resetManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyName">resetManagedKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetMaxPathLength">resetMaxPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNotAfter">resetNotAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOtherSans">resetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOu">resetOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedDnsDomains">resetPermittedDnsDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedEmailAddresses">resetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedIpRanges">resetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedUriDomains">resetPermittedUriDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPrivateKeyFormat">resetPrivateKeyFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetSignatureBits">resetSignatureBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetUriSans">resetUriSans</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAltNames` <a name="resetAltNames" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetAltNames"></a>

```typescript
public resetAltNames(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetExcludeCnFromSans` <a name="resetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludeCnFromSans"></a>

```typescript
public resetExcludeCnFromSans(): void
```

##### `resetExcludedDnsDomains` <a name="resetExcludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedDnsDomains"></a>

```typescript
public resetExcludedDnsDomains(): void
```

##### `resetExcludedEmailAddresses` <a name="resetExcludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedEmailAddresses"></a>

```typescript
public resetExcludedEmailAddresses(): void
```

##### `resetExcludedIpRanges` <a name="resetExcludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedIpRanges"></a>

```typescript
public resetExcludedIpRanges(): void
```

##### `resetExcludedUriDomains` <a name="resetExcludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetExcludedUriDomains"></a>

```typescript
public resetExcludedUriDomains(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpSans` <a name="resetIpSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIpSans"></a>

```typescript
public resetIpSans(): void
```

##### `resetIssuerName` <a name="resetIssuerName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetIssuerName"></a>

```typescript
public resetIssuerName(): void
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyBits"></a>

```typescript
public resetKeyBits(): void
```

##### `resetKeyName` <a name="resetKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetKeyRef` <a name="resetKeyRef" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyRef"></a>

```typescript
public resetKeyRef(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetManagedKeyId` <a name="resetManagedKeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyId"></a>

```typescript
public resetManagedKeyId(): void
```

##### `resetManagedKeyName` <a name="resetManagedKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetManagedKeyName"></a>

```typescript
public resetManagedKeyName(): void
```

##### `resetMaxPathLength` <a name="resetMaxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetMaxPathLength"></a>

```typescript
public resetMaxPathLength(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNotAfter` <a name="resetNotAfter" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetNotAfter"></a>

```typescript
public resetNotAfter(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOtherSans` <a name="resetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOtherSans"></a>

```typescript
public resetOtherSans(): void
```

##### `resetOu` <a name="resetOu" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetOu"></a>

```typescript
public resetOu(): void
```

##### `resetPermittedDnsDomains` <a name="resetPermittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedDnsDomains"></a>

```typescript
public resetPermittedDnsDomains(): void
```

##### `resetPermittedEmailAddresses` <a name="resetPermittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedEmailAddresses"></a>

```typescript
public resetPermittedEmailAddresses(): void
```

##### `resetPermittedIpRanges` <a name="resetPermittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedIpRanges"></a>

```typescript
public resetPermittedIpRanges(): void
```

##### `resetPermittedUriDomains` <a name="resetPermittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPermittedUriDomains"></a>

```typescript
public resetPermittedUriDomains(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetPrivateKeyFormat` <a name="resetPrivateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetPrivateKeyFormat"></a>

```typescript
public resetPrivateKeyFormat(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetSignatureBits` <a name="resetSignatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetSignatureBits"></a>

```typescript
public resetSignatureBits(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetUriSans` <a name="resetUriSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.resetUriSans"></a>

```typescript
public resetUriSans(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendRootCert resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct"></a>

```typescript
import { pkiSecretBackendRootCert } from '@cdktf/provider-vault'

pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement"></a>

```typescript
import { pkiSecretBackendRootCert } from '@cdktf/provider-vault'

pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource"></a>

```typescript
import { pkiSecretBackendRootCert } from '@cdktf/provider-vault'

pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendRootCert } from '@cdktf/provider-vault'

pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendRootCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendRootCert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendRootCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRootCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerId">issuerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuingCa">issuingCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNamesInput">altNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSansInput">excludeCnFromSansInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomainsInput">excludedDnsDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddressesInput">excludedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRangesInput">excludedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomainsInput">excludedUriDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSansInput">ipSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerNameInput">issuerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBitsInput">keyBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRefInput">keyRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyIdInput">managedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyNameInput">managedKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLengthInput">maxPathLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfterInput">notAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSansInput">otherSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ouInput">ouInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomainsInput">permittedDnsDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddressesInput">permittedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRangesInput">permittedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomainsInput">permittedUriDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormatInput">privateKeyFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBitsInput">signatureBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddressInput">streetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSansInput">uriSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNames">altNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomains">excludedDnsDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRanges">excludedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomains">excludedUriDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSans">ipSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerName">issuerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBits">keyBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRef">keyRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyId">managedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyName">managedKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLength">maxPathLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfter">notAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSans">otherSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ou">ou</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomains">permittedDnsDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRanges">permittedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomains">permittedUriDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormat">privateKeyFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBits">signatureBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSans">uriSans</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `issuerId`<sup>Required</sup> <a name="issuerId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerId"></a>

```typescript
public readonly issuerId: string;
```

- *Type:* string

---

##### `issuingCa`<sup>Required</sup> <a name="issuingCa" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuingCa"></a>

```typescript
public readonly issuingCa: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `altNamesInput`<sup>Optional</sup> <a name="altNamesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNamesInput"></a>

```typescript
public readonly altNamesInput: string[];
```

- *Type:* string[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `excludeCnFromSansInput`<sup>Optional</sup> <a name="excludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSansInput"></a>

```typescript
public readonly excludeCnFromSansInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedDnsDomainsInput`<sup>Optional</sup> <a name="excludedDnsDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomainsInput"></a>

```typescript
public readonly excludedDnsDomainsInput: string[];
```

- *Type:* string[]

---

##### `excludedEmailAddressesInput`<sup>Optional</sup> <a name="excludedEmailAddressesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddressesInput"></a>

```typescript
public readonly excludedEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `excludedIpRangesInput`<sup>Optional</sup> <a name="excludedIpRangesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRangesInput"></a>

```typescript
public readonly excludedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `excludedUriDomainsInput`<sup>Optional</sup> <a name="excludedUriDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomainsInput"></a>

```typescript
public readonly excludedUriDomainsInput: string[];
```

- *Type:* string[]

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipSansInput`<sup>Optional</sup> <a name="ipSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSansInput"></a>

```typescript
public readonly ipSansInput: string[];
```

- *Type:* string[]

---

##### `issuerNameInput`<sup>Optional</sup> <a name="issuerNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerNameInput"></a>

```typescript
public readonly issuerNameInput: string;
```

- *Type:* string

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBitsInput"></a>

```typescript
public readonly keyBitsInput: number;
```

- *Type:* number

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `keyRefInput`<sup>Optional</sup> <a name="keyRefInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRefInput"></a>

```typescript
public readonly keyRefInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `managedKeyIdInput`<sup>Optional</sup> <a name="managedKeyIdInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyIdInput"></a>

```typescript
public readonly managedKeyIdInput: string;
```

- *Type:* string

---

##### `managedKeyNameInput`<sup>Optional</sup> <a name="managedKeyNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyNameInput"></a>

```typescript
public readonly managedKeyNameInput: string;
```

- *Type:* string

---

##### `maxPathLengthInput`<sup>Optional</sup> <a name="maxPathLengthInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLengthInput"></a>

```typescript
public readonly maxPathLengthInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `notAfterInput`<sup>Optional</sup> <a name="notAfterInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfterInput"></a>

```typescript
public readonly notAfterInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `otherSansInput`<sup>Optional</sup> <a name="otherSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSansInput"></a>

```typescript
public readonly otherSansInput: string[];
```

- *Type:* string[]

---

##### `ouInput`<sup>Optional</sup> <a name="ouInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ouInput"></a>

```typescript
public readonly ouInput: string;
```

- *Type:* string

---

##### `permittedDnsDomainsInput`<sup>Optional</sup> <a name="permittedDnsDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomainsInput"></a>

```typescript
public readonly permittedDnsDomainsInput: string[];
```

- *Type:* string[]

---

##### `permittedEmailAddressesInput`<sup>Optional</sup> <a name="permittedEmailAddressesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddressesInput"></a>

```typescript
public readonly permittedEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `permittedIpRangesInput`<sup>Optional</sup> <a name="permittedIpRangesInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRangesInput"></a>

```typescript
public readonly permittedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `permittedUriDomainsInput`<sup>Optional</sup> <a name="permittedUriDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomainsInput"></a>

```typescript
public readonly permittedUriDomainsInput: string[];
```

- *Type:* string[]

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `privateKeyFormatInput`<sup>Optional</sup> <a name="privateKeyFormatInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormatInput"></a>

```typescript
public readonly privateKeyFormatInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `signatureBitsInput`<sup>Optional</sup> <a name="signatureBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBitsInput"></a>

```typescript
public readonly signatureBitsInput: number;
```

- *Type:* number

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `uriSansInput`<sup>Optional</sup> <a name="uriSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSansInput"></a>

```typescript
public readonly uriSansInput: string[];
```

- *Type:* string[]

---

##### `altNames`<sup>Required</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.altNames"></a>

```typescript
public readonly altNames: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `excludeCnFromSans`<sup>Required</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludeCnFromSans"></a>

```typescript
public readonly excludeCnFromSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedDnsDomains`<sup>Required</sup> <a name="excludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedDnsDomains"></a>

```typescript
public readonly excludedDnsDomains: string[];
```

- *Type:* string[]

---

##### `excludedEmailAddresses`<sup>Required</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedEmailAddresses"></a>

```typescript
public readonly excludedEmailAddresses: string[];
```

- *Type:* string[]

---

##### `excludedIpRanges`<sup>Required</sup> <a name="excludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedIpRanges"></a>

```typescript
public readonly excludedIpRanges: string[];
```

- *Type:* string[]

---

##### `excludedUriDomains`<sup>Required</sup> <a name="excludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.excludedUriDomains"></a>

```typescript
public readonly excludedUriDomains: string[];
```

- *Type:* string[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipSans`<sup>Required</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ipSans"></a>

```typescript
public readonly ipSans: string[];
```

- *Type:* string[]

---

##### `issuerName`<sup>Required</sup> <a name="issuerName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.issuerName"></a>

```typescript
public readonly issuerName: string;
```

- *Type:* string

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyBits"></a>

```typescript
public readonly keyBits: number;
```

- *Type:* number

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `keyRef`<sup>Required</sup> <a name="keyRef" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyRef"></a>

```typescript
public readonly keyRef: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `managedKeyId`<sup>Required</sup> <a name="managedKeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyId"></a>

```typescript
public readonly managedKeyId: string;
```

- *Type:* string

---

##### `managedKeyName`<sup>Required</sup> <a name="managedKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.managedKeyName"></a>

```typescript
public readonly managedKeyName: string;
```

- *Type:* string

---

##### `maxPathLength`<sup>Required</sup> <a name="maxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.maxPathLength"></a>

```typescript
public readonly maxPathLength: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `otherSans`<sup>Required</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.otherSans"></a>

```typescript
public readonly otherSans: string[];
```

- *Type:* string[]

---

##### `ou`<sup>Required</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ou"></a>

```typescript
public readonly ou: string;
```

- *Type:* string

---

##### `permittedDnsDomains`<sup>Required</sup> <a name="permittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedDnsDomains"></a>

```typescript
public readonly permittedDnsDomains: string[];
```

- *Type:* string[]

---

##### `permittedEmailAddresses`<sup>Required</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedEmailAddresses"></a>

```typescript
public readonly permittedEmailAddresses: string[];
```

- *Type:* string[]

---

##### `permittedIpRanges`<sup>Required</sup> <a name="permittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedIpRanges"></a>

```typescript
public readonly permittedIpRanges: string[];
```

- *Type:* string[]

---

##### `permittedUriDomains`<sup>Required</sup> <a name="permittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.permittedUriDomains"></a>

```typescript
public readonly permittedUriDomains: string[];
```

- *Type:* string[]

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `privateKeyFormat`<sup>Required</sup> <a name="privateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.privateKeyFormat"></a>

```typescript
public readonly privateKeyFormat: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `signatureBits`<sup>Required</sup> <a name="signatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.signatureBits"></a>

```typescript
public readonly signatureBits: number;
```

- *Type:* number

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uriSans`<sup>Required</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.uriSans"></a>

```typescript
public readonly uriSans: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCert.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRootCertConfig <a name="PkiSecretBackendRootCertConfig" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.Initializer"></a>

```typescript
import { pkiSecretBackendRootCert } from '@cdktf/provider-vault'

const pkiSecretBackendRootCertConfig: pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.backend">backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.commonName">commonName</a></code> | <code>string</code> | CN of root to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.type">type</a></code> | <code>string</code> | Type of root to create. Must be either "existing", "exported", "internal" or "kms". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.altNames">altNames</a></code> | <code>string[]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.country">country</a></code> | <code>string</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedDnsDomains">excludedDnsDomains</a></code> | <code>string[]</code> | List of domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>string[]</code> | List of email addresses for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedIpRanges">excludedIpRanges</a></code> | <code>string[]</code> | List of IP ranges for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedUriDomains">excludedUriDomains</a></code> | <code>string[]</code> | List of URI domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.format">format</a></code> | <code>string</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ipSans">ipSans</a></code> | <code>string[]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.issuerName">issuerName</a></code> | <code>string</code> | Provides a name to the specified issuer. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyBits">keyBits</a></code> | <code>number</code> | The number of bits to use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyName">keyName</a></code> | <code>string</code> | When a new key is created with this request, optionally specifies the name for this. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyRef">keyRef</a></code> | <code>string</code> | Specifies the key to use for generating this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyType">keyType</a></code> | <code>string</code> | The desired key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.locality">locality</a></code> | <code>string</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyId">managedKeyId</a></code> | <code>string</code> | The ID of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyName">managedKeyName</a></code> | <code>string</code> | The name of the previously configured managed key. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.maxPathLength">maxPathLength</a></code> | <code>number</code> | The maximum path length to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.notAfter">notAfter</a></code> | <code>string</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.organization">organization</a></code> | <code>string</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.otherSans">otherSans</a></code> | <code>string[]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ou">ou</a></code> | <code>string</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedDnsDomains">permittedDnsDomains</a></code> | <code>string[]</code> | List of domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>string[]</code> | List of email addresses for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedIpRanges">permittedIpRanges</a></code> | <code>string[]</code> | List of IP ranges for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedUriDomains">permittedUriDomains</a></code> | <code>string[]</code> | List of URI domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.postalCode">postalCode</a></code> | <code>string</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.privateKeyFormat">privateKeyFormat</a></code> | <code>string</code> | The private key format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.province">province</a></code> | <code>string</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.signatureBits">signatureBits</a></code> | <code>number</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.streetAddress">streetAddress</a></code> | <code>string</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ttl">ttl</a></code> | <code>string</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.uriSans">uriSans</a></code> | <code>string[]</code> | List of alternative URIs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#backend PkiSecretBackendRootCert#backend}

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

CN of root to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#common_name PkiSecretBackendRootCert#common_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of root to create. Must be either "existing", "exported", "internal" or "kms".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#type PkiSecretBackendRootCert#type}

---

##### `altNames`<sup>Optional</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.altNames"></a>

```typescript
public readonly altNames: string[];
```

- *Type:* string[]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#alt_names PkiSecretBackendRootCert#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#country PkiSecretBackendRootCert#country}

---

##### `excludeCnFromSans`<sup>Optional</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludeCnFromSans"></a>

```typescript
public readonly excludeCnFromSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#exclude_cn_from_sans PkiSecretBackendRootCert#exclude_cn_from_sans}

---

##### `excludedDnsDomains`<sup>Optional</sup> <a name="excludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedDnsDomains"></a>

```typescript
public readonly excludedDnsDomains: string[];
```

- *Type:* string[]

List of domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#excluded_dns_domains PkiSecretBackendRootCert#excluded_dns_domains}

---

##### `excludedEmailAddresses`<sup>Optional</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedEmailAddresses"></a>

```typescript
public readonly excludedEmailAddresses: string[];
```

- *Type:* string[]

List of email addresses for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#excluded_email_addresses PkiSecretBackendRootCert#excluded_email_addresses}

---

##### `excludedIpRanges`<sup>Optional</sup> <a name="excludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedIpRanges"></a>

```typescript
public readonly excludedIpRanges: string[];
```

- *Type:* string[]

List of IP ranges for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#excluded_ip_ranges PkiSecretBackendRootCert#excluded_ip_ranges}

---

##### `excludedUriDomains`<sup>Optional</sup> <a name="excludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.excludedUriDomains"></a>

```typescript
public readonly excludedUriDomains: string[];
```

- *Type:* string[]

List of URI domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#excluded_uri_domains PkiSecretBackendRootCert#excluded_uri_domains}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#format PkiSecretBackendRootCert#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#id PkiSecretBackendRootCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSans`<sup>Optional</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ipSans"></a>

```typescript
public readonly ipSans: string[];
```

- *Type:* string[]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#ip_sans PkiSecretBackendRootCert#ip_sans}

---

##### `issuerName`<sup>Optional</sup> <a name="issuerName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.issuerName"></a>

```typescript
public readonly issuerName: string;
```

- *Type:* string

Provides a name to the specified issuer.

The name must be unique across all issuers and not be the reserved value 'default'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#issuer_name PkiSecretBackendRootCert#issuer_name}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyBits"></a>

```typescript
public readonly keyBits: number;
```

- *Type:* number

The number of bits to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#key_bits PkiSecretBackendRootCert#key_bits}

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

When a new key is created with this request, optionally specifies the name for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#key_name PkiSecretBackendRootCert#key_name}

---

##### `keyRef`<sup>Optional</sup> <a name="keyRef" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyRef"></a>

```typescript
public readonly keyRef: string;
```

- *Type:* string

Specifies the key to use for generating this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#key_ref PkiSecretBackendRootCert#key_ref}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The desired key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#key_type PkiSecretBackendRootCert#key_type}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#locality PkiSecretBackendRootCert#locality}

---

##### `managedKeyId`<sup>Optional</sup> <a name="managedKeyId" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyId"></a>

```typescript
public readonly managedKeyId: string;
```

- *Type:* string

The ID of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#managed_key_id PkiSecretBackendRootCert#managed_key_id}

---

##### `managedKeyName`<sup>Optional</sup> <a name="managedKeyName" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.managedKeyName"></a>

```typescript
public readonly managedKeyName: string;
```

- *Type:* string

The name of the previously configured managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#managed_key_name PkiSecretBackendRootCert#managed_key_name}

---

##### `maxPathLength`<sup>Optional</sup> <a name="maxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.maxPathLength"></a>

```typescript
public readonly maxPathLength: number;
```

- *Type:* number

The maximum path length to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#max_path_length PkiSecretBackendRootCert#max_path_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#namespace PkiSecretBackendRootCert#namespace}

---

##### `notAfter`<sup>Optional</sup> <a name="notAfter" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#not_after PkiSecretBackendRootCert#not_after}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#organization PkiSecretBackendRootCert#organization}

---

##### `otherSans`<sup>Optional</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.otherSans"></a>

```typescript
public readonly otherSans: string[];
```

- *Type:* string[]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#other_sans PkiSecretBackendRootCert#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ou"></a>

```typescript
public readonly ou: string;
```

- *Type:* string

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#ou PkiSecretBackendRootCert#ou}

---

##### `permittedDnsDomains`<sup>Optional</sup> <a name="permittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedDnsDomains"></a>

```typescript
public readonly permittedDnsDomains: string[];
```

- *Type:* string[]

List of domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#permitted_dns_domains PkiSecretBackendRootCert#permitted_dns_domains}

---

##### `permittedEmailAddresses`<sup>Optional</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedEmailAddresses"></a>

```typescript
public readonly permittedEmailAddresses: string[];
```

- *Type:* string[]

List of email addresses for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#permitted_email_addresses PkiSecretBackendRootCert#permitted_email_addresses}

---

##### `permittedIpRanges`<sup>Optional</sup> <a name="permittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedIpRanges"></a>

```typescript
public readonly permittedIpRanges: string[];
```

- *Type:* string[]

List of IP ranges for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#permitted_ip_ranges PkiSecretBackendRootCert#permitted_ip_ranges}

---

##### `permittedUriDomains`<sup>Optional</sup> <a name="permittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.permittedUriDomains"></a>

```typescript
public readonly permittedUriDomains: string[];
```

- *Type:* string[]

List of URI domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#permitted_uri_domains PkiSecretBackendRootCert#permitted_uri_domains}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#postal_code PkiSecretBackendRootCert#postal_code}

---

##### `privateKeyFormat`<sup>Optional</sup> <a name="privateKeyFormat" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.privateKeyFormat"></a>

```typescript
public readonly privateKeyFormat: string;
```

- *Type:* string

The private key format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#private_key_format PkiSecretBackendRootCert#private_key_format}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#province PkiSecretBackendRootCert#province}

---

##### `signatureBits`<sup>Optional</sup> <a name="signatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.signatureBits"></a>

```typescript
public readonly signatureBits: number;
```

- *Type:* number

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#signature_bits PkiSecretBackendRootCert#signature_bits}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#street_address PkiSecretBackendRootCert#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#ttl PkiSecretBackendRootCert#ttl}

---

##### `uriSans`<sup>Optional</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendRootCert.PkiSecretBackendRootCertConfig.property.uriSans"></a>

```typescript
public readonly uriSans: string[];
```

- *Type:* string[]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.1.0/docs/resources/pki_secret_backend_root_cert#uri_sans PkiSecretBackendRootCert#uri_sans}

---



