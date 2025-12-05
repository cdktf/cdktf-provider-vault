# `pkiSecretBackendRootSignIntermediate` Submodule <a name="`pkiSecretBackendRootSignIntermediate` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRootSignIntermediate <a name="PkiSecretBackendRootSignIntermediate" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate vault_pki_secret_backend_root_sign_intermediate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer"></a>

```typescript
import { pkiSecretBackendRootSignIntermediate } from '@cdktf/provider-vault'

new pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate(scope: Construct, id: string, config: PkiSecretBackendRootSignIntermediateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig">PkiSecretBackendRootSignIntermediateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig">PkiSecretBackendRootSignIntermediateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetAltNames">resetAltNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludeCnFromSans">resetExcludeCnFromSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedDnsDomains">resetExcludedDnsDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedEmailAddresses">resetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedIpRanges">resetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedUriDomains">resetExcludedUriDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetIpSans">resetIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetIssuerRef">resetIssuerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetKeyUsage">resetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetMaxPathLength">resetMaxPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNotAfter">resetNotAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNotBeforeDuration">resetNotBeforeDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOtherSans">resetOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOu">resetOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedDnsDomains">resetPermittedDnsDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedEmailAddresses">resetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedIpRanges">resetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedUriDomains">resetPermittedUriDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetRevoke">resetRevoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetSignatureBits">resetSignatureBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetSkid">resetSkid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUriSans">resetUriSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUseCsrValues">resetUseCsrValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUsePss">resetUsePss</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAltNames` <a name="resetAltNames" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetAltNames"></a>

```typescript
public resetAltNames(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetExcludeCnFromSans` <a name="resetExcludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludeCnFromSans"></a>

```typescript
public resetExcludeCnFromSans(): void
```

##### `resetExcludedDnsDomains` <a name="resetExcludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedDnsDomains"></a>

```typescript
public resetExcludedDnsDomains(): void
```

##### `resetExcludedEmailAddresses` <a name="resetExcludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedEmailAddresses"></a>

```typescript
public resetExcludedEmailAddresses(): void
```

##### `resetExcludedIpRanges` <a name="resetExcludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedIpRanges"></a>

```typescript
public resetExcludedIpRanges(): void
```

##### `resetExcludedUriDomains` <a name="resetExcludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetExcludedUriDomains"></a>

```typescript
public resetExcludedUriDomains(): void
```

##### `resetFormat` <a name="resetFormat" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpSans` <a name="resetIpSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetIpSans"></a>

```typescript
public resetIpSans(): void
```

##### `resetIssuerRef` <a name="resetIssuerRef" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetIssuerRef"></a>

```typescript
public resetIssuerRef(): void
```

##### `resetKeyUsage` <a name="resetKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetKeyUsage"></a>

```typescript
public resetKeyUsage(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetMaxPathLength` <a name="resetMaxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetMaxPathLength"></a>

```typescript
public resetMaxPathLength(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNotAfter` <a name="resetNotAfter" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNotAfter"></a>

```typescript
public resetNotAfter(): void
```

##### `resetNotBeforeDuration` <a name="resetNotBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetNotBeforeDuration"></a>

```typescript
public resetNotBeforeDuration(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOtherSans` <a name="resetOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOtherSans"></a>

```typescript
public resetOtherSans(): void
```

##### `resetOu` <a name="resetOu" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetOu"></a>

```typescript
public resetOu(): void
```

##### `resetPermittedDnsDomains` <a name="resetPermittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedDnsDomains"></a>

```typescript
public resetPermittedDnsDomains(): void
```

##### `resetPermittedEmailAddresses` <a name="resetPermittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedEmailAddresses"></a>

```typescript
public resetPermittedEmailAddresses(): void
```

##### `resetPermittedIpRanges` <a name="resetPermittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedIpRanges"></a>

```typescript
public resetPermittedIpRanges(): void
```

##### `resetPermittedUriDomains` <a name="resetPermittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPermittedUriDomains"></a>

```typescript
public resetPermittedUriDomains(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetRevoke` <a name="resetRevoke" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetRevoke"></a>

```typescript
public resetRevoke(): void
```

##### `resetSignatureBits` <a name="resetSignatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetSignatureBits"></a>

```typescript
public resetSignatureBits(): void
```

##### `resetSkid` <a name="resetSkid" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetSkid"></a>

```typescript
public resetSkid(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetUriSans` <a name="resetUriSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUriSans"></a>

```typescript
public resetUriSans(): void
```

##### `resetUseCsrValues` <a name="resetUseCsrValues" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUseCsrValues"></a>

```typescript
public resetUseCsrValues(): void
```

##### `resetUsePss` <a name="resetUsePss" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.resetUsePss"></a>

```typescript
public resetUsePss(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendRootSignIntermediate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isConstruct"></a>

```typescript
import { pkiSecretBackendRootSignIntermediate } from '@cdktf/provider-vault'

pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformElement"></a>

```typescript
import { pkiSecretBackendRootSignIntermediate } from '@cdktf/provider-vault'

pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformResource"></a>

```typescript
import { pkiSecretBackendRootSignIntermediate } from '@cdktf/provider-vault'

pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendRootSignIntermediate } from '@cdktf/provider-vault'

pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendRootSignIntermediate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendRootSignIntermediate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendRootSignIntermediate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRootSignIntermediate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.caChain">caChain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.certificateBundle">certificateBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuingCa">issuingCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.serialNumber">serialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.altNamesInput">altNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.commonNameInput">commonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.countryInput">countryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.csrInput">csrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludeCnFromSansInput">excludeCnFromSansInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedDnsDomainsInput">excludedDnsDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedEmailAddressesInput">excludedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedIpRangesInput">excludedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedUriDomainsInput">excludedUriDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ipSansInput">ipSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuerRefInput">issuerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.keyUsageInput">keyUsageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.maxPathLengthInput">maxPathLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notAfterInput">notAfterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notBeforeDurationInput">notBeforeDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.otherSansInput">otherSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ouInput">ouInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedDnsDomainsInput">permittedDnsDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedEmailAddressesInput">permittedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedIpRangesInput">permittedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedUriDomainsInput">permittedUriDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provinceInput">provinceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.revokeInput">revokeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.signatureBitsInput">signatureBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.skidInput">skidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.streetAddressInput">streetAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.uriSansInput">uriSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.useCsrValuesInput">useCsrValuesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.usePssInput">usePssInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.altNames">altNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.commonName">commonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.country">country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.csr">csr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedDnsDomains">excludedDnsDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedIpRanges">excludedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedUriDomains">excludedUriDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ipSans">ipSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuerRef">issuerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.keyUsage">keyUsage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.maxPathLength">maxPathLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notAfter">notAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notBeforeDuration">notBeforeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.otherSans">otherSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ou">ou</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedDnsDomains">permittedDnsDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedIpRanges">permittedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedUriDomains">permittedUriDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.province">province</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.revoke">revoke</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.signatureBits">signatureBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.skid">skid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.streetAddress">streetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.uriSans">uriSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.useCsrValues">useCsrValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.usePss">usePss</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `caChain`<sup>Required</sup> <a name="caChain" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.caChain"></a>

```typescript
public readonly caChain: string[];
```

- *Type:* string[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificateBundle`<sup>Required</sup> <a name="certificateBundle" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.certificateBundle"></a>

```typescript
public readonly certificateBundle: string;
```

- *Type:* string

---

##### `issuingCa`<sup>Required</sup> <a name="issuingCa" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuingCa"></a>

```typescript
public readonly issuingCa: string;
```

- *Type:* string

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.serialNumber"></a>

```typescript
public readonly serialNumber: string;
```

- *Type:* string

---

##### `altNamesInput`<sup>Optional</sup> <a name="altNamesInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.altNamesInput"></a>

```typescript
public readonly altNamesInput: string[];
```

- *Type:* string[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.commonNameInput"></a>

```typescript
public readonly commonNameInput: string;
```

- *Type:* string

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.countryInput"></a>

```typescript
public readonly countryInput: string;
```

- *Type:* string

---

##### `csrInput`<sup>Optional</sup> <a name="csrInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.csrInput"></a>

```typescript
public readonly csrInput: string;
```

- *Type:* string

---

##### `excludeCnFromSansInput`<sup>Optional</sup> <a name="excludeCnFromSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludeCnFromSansInput"></a>

```typescript
public readonly excludeCnFromSansInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedDnsDomainsInput`<sup>Optional</sup> <a name="excludedDnsDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedDnsDomainsInput"></a>

```typescript
public readonly excludedDnsDomainsInput: string[];
```

- *Type:* string[]

---

##### `excludedEmailAddressesInput`<sup>Optional</sup> <a name="excludedEmailAddressesInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedEmailAddressesInput"></a>

```typescript
public readonly excludedEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `excludedIpRangesInput`<sup>Optional</sup> <a name="excludedIpRangesInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedIpRangesInput"></a>

```typescript
public readonly excludedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `excludedUriDomainsInput`<sup>Optional</sup> <a name="excludedUriDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedUriDomainsInput"></a>

```typescript
public readonly excludedUriDomainsInput: string[];
```

- *Type:* string[]

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipSansInput`<sup>Optional</sup> <a name="ipSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ipSansInput"></a>

```typescript
public readonly ipSansInput: string[];
```

- *Type:* string[]

---

##### `issuerRefInput`<sup>Optional</sup> <a name="issuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuerRefInput"></a>

```typescript
public readonly issuerRefInput: string;
```

- *Type:* string

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.keyUsageInput"></a>

```typescript
public readonly keyUsageInput: string[];
```

- *Type:* string[]

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `maxPathLengthInput`<sup>Optional</sup> <a name="maxPathLengthInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.maxPathLengthInput"></a>

```typescript
public readonly maxPathLengthInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `notAfterInput`<sup>Optional</sup> <a name="notAfterInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notAfterInput"></a>

```typescript
public readonly notAfterInput: string;
```

- *Type:* string

---

##### `notBeforeDurationInput`<sup>Optional</sup> <a name="notBeforeDurationInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notBeforeDurationInput"></a>

```typescript
public readonly notBeforeDurationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `otherSansInput`<sup>Optional</sup> <a name="otherSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.otherSansInput"></a>

```typescript
public readonly otherSansInput: string[];
```

- *Type:* string[]

---

##### `ouInput`<sup>Optional</sup> <a name="ouInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ouInput"></a>

```typescript
public readonly ouInput: string;
```

- *Type:* string

---

##### `permittedDnsDomainsInput`<sup>Optional</sup> <a name="permittedDnsDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedDnsDomainsInput"></a>

```typescript
public readonly permittedDnsDomainsInput: string[];
```

- *Type:* string[]

---

##### `permittedEmailAddressesInput`<sup>Optional</sup> <a name="permittedEmailAddressesInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedEmailAddressesInput"></a>

```typescript
public readonly permittedEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `permittedIpRangesInput`<sup>Optional</sup> <a name="permittedIpRangesInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedIpRangesInput"></a>

```typescript
public readonly permittedIpRangesInput: string[];
```

- *Type:* string[]

---

##### `permittedUriDomainsInput`<sup>Optional</sup> <a name="permittedUriDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedUriDomainsInput"></a>

```typescript
public readonly permittedUriDomainsInput: string[];
```

- *Type:* string[]

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.provinceInput"></a>

```typescript
public readonly provinceInput: string;
```

- *Type:* string

---

##### `revokeInput`<sup>Optional</sup> <a name="revokeInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.revokeInput"></a>

```typescript
public readonly revokeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `signatureBitsInput`<sup>Optional</sup> <a name="signatureBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.signatureBitsInput"></a>

```typescript
public readonly signatureBitsInput: number;
```

- *Type:* number

---

##### `skidInput`<sup>Optional</sup> <a name="skidInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.skidInput"></a>

```typescript
public readonly skidInput: string;
```

- *Type:* string

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `uriSansInput`<sup>Optional</sup> <a name="uriSansInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.uriSansInput"></a>

```typescript
public readonly uriSansInput: string[];
```

- *Type:* string[]

---

##### `useCsrValuesInput`<sup>Optional</sup> <a name="useCsrValuesInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.useCsrValuesInput"></a>

```typescript
public readonly useCsrValuesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usePssInput`<sup>Optional</sup> <a name="usePssInput" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.usePssInput"></a>

```typescript
public readonly usePssInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `altNames`<sup>Required</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.altNames"></a>

```typescript
public readonly altNames: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

---

##### `excludeCnFromSans`<sup>Required</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludeCnFromSans"></a>

```typescript
public readonly excludeCnFromSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `excludedDnsDomains`<sup>Required</sup> <a name="excludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedDnsDomains"></a>

```typescript
public readonly excludedDnsDomains: string[];
```

- *Type:* string[]

---

##### `excludedEmailAddresses`<sup>Required</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedEmailAddresses"></a>

```typescript
public readonly excludedEmailAddresses: string[];
```

- *Type:* string[]

---

##### `excludedIpRanges`<sup>Required</sup> <a name="excludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedIpRanges"></a>

```typescript
public readonly excludedIpRanges: string[];
```

- *Type:* string[]

---

##### `excludedUriDomains`<sup>Required</sup> <a name="excludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.excludedUriDomains"></a>

```typescript
public readonly excludedUriDomains: string[];
```

- *Type:* string[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipSans`<sup>Required</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ipSans"></a>

```typescript
public readonly ipSans: string[];
```

- *Type:* string[]

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.issuerRef"></a>

```typescript
public readonly issuerRef: string;
```

- *Type:* string

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.keyUsage"></a>

```typescript
public readonly keyUsage: string[];
```

- *Type:* string[]

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `maxPathLength`<sup>Required</sup> <a name="maxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.maxPathLength"></a>

```typescript
public readonly maxPathLength: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `notAfter`<sup>Required</sup> <a name="notAfter" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

---

##### `notBeforeDuration`<sup>Required</sup> <a name="notBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.notBeforeDuration"></a>

```typescript
public readonly notBeforeDuration: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `otherSans`<sup>Required</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.otherSans"></a>

```typescript
public readonly otherSans: string[];
```

- *Type:* string[]

---

##### `ou`<sup>Required</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ou"></a>

```typescript
public readonly ou: string;
```

- *Type:* string

---

##### `permittedDnsDomains`<sup>Required</sup> <a name="permittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedDnsDomains"></a>

```typescript
public readonly permittedDnsDomains: string[];
```

- *Type:* string[]

---

##### `permittedEmailAddresses`<sup>Required</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedEmailAddresses"></a>

```typescript
public readonly permittedEmailAddresses: string[];
```

- *Type:* string[]

---

##### `permittedIpRanges`<sup>Required</sup> <a name="permittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedIpRanges"></a>

```typescript
public readonly permittedIpRanges: string[];
```

- *Type:* string[]

---

##### `permittedUriDomains`<sup>Required</sup> <a name="permittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.permittedUriDomains"></a>

```typescript
public readonly permittedUriDomains: string[];
```

- *Type:* string[]

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

---

##### `revoke`<sup>Required</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.revoke"></a>

```typescript
public readonly revoke: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `signatureBits`<sup>Required</sup> <a name="signatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.signatureBits"></a>

```typescript
public readonly signatureBits: number;
```

- *Type:* number

---

##### `skid`<sup>Required</sup> <a name="skid" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.skid"></a>

```typescript
public readonly skid: string;
```

- *Type:* string

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `uriSans`<sup>Required</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.uriSans"></a>

```typescript
public readonly uriSans: string[];
```

- *Type:* string[]

---

##### `useCsrValues`<sup>Required</sup> <a name="useCsrValues" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.useCsrValues"></a>

```typescript
public readonly useCsrValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usePss`<sup>Required</sup> <a name="usePss" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.usePss"></a>

```typescript
public readonly usePss: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRootSignIntermediateConfig <a name="PkiSecretBackendRootSignIntermediateConfig" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.Initializer"></a>

```typescript
import { pkiSecretBackendRootSignIntermediate } from '@cdktf/provider-vault'

const pkiSecretBackendRootSignIntermediateConfig: pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.backend">backend</a></code> | <code>string</code> | The PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.commonName">commonName</a></code> | <code>string</code> | CN of intermediate to create. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.csr">csr</a></code> | <code>string</code> | The CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.altNames">altNames</a></code> | <code>string[]</code> | List of alternative names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.country">country</a></code> | <code>string</code> | The country. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludeCnFromSans">excludeCnFromSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to exclude CN from SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedDnsDomains">excludedDnsDomains</a></code> | <code>string[]</code> | List of domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>string[]</code> | List of email addresses for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedIpRanges">excludedIpRanges</a></code> | <code>string[]</code> | List of IP ranges for which certificates are NOT allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedUriDomains">excludedUriDomains</a></code> | <code>string[]</code> | List of URI domains for which certificates are not allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.format">format</a></code> | <code>string</code> | The format of data. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#id PkiSecretBackendRootSignIntermediate#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ipSans">ipSans</a></code> | <code>string[]</code> | List of alternative IPs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.issuerRef">issuerRef</a></code> | <code>string</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.keyUsage">keyUsage</a></code> | <code>string[]</code> | Specify the key usages to be added to the existing set of key usages ("CRL", "CertSign") on the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.locality">locality</a></code> | <code>string</code> | The locality. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.maxPathLength">maxPathLength</a></code> | <code>number</code> | The maximum path length to encode in the generated certificate. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.notAfter">notAfter</a></code> | <code>string</code> | Set the Not After field of the certificate with specified date value. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.notBeforeDuration">notBeforeDuration</a></code> | <code>string</code> | Specifies the duration by which to backdate the NotBefore property. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.organization">organization</a></code> | <code>string</code> | The organization. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.otherSans">otherSans</a></code> | <code>string[]</code> | List of other SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ou">ou</a></code> | <code>string</code> | The organization unit. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedDnsDomains">permittedDnsDomains</a></code> | <code>string[]</code> | List of domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>string[]</code> | List of email addresses for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedIpRanges">permittedIpRanges</a></code> | <code>string[]</code> | List of IP ranges for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedUriDomains">permittedUriDomains</a></code> | <code>string[]</code> | List of URI domains for which certificates are allowed to be issued. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.postalCode">postalCode</a></code> | <code>string</code> | The postal code. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.province">province</a></code> | <code>string</code> | The province. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.revoke">revoke</a></code> | <code>boolean \| cdktf.IResolvable</code> | Revoke the certificate upon resource destruction. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.signatureBits">signatureBits</a></code> | <code>number</code> | The number of bits to use in the signature algorithm. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.skid">skid</a></code> | <code>string</code> | Value for the Subject Key Identifier field   (RFC 5280 Section 4.2.1.2). Specified as a string in hex format. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.streetAddress">streetAddress</a></code> | <code>string</code> | The street address. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ttl">ttl</a></code> | <code>string</code> | Time to live. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.uriSans">uriSans</a></code> | <code>string[]</code> | List of alternative URIs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.useCsrValues">useCsrValues</a></code> | <code>boolean \| cdktf.IResolvable</code> | Preserve CSR values. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.usePss">usePss</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether or not to use PSS signatures   over PKCS#1v1.5 signatures when a RSA-type issuer is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#backend PkiSecretBackendRootSignIntermediate#backend}

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.commonName"></a>

```typescript
public readonly commonName: string;
```

- *Type:* string

CN of intermediate to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#common_name PkiSecretBackendRootSignIntermediate#common_name}

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.csr"></a>

```typescript
public readonly csr: string;
```

- *Type:* string

The CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#csr PkiSecretBackendRootSignIntermediate#csr}

---

##### `altNames`<sup>Optional</sup> <a name="altNames" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.altNames"></a>

```typescript
public readonly altNames: string[];
```

- *Type:* string[]

List of alternative names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#alt_names PkiSecretBackendRootSignIntermediate#alt_names}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.country"></a>

```typescript
public readonly country: string;
```

- *Type:* string

The country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#country PkiSecretBackendRootSignIntermediate#country}

---

##### `excludeCnFromSans`<sup>Optional</sup> <a name="excludeCnFromSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludeCnFromSans"></a>

```typescript
public readonly excludeCnFromSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to exclude CN from SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#exclude_cn_from_sans PkiSecretBackendRootSignIntermediate#exclude_cn_from_sans}

---

##### `excludedDnsDomains`<sup>Optional</sup> <a name="excludedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedDnsDomains"></a>

```typescript
public readonly excludedDnsDomains: string[];
```

- *Type:* string[]

List of domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_dns_domains PkiSecretBackendRootSignIntermediate#excluded_dns_domains}

---

##### `excludedEmailAddresses`<sup>Optional</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedEmailAddresses"></a>

```typescript
public readonly excludedEmailAddresses: string[];
```

- *Type:* string[]

List of email addresses for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_email_addresses PkiSecretBackendRootSignIntermediate#excluded_email_addresses}

---

##### `excludedIpRanges`<sup>Optional</sup> <a name="excludedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedIpRanges"></a>

```typescript
public readonly excludedIpRanges: string[];
```

- *Type:* string[]

List of IP ranges for which certificates are NOT allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_ip_ranges PkiSecretBackendRootSignIntermediate#excluded_ip_ranges}

---

##### `excludedUriDomains`<sup>Optional</sup> <a name="excludedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.excludedUriDomains"></a>

```typescript
public readonly excludedUriDomains: string[];
```

- *Type:* string[]

List of URI domains for which certificates are not allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#excluded_uri_domains PkiSecretBackendRootSignIntermediate#excluded_uri_domains}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format of data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#format PkiSecretBackendRootSignIntermediate#format}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#id PkiSecretBackendRootSignIntermediate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipSans`<sup>Optional</sup> <a name="ipSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ipSans"></a>

```typescript
public readonly ipSans: string[];
```

- *Type:* string[]

List of alternative IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#ip_sans PkiSecretBackendRootSignIntermediate#ip_sans}

---

##### `issuerRef`<sup>Optional</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.issuerRef"></a>

```typescript
public readonly issuerRef: string;
```

- *Type:* string

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#issuer_ref PkiSecretBackendRootSignIntermediate#issuer_ref}

---

##### `keyUsage`<sup>Optional</sup> <a name="keyUsage" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.keyUsage"></a>

```typescript
public readonly keyUsage: string[];
```

- *Type:* string[]

Specify the key usages to be added to the existing set of key usages ("CRL", "CertSign") on the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#key_usage PkiSecretBackendRootSignIntermediate#key_usage}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

The locality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#locality PkiSecretBackendRootSignIntermediate#locality}

---

##### `maxPathLength`<sup>Optional</sup> <a name="maxPathLength" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.maxPathLength"></a>

```typescript
public readonly maxPathLength: number;
```

- *Type:* number

The maximum path length to encode in the generated certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#max_path_length PkiSecretBackendRootSignIntermediate#max_path_length}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#namespace PkiSecretBackendRootSignIntermediate#namespace}

---

##### `notAfter`<sup>Optional</sup> <a name="notAfter" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.notAfter"></a>

```typescript
public readonly notAfter: string;
```

- *Type:* string

Set the Not After field of the certificate with specified date value.

The value format should be given in UTC format YYYY-MM-ddTHH:MM:SSZ. Supports the Y10K end date for IEEE 802.1AR-2018 standard devices, 9999-12-31T23:59:59Z.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#not_after PkiSecretBackendRootSignIntermediate#not_after}

---

##### `notBeforeDuration`<sup>Optional</sup> <a name="notBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.notBeforeDuration"></a>

```typescript
public readonly notBeforeDuration: string;
```

- *Type:* string

Specifies the duration by which to backdate the NotBefore property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#not_before_duration PkiSecretBackendRootSignIntermediate#not_before_duration}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#organization PkiSecretBackendRootSignIntermediate#organization}

---

##### `otherSans`<sup>Optional</sup> <a name="otherSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.otherSans"></a>

```typescript
public readonly otherSans: string[];
```

- *Type:* string[]

List of other SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#other_sans PkiSecretBackendRootSignIntermediate#other_sans}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ou"></a>

```typescript
public readonly ou: string;
```

- *Type:* string

The organization unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#ou PkiSecretBackendRootSignIntermediate#ou}

---

##### `permittedDnsDomains`<sup>Optional</sup> <a name="permittedDnsDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedDnsDomains"></a>

```typescript
public readonly permittedDnsDomains: string[];
```

- *Type:* string[]

List of domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_dns_domains PkiSecretBackendRootSignIntermediate#permitted_dns_domains}

---

##### `permittedEmailAddresses`<sup>Optional</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedEmailAddresses"></a>

```typescript
public readonly permittedEmailAddresses: string[];
```

- *Type:* string[]

List of email addresses for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_email_addresses PkiSecretBackendRootSignIntermediate#permitted_email_addresses}

---

##### `permittedIpRanges`<sup>Optional</sup> <a name="permittedIpRanges" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedIpRanges"></a>

```typescript
public readonly permittedIpRanges: string[];
```

- *Type:* string[]

List of IP ranges for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_ip_ranges PkiSecretBackendRootSignIntermediate#permitted_ip_ranges}

---

##### `permittedUriDomains`<sup>Optional</sup> <a name="permittedUriDomains" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.permittedUriDomains"></a>

```typescript
public readonly permittedUriDomains: string[];
```

- *Type:* string[]

List of URI domains for which certificates are allowed to be issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#permitted_uri_domains PkiSecretBackendRootSignIntermediate#permitted_uri_domains}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

The postal code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#postal_code PkiSecretBackendRootSignIntermediate#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.province"></a>

```typescript
public readonly province: string;
```

- *Type:* string

The province.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#province PkiSecretBackendRootSignIntermediate#province}

---

##### `revoke`<sup>Optional</sup> <a name="revoke" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.revoke"></a>

```typescript
public readonly revoke: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Revoke the certificate upon resource destruction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#revoke PkiSecretBackendRootSignIntermediate#revoke}

---

##### `signatureBits`<sup>Optional</sup> <a name="signatureBits" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.signatureBits"></a>

```typescript
public readonly signatureBits: number;
```

- *Type:* number

The number of bits to use in the signature algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#signature_bits PkiSecretBackendRootSignIntermediate#signature_bits}

---

##### `skid`<sup>Optional</sup> <a name="skid" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.skid"></a>

```typescript
public readonly skid: string;
```

- *Type:* string

Value for the Subject Key Identifier field   (RFC 5280 Section 4.2.1.2). Specified as a string in hex format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#skid PkiSecretBackendRootSignIntermediate#skid}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.streetAddress"></a>

```typescript
public readonly streetAddress: string;
```

- *Type:* string

The street address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#street_address PkiSecretBackendRootSignIntermediate#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Time to live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#ttl PkiSecretBackendRootSignIntermediate#ttl}

---

##### `uriSans`<sup>Optional</sup> <a name="uriSans" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.uriSans"></a>

```typescript
public readonly uriSans: string[];
```

- *Type:* string[]

List of alternative URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#uri_sans PkiSecretBackendRootSignIntermediate#uri_sans}

---

##### `useCsrValues`<sup>Optional</sup> <a name="useCsrValues" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.useCsrValues"></a>

```typescript
public readonly useCsrValues: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Preserve CSR values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#use_csr_values PkiSecretBackendRootSignIntermediate#use_csr_values}

---

##### `usePss`<sup>Optional</sup> <a name="usePss" id="@cdktf/provider-vault.pkiSecretBackendRootSignIntermediate.PkiSecretBackendRootSignIntermediateConfig.property.usePss"></a>

```typescript
public readonly usePss: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether or not to use PSS signatures   over PKCS#1v1.5 signatures when a RSA-type issuer is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.6.0/docs/resources/pki_secret_backend_root_sign_intermediate#use_pss PkiSecretBackendRootSignIntermediate#use_pss}

---



