# `pkiSecretBackendRole` Submodule <a name="`pkiSecretBackendRole` Submodule" id="@cdktf/provider-vault.pkiSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PkiSecretBackendRole <a name="PkiSecretBackendRole" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role vault_pki_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer"></a>

```typescript
import { pkiSecretBackendRole } from '@cdktf/provider-vault'

new pkiSecretBackendRole.PkiSecretBackendRole(scope: Construct, id: string, config: PkiSecretBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig">PkiSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig">PkiSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier">putPolicyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowAnyName">resetAllowAnyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowBareDomains">resetAllowBareDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomains">resetAllowedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomainsTemplate">resetAllowedDomainsTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedOtherSans">resetAllowedOtherSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedSerialNumbers">resetAllowedSerialNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSans">resetAllowedUriSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSansTemplate">resetAllowedUriSansTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUserIds">resetAllowedUserIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowGlobDomains">resetAllowGlobDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowIpSans">resetAllowIpSans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowLocalhost">resetAllowLocalhost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowSubdomains">resetAllowSubdomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowWildcardCertificates">resetAllowWildcardCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetBasicConstraintsValidForNonCa">resetBasicConstraintsValidForNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetClientFlag">resetClientFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCodeSigningFlag">resetCodeSigningFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEmailProtectionFlag">resetEmailProtectionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEnforceHostnames">resetEnforceHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsage">resetExtKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetGenerateLease">resetGenerateLease</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetIssuerRef">resetIssuerRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyBits">resetKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyUsage">resetKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStore">resetNoStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotBeforeDuration">resetNotBeforeDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOu">resetOu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifier">resetPolicyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifiers">resetPolicyIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetRequireCn">resetRequireCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetServerFlag">resetServerFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrCommonName">resetUseCsrCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrSans">resetUseCsrSans</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPolicyIdentifier` <a name="putPolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier"></a>

```typescript
public putPolicyIdentifier(value: IResolvable | PkiSecretBackendRolePolicyIdentifier[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.putPolicyIdentifier.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>[]

---

##### `resetAllowAnyName` <a name="resetAllowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowAnyName"></a>

```typescript
public resetAllowAnyName(): void
```

##### `resetAllowBareDomains` <a name="resetAllowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowBareDomains"></a>

```typescript
public resetAllowBareDomains(): void
```

##### `resetAllowedDomains` <a name="resetAllowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomains"></a>

```typescript
public resetAllowedDomains(): void
```

##### `resetAllowedDomainsTemplate` <a name="resetAllowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedDomainsTemplate"></a>

```typescript
public resetAllowedDomainsTemplate(): void
```

##### `resetAllowedOtherSans` <a name="resetAllowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedOtherSans"></a>

```typescript
public resetAllowedOtherSans(): void
```

##### `resetAllowedSerialNumbers` <a name="resetAllowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedSerialNumbers"></a>

```typescript
public resetAllowedSerialNumbers(): void
```

##### `resetAllowedUriSans` <a name="resetAllowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSans"></a>

```typescript
public resetAllowedUriSans(): void
```

##### `resetAllowedUriSansTemplate` <a name="resetAllowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUriSansTemplate"></a>

```typescript
public resetAllowedUriSansTemplate(): void
```

##### `resetAllowedUserIds` <a name="resetAllowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowedUserIds"></a>

```typescript
public resetAllowedUserIds(): void
```

##### `resetAllowGlobDomains` <a name="resetAllowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowGlobDomains"></a>

```typescript
public resetAllowGlobDomains(): void
```

##### `resetAllowIpSans` <a name="resetAllowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowIpSans"></a>

```typescript
public resetAllowIpSans(): void
```

##### `resetAllowLocalhost` <a name="resetAllowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowLocalhost"></a>

```typescript
public resetAllowLocalhost(): void
```

##### `resetAllowSubdomains` <a name="resetAllowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowSubdomains"></a>

```typescript
public resetAllowSubdomains(): void
```

##### `resetAllowWildcardCertificates` <a name="resetAllowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetAllowWildcardCertificates"></a>

```typescript
public resetAllowWildcardCertificates(): void
```

##### `resetBasicConstraintsValidForNonCa` <a name="resetBasicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetBasicConstraintsValidForNonCa"></a>

```typescript
public resetBasicConstraintsValidForNonCa(): void
```

##### `resetClientFlag` <a name="resetClientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetClientFlag"></a>

```typescript
public resetClientFlag(): void
```

##### `resetCodeSigningFlag` <a name="resetCodeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCodeSigningFlag"></a>

```typescript
public resetCodeSigningFlag(): void
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetCountry"></a>

```typescript
public resetCountry(): void
```

##### `resetEmailProtectionFlag` <a name="resetEmailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEmailProtectionFlag"></a>

```typescript
public resetEmailProtectionFlag(): void
```

##### `resetEnforceHostnames` <a name="resetEnforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetEnforceHostnames"></a>

```typescript
public resetEnforceHostnames(): void
```

##### `resetExtKeyUsage` <a name="resetExtKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetExtKeyUsage"></a>

```typescript
public resetExtKeyUsage(): void
```

##### `resetGenerateLease` <a name="resetGenerateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetGenerateLease"></a>

```typescript
public resetGenerateLease(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuerRef` <a name="resetIssuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetIssuerRef"></a>

```typescript
public resetIssuerRef(): void
```

##### `resetKeyBits` <a name="resetKeyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyBits"></a>

```typescript
public resetKeyBits(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetKeyUsage` <a name="resetKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetKeyUsage"></a>

```typescript
public resetKeyUsage(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNoStore` <a name="resetNoStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNoStore"></a>

```typescript
public resetNoStore(): void
```

##### `resetNotBeforeDuration` <a name="resetNotBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetNotBeforeDuration"></a>

```typescript
public resetNotBeforeDuration(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOu` <a name="resetOu" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetOu"></a>

```typescript
public resetOu(): void
```

##### `resetPolicyIdentifier` <a name="resetPolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifier"></a>

```typescript
public resetPolicyIdentifier(): void
```

##### `resetPolicyIdentifiers` <a name="resetPolicyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPolicyIdentifiers"></a>

```typescript
public resetPolicyIdentifiers(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetProvince"></a>

```typescript
public resetProvince(): void
```

##### `resetRequireCn` <a name="resetRequireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetRequireCn"></a>

```typescript
public resetRequireCn(): void
```

##### `resetServerFlag` <a name="resetServerFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetServerFlag"></a>

```typescript
public resetServerFlag(): void
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetStreetAddress"></a>

```typescript
public resetStreetAddress(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetUseCsrCommonName` <a name="resetUseCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrCommonName"></a>

```typescript
public resetUseCsrCommonName(): void
```

##### `resetUseCsrSans` <a name="resetUseCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.resetUseCsrSans"></a>

```typescript
public resetUseCsrSans(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PkiSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct"></a>

```typescript
import { pkiSecretBackendRole } from '@cdktf/provider-vault'

pkiSecretBackendRole.PkiSecretBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement"></a>

```typescript
import { pkiSecretBackendRole } from '@cdktf/provider-vault'

pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource"></a>

```typescript
import { pkiSecretBackendRole } from '@cdktf/provider-vault'

pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport"></a>

```typescript
import { pkiSecretBackendRole } from '@cdktf/provider-vault'

pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PkiSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PkiSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PkiSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PkiSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifier">policyIdentifier</a></code> | <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList">PkiSecretBackendRolePolicyIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyNameInput">allowAnyNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomainsInput">allowBareDomainsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsInput">allowedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplateInput">allowedDomainsTemplateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSansInput">allowedOtherSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbersInput">allowedSerialNumbersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansInput">allowedUriSansInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplateInput">allowedUriSansTemplateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIdsInput">allowedUserIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomainsInput">allowGlobDomainsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSansInput">allowIpSansInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhostInput">allowLocalhostInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomainsInput">allowSubdomainsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificatesInput">allowWildcardCertificatesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCaInput">basicConstraintsValidForNonCaInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlagInput">clientFlagInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlagInput">codeSigningFlagInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.countryInput">countryInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlagInput">emailProtectionFlagInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnamesInput">enforceHostnamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageInput">extKeyUsageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLeaseInput">generateLeaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRefInput">issuerRefInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBitsInput">keyBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsageInput">keyUsageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.localityInput">localityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtlInput">maxTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreInput">noStoreInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDurationInput">notBeforeDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organizationInput">organizationInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ouInput">ouInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifierInput">policyIdentifierInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiersInput">policyIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCodeInput">postalCodeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provinceInput">provinceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCnInput">requireCnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlagInput">serverFlagInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddressInput">streetAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonNameInput">useCsrCommonNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSansInput">useCsrSansInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyName">allowAnyName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomains">allowBareDomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplate">allowedDomainsTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSans">allowedOtherSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbers">allowedSerialNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSans">allowedUriSans</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplate">allowedUriSansTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIds">allowedUserIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomains">allowGlobDomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSans">allowIpSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhost">allowLocalhost</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomains">allowSubdomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificates">allowWildcardCertificates</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCa">basicConstraintsValidForNonCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlag">clientFlag</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlag">codeSigningFlag</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.country">country</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlag">emailProtectionFlag</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnames">enforceHostnames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsage">extKeyUsage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLease">generateLease</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRef">issuerRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBits">keyBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsage">keyUsage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.locality">locality</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtl">maxTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStore">noStore</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDuration">notBeforeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organization">organization</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ou">ou</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiers">policyIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCode">postalCode</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.province">province</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCn">requireCn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlag">serverFlag</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddress">streetAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonName">useCsrCommonName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSans">useCsrSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyIdentifier`<sup>Required</sup> <a name="policyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifier"></a>

```typescript
public readonly policyIdentifier: PkiSecretBackendRolePolicyIdentifierList;
```

- *Type:* <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList">PkiSecretBackendRolePolicyIdentifierList</a>

---

##### `allowAnyNameInput`<sup>Optional</sup> <a name="allowAnyNameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyNameInput"></a>

```typescript
public readonly allowAnyNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowBareDomainsInput`<sup>Optional</sup> <a name="allowBareDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomainsInput"></a>

```typescript
public readonly allowBareDomainsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDomainsInput`<sup>Optional</sup> <a name="allowedDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsInput"></a>

```typescript
public readonly allowedDomainsInput: string[];
```

- *Type:* string[]

---

##### `allowedDomainsTemplateInput`<sup>Optional</sup> <a name="allowedDomainsTemplateInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplateInput"></a>

```typescript
public readonly allowedDomainsTemplateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOtherSansInput`<sup>Optional</sup> <a name="allowedOtherSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSansInput"></a>

```typescript
public readonly allowedOtherSansInput: string[];
```

- *Type:* string[]

---

##### `allowedSerialNumbersInput`<sup>Optional</sup> <a name="allowedSerialNumbersInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbersInput"></a>

```typescript
public readonly allowedSerialNumbersInput: string[];
```

- *Type:* string[]

---

##### `allowedUriSansInput`<sup>Optional</sup> <a name="allowedUriSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansInput"></a>

```typescript
public readonly allowedUriSansInput: string[];
```

- *Type:* string[]

---

##### `allowedUriSansTemplateInput`<sup>Optional</sup> <a name="allowedUriSansTemplateInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplateInput"></a>

```typescript
public readonly allowedUriSansTemplateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedUserIdsInput`<sup>Optional</sup> <a name="allowedUserIdsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIdsInput"></a>

```typescript
public readonly allowedUserIdsInput: string[];
```

- *Type:* string[]

---

##### `allowGlobDomainsInput`<sup>Optional</sup> <a name="allowGlobDomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomainsInput"></a>

```typescript
public readonly allowGlobDomainsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowIpSansInput`<sup>Optional</sup> <a name="allowIpSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSansInput"></a>

```typescript
public readonly allowIpSansInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowLocalhostInput`<sup>Optional</sup> <a name="allowLocalhostInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhostInput"></a>

```typescript
public readonly allowLocalhostInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSubdomainsInput`<sup>Optional</sup> <a name="allowSubdomainsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomainsInput"></a>

```typescript
public readonly allowSubdomainsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowWildcardCertificatesInput`<sup>Optional</sup> <a name="allowWildcardCertificatesInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificatesInput"></a>

```typescript
public readonly allowWildcardCertificatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `basicConstraintsValidForNonCaInput`<sup>Optional</sup> <a name="basicConstraintsValidForNonCaInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCaInput"></a>

```typescript
public readonly basicConstraintsValidForNonCaInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientFlagInput`<sup>Optional</sup> <a name="clientFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlagInput"></a>

```typescript
public readonly clientFlagInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `codeSigningFlagInput`<sup>Optional</sup> <a name="codeSigningFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlagInput"></a>

```typescript
public readonly codeSigningFlagInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.countryInput"></a>

```typescript
public readonly countryInput: string[];
```

- *Type:* string[]

---

##### `emailProtectionFlagInput`<sup>Optional</sup> <a name="emailProtectionFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlagInput"></a>

```typescript
public readonly emailProtectionFlagInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceHostnamesInput`<sup>Optional</sup> <a name="enforceHostnamesInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnamesInput"></a>

```typescript
public readonly enforceHostnamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extKeyUsageInput`<sup>Optional</sup> <a name="extKeyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsageInput"></a>

```typescript
public readonly extKeyUsageInput: string[];
```

- *Type:* string[]

---

##### `generateLeaseInput`<sup>Optional</sup> <a name="generateLeaseInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLeaseInput"></a>

```typescript
public readonly generateLeaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerRefInput`<sup>Optional</sup> <a name="issuerRefInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRefInput"></a>

```typescript
public readonly issuerRefInput: string;
```

- *Type:* string

---

##### `keyBitsInput`<sup>Optional</sup> <a name="keyBitsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBitsInput"></a>

```typescript
public readonly keyBitsInput: number;
```

- *Type:* number

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsageInput"></a>

```typescript
public readonly keyUsageInput: string[];
```

- *Type:* string[]

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.localityInput"></a>

```typescript
public readonly localityInput: string[];
```

- *Type:* string[]

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `noStoreInput`<sup>Optional</sup> <a name="noStoreInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStoreInput"></a>

```typescript
public readonly noStoreInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notBeforeDurationInput`<sup>Optional</sup> <a name="notBeforeDurationInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDurationInput"></a>

```typescript
public readonly notBeforeDurationInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organizationInput"></a>

```typescript
public readonly organizationInput: string[];
```

- *Type:* string[]

---

##### `ouInput`<sup>Optional</sup> <a name="ouInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ouInput"></a>

```typescript
public readonly ouInput: string[];
```

- *Type:* string[]

---

##### `policyIdentifierInput`<sup>Optional</sup> <a name="policyIdentifierInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifierInput"></a>

```typescript
public readonly policyIdentifierInput: IResolvable | PkiSecretBackendRolePolicyIdentifier[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>[]

---

##### `policyIdentifiersInput`<sup>Optional</sup> <a name="policyIdentifiersInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiersInput"></a>

```typescript
public readonly policyIdentifiersInput: string[];
```

- *Type:* string[]

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string[];
```

- *Type:* string[]

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.provinceInput"></a>

```typescript
public readonly provinceInput: string[];
```

- *Type:* string[]

---

##### `requireCnInput`<sup>Optional</sup> <a name="requireCnInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCnInput"></a>

```typescript
public readonly requireCnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverFlagInput`<sup>Optional</sup> <a name="serverFlagInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlagInput"></a>

```typescript
public readonly serverFlagInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddressInput"></a>

```typescript
public readonly streetAddressInput: string[];
```

- *Type:* string[]

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `useCsrCommonNameInput`<sup>Optional</sup> <a name="useCsrCommonNameInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonNameInput"></a>

```typescript
public readonly useCsrCommonNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useCsrSansInput`<sup>Optional</sup> <a name="useCsrSansInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSansInput"></a>

```typescript
public readonly useCsrSansInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowAnyName`<sup>Required</sup> <a name="allowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowAnyName"></a>

```typescript
public readonly allowAnyName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowBareDomains`<sup>Required</sup> <a name="allowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowBareDomains"></a>

```typescript
public readonly allowBareDomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedDomains`<sup>Required</sup> <a name="allowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]

---

##### `allowedDomainsTemplate`<sup>Required</sup> <a name="allowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedDomainsTemplate"></a>

```typescript
public readonly allowedDomainsTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedOtherSans`<sup>Required</sup> <a name="allowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedOtherSans"></a>

```typescript
public readonly allowedOtherSans: string[];
```

- *Type:* string[]

---

##### `allowedSerialNumbers`<sup>Required</sup> <a name="allowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedSerialNumbers"></a>

```typescript
public readonly allowedSerialNumbers: string[];
```

- *Type:* string[]

---

##### `allowedUriSans`<sup>Required</sup> <a name="allowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSans"></a>

```typescript
public readonly allowedUriSans: string[];
```

- *Type:* string[]

---

##### `allowedUriSansTemplate`<sup>Required</sup> <a name="allowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUriSansTemplate"></a>

```typescript
public readonly allowedUriSansTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedUserIds`<sup>Required</sup> <a name="allowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowedUserIds"></a>

```typescript
public readonly allowedUserIds: string[];
```

- *Type:* string[]

---

##### `allowGlobDomains`<sup>Required</sup> <a name="allowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowGlobDomains"></a>

```typescript
public readonly allowGlobDomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowIpSans`<sup>Required</sup> <a name="allowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowIpSans"></a>

```typescript
public readonly allowIpSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowLocalhost`<sup>Required</sup> <a name="allowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowLocalhost"></a>

```typescript
public readonly allowLocalhost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowSubdomains`<sup>Required</sup> <a name="allowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowSubdomains"></a>

```typescript
public readonly allowSubdomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowWildcardCertificates`<sup>Required</sup> <a name="allowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.allowWildcardCertificates"></a>

```typescript
public readonly allowWildcardCertificates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `basicConstraintsValidForNonCa`<sup>Required</sup> <a name="basicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.basicConstraintsValidForNonCa"></a>

```typescript
public readonly basicConstraintsValidForNonCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientFlag`<sup>Required</sup> <a name="clientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.clientFlag"></a>

```typescript
public readonly clientFlag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `codeSigningFlag`<sup>Required</sup> <a name="codeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.codeSigningFlag"></a>

```typescript
public readonly codeSigningFlag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.country"></a>

```typescript
public readonly country: string[];
```

- *Type:* string[]

---

##### `emailProtectionFlag`<sup>Required</sup> <a name="emailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.emailProtectionFlag"></a>

```typescript
public readonly emailProtectionFlag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceHostnames`<sup>Required</sup> <a name="enforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.enforceHostnames"></a>

```typescript
public readonly enforceHostnames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `extKeyUsage`<sup>Required</sup> <a name="extKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.extKeyUsage"></a>

```typescript
public readonly extKeyUsage: string[];
```

- *Type:* string[]

---

##### `generateLease`<sup>Required</sup> <a name="generateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.generateLease"></a>

```typescript
public readonly generateLease: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerRef`<sup>Required</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.issuerRef"></a>

```typescript
public readonly issuerRef: string;
```

- *Type:* string

---

##### `keyBits`<sup>Required</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyBits"></a>

```typescript
public readonly keyBits: number;
```

- *Type:* number

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.keyUsage"></a>

```typescript
public readonly keyUsage: string[];
```

- *Type:* string[]

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.locality"></a>

```typescript
public readonly locality: string[];
```

- *Type:* string[]

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `noStore`<sup>Required</sup> <a name="noStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.noStore"></a>

```typescript
public readonly noStore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `notBeforeDuration`<sup>Required</sup> <a name="notBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.notBeforeDuration"></a>

```typescript
public readonly notBeforeDuration: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.organization"></a>

```typescript
public readonly organization: string[];
```

- *Type:* string[]

---

##### `ou`<sup>Required</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ou"></a>

```typescript
public readonly ou: string[];
```

- *Type:* string[]

---

##### `policyIdentifiers`<sup>Required</sup> <a name="policyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.policyIdentifiers"></a>

```typescript
public readonly policyIdentifiers: string[];
```

- *Type:* string[]

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.postalCode"></a>

```typescript
public readonly postalCode: string[];
```

- *Type:* string[]

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.province"></a>

```typescript
public readonly province: string[];
```

- *Type:* string[]

---

##### `requireCn`<sup>Required</sup> <a name="requireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.requireCn"></a>

```typescript
public readonly requireCn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serverFlag`<sup>Required</sup> <a name="serverFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.serverFlag"></a>

```typescript
public readonly serverFlag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.streetAddress"></a>

```typescript
public readonly streetAddress: string[];
```

- *Type:* string[]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `useCsrCommonName`<sup>Required</sup> <a name="useCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrCommonName"></a>

```typescript
public readonly useCsrCommonName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useCsrSans`<sup>Required</sup> <a name="useCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.useCsrSans"></a>

```typescript
public readonly useCsrSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PkiSecretBackendRoleConfig <a name="PkiSecretBackendRoleConfig" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.Initializer"></a>

```typescript
import { pkiSecretBackendRole } from '@cdktf/provider-vault'

const pkiSecretBackendRoleConfig: pkiSecretBackendRole.PkiSecretBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | The path of the PKI secret backend the resource belongs to. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.name">name</a></code> | <code>string</code> | Unique name for the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowAnyName">allowAnyName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to allow any name. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowBareDomains">allowBareDomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to allow certificates matching the actual domain. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomains">allowedDomains</a></code> | <code>string[]</code> | The domains of the role. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomainsTemplate">allowedDomainsTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedOtherSans">allowedOtherSans</a></code> | <code>string[]</code> | Defines allowed custom SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedSerialNumbers">allowedSerialNumbers</a></code> | <code>string[]</code> | Defines allowed Subject serial numbers. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSans">allowedUriSans</a></code> | <code>string[]</code> | Defines allowed URI SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSansTemplate">allowedUriSansTemplate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUserIds">allowedUserIds</a></code> | <code>string[]</code> | The allowed User ID's. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowGlobDomains">allowGlobDomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to allow names containing glob patterns. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowIpSans">allowIpSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to allow IP SANs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowLocalhost">allowLocalhost</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to allow certificates for localhost. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowSubdomains">allowSubdomains</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to allow certificates matching subdomains. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowWildcardCertificates">allowWildcardCertificates</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to allow wildcard certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.basicConstraintsValidForNonCa">basicConstraintsValidForNonCa</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to mark basic constraints valid when issuing non-CA certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.clientFlag">clientFlag</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to specify certificates for client use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.codeSigningFlag">codeSigningFlag</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to specify certificates for code signing use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.country">country</a></code> | <code>string[]</code> | The country of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.emailProtectionFlag">emailProtectionFlag</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to specify certificates for email protection use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.enforceHostnames">enforceHostnames</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to allow only valid host names. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsage">extKeyUsage</a></code> | <code>string[]</code> | Specify the allowed extended key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.generateLease">generateLease</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to generate leases with certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.issuerRef">issuerRef</a></code> | <code>string</code> | Specifies the default issuer of this request. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyBits">keyBits</a></code> | <code>number</code> | The number of bits of generated keys. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyType">keyType</a></code> | <code>string</code> | The generated key type. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyUsage">keyUsage</a></code> | <code>string[]</code> | Specify the allowed key usage constraint on issued certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.locality">locality</a></code> | <code>string[]</code> | The locality of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.maxTtl">maxTtl</a></code> | <code>string</code> | The maximum TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStore">noStore</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to not store certificates in the storage backend. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notBeforeDuration">notBeforeDuration</a></code> | <code>string</code> | Specifies the duration by which to backdate the NotBefore property. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.organization">organization</a></code> | <code>string[]</code> | The organization of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ou">ou</a></code> | <code>string[]</code> | The organization unit of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifier">policyIdentifier</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>[]</code> | policy_identifier block. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifiers">policyIdentifiers</a></code> | <code>string[]</code> | Specify the list of allowed policies OIDs. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.postalCode">postalCode</a></code> | <code>string[]</code> | The postal code of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.province">province</a></code> | <code>string[]</code> | The province of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.requireCn">requireCn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to force CN usage. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serverFlag">serverFlag</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to specify certificates for server use. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.streetAddress">streetAddress</a></code> | <code>string[]</code> | The street address of generated certificates. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ttl">ttl</a></code> | <code>string</code> | The TTL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrCommonName">useCsrCommonName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to use the CN in the CSR. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrSans">useCsrSans</a></code> | <code>boolean \| cdktf.IResolvable</code> | Flag to use the SANs in the CSR. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The path of the PKI secret backend the resource belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#backend PkiSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#name PkiSecretBackendRole#name}

---

##### `allowAnyName`<sup>Optional</sup> <a name="allowAnyName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowAnyName"></a>

```typescript
public readonly allowAnyName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to allow any name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allow_any_name PkiSecretBackendRole#allow_any_name}

---

##### `allowBareDomains`<sup>Optional</sup> <a name="allowBareDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowBareDomains"></a>

```typescript
public readonly allowBareDomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to allow certificates matching the actual domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allow_bare_domains PkiSecretBackendRole#allow_bare_domains}

---

##### `allowedDomains`<sup>Optional</sup> <a name="allowedDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomains"></a>

```typescript
public readonly allowedDomains: string[];
```

- *Type:* string[]

The domains of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allowed_domains PkiSecretBackendRole#allowed_domains}

---

##### `allowedDomainsTemplate`<sup>Optional</sup> <a name="allowedDomainsTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedDomainsTemplate"></a>

```typescript
public readonly allowedDomainsTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to indicate that `allowed_domains` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allowed_domains_template PkiSecretBackendRole#allowed_domains_template}

---

##### `allowedOtherSans`<sup>Optional</sup> <a name="allowedOtherSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedOtherSans"></a>

```typescript
public readonly allowedOtherSans: string[];
```

- *Type:* string[]

Defines allowed custom SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allowed_other_sans PkiSecretBackendRole#allowed_other_sans}

---

##### `allowedSerialNumbers`<sup>Optional</sup> <a name="allowedSerialNumbers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedSerialNumbers"></a>

```typescript
public readonly allowedSerialNumbers: string[];
```

- *Type:* string[]

Defines allowed Subject serial numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allowed_serial_numbers PkiSecretBackendRole#allowed_serial_numbers}

---

##### `allowedUriSans`<sup>Optional</sup> <a name="allowedUriSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSans"></a>

```typescript
public readonly allowedUriSans: string[];
```

- *Type:* string[]

Defines allowed URI SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allowed_uri_sans PkiSecretBackendRole#allowed_uri_sans}

---

##### `allowedUriSansTemplate`<sup>Optional</sup> <a name="allowedUriSansTemplate" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUriSansTemplate"></a>

```typescript
public readonly allowedUriSansTemplate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to indicate that `allowed_uri_sans` specifies a template expression (e.g. {{identity.entity.aliases.<mount accessor>.name}}).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allowed_uri_sans_template PkiSecretBackendRole#allowed_uri_sans_template}

---

##### `allowedUserIds`<sup>Optional</sup> <a name="allowedUserIds" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowedUserIds"></a>

```typescript
public readonly allowedUserIds: string[];
```

- *Type:* string[]

The allowed User ID's.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allowed_user_ids PkiSecretBackendRole#allowed_user_ids}

---

##### `allowGlobDomains`<sup>Optional</sup> <a name="allowGlobDomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowGlobDomains"></a>

```typescript
public readonly allowGlobDomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to allow names containing glob patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allow_glob_domains PkiSecretBackendRole#allow_glob_domains}

---

##### `allowIpSans`<sup>Optional</sup> <a name="allowIpSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowIpSans"></a>

```typescript
public readonly allowIpSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to allow IP SANs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allow_ip_sans PkiSecretBackendRole#allow_ip_sans}

---

##### `allowLocalhost`<sup>Optional</sup> <a name="allowLocalhost" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowLocalhost"></a>

```typescript
public readonly allowLocalhost: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to allow certificates for localhost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allow_localhost PkiSecretBackendRole#allow_localhost}

---

##### `allowSubdomains`<sup>Optional</sup> <a name="allowSubdomains" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowSubdomains"></a>

```typescript
public readonly allowSubdomains: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to allow certificates matching subdomains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allow_subdomains PkiSecretBackendRole#allow_subdomains}

---

##### `allowWildcardCertificates`<sup>Optional</sup> <a name="allowWildcardCertificates" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.allowWildcardCertificates"></a>

```typescript
public readonly allowWildcardCertificates: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to allow wildcard certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#allow_wildcard_certificates PkiSecretBackendRole#allow_wildcard_certificates}

---

##### `basicConstraintsValidForNonCa`<sup>Optional</sup> <a name="basicConstraintsValidForNonCa" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.basicConstraintsValidForNonCa"></a>

```typescript
public readonly basicConstraintsValidForNonCa: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to mark basic constraints valid when issuing non-CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#basic_constraints_valid_for_non_ca PkiSecretBackendRole#basic_constraints_valid_for_non_ca}

---

##### `clientFlag`<sup>Optional</sup> <a name="clientFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.clientFlag"></a>

```typescript
public readonly clientFlag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to specify certificates for client use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#client_flag PkiSecretBackendRole#client_flag}

---

##### `codeSigningFlag`<sup>Optional</sup> <a name="codeSigningFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.codeSigningFlag"></a>

```typescript
public readonly codeSigningFlag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to specify certificates for code signing use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#code_signing_flag PkiSecretBackendRole#code_signing_flag}

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.country"></a>

```typescript
public readonly country: string[];
```

- *Type:* string[]

The country of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#country PkiSecretBackendRole#country}

---

##### `emailProtectionFlag`<sup>Optional</sup> <a name="emailProtectionFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.emailProtectionFlag"></a>

```typescript
public readonly emailProtectionFlag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to specify certificates for email protection use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#email_protection_flag PkiSecretBackendRole#email_protection_flag}

---

##### `enforceHostnames`<sup>Optional</sup> <a name="enforceHostnames" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.enforceHostnames"></a>

```typescript
public readonly enforceHostnames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to allow only valid host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#enforce_hostnames PkiSecretBackendRole#enforce_hostnames}

---

##### `extKeyUsage`<sup>Optional</sup> <a name="extKeyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.extKeyUsage"></a>

```typescript
public readonly extKeyUsage: string[];
```

- *Type:* string[]

Specify the allowed extended key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#ext_key_usage PkiSecretBackendRole#ext_key_usage}

---

##### `generateLease`<sup>Optional</sup> <a name="generateLease" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.generateLease"></a>

```typescript
public readonly generateLease: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to generate leases with certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#generate_lease PkiSecretBackendRole#generate_lease}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#id PkiSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerRef`<sup>Optional</sup> <a name="issuerRef" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.issuerRef"></a>

```typescript
public readonly issuerRef: string;
```

- *Type:* string

Specifies the default issuer of this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#issuer_ref PkiSecretBackendRole#issuer_ref}

---

##### `keyBits`<sup>Optional</sup> <a name="keyBits" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyBits"></a>

```typescript
public readonly keyBits: number;
```

- *Type:* number

The number of bits of generated keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#key_bits PkiSecretBackendRole#key_bits}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The generated key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#key_type PkiSecretBackendRole#key_type}

---

##### `keyUsage`<sup>Optional</sup> <a name="keyUsage" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.keyUsage"></a>

```typescript
public readonly keyUsage: string[];
```

- *Type:* string[]

Specify the allowed key usage constraint on issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#key_usage PkiSecretBackendRole#key_usage}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.locality"></a>

```typescript
public readonly locality: string[];
```

- *Type:* string[]

The locality of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#locality PkiSecretBackendRole#locality}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: string;
```

- *Type:* string

The maximum TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#max_ttl PkiSecretBackendRole#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#namespace PkiSecretBackendRole#namespace}

---

##### `noStore`<sup>Optional</sup> <a name="noStore" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.noStore"></a>

```typescript
public readonly noStore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to not store certificates in the storage backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#no_store PkiSecretBackendRole#no_store}

---

##### `notBeforeDuration`<sup>Optional</sup> <a name="notBeforeDuration" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.notBeforeDuration"></a>

```typescript
public readonly notBeforeDuration: string;
```

- *Type:* string

Specifies the duration by which to backdate the NotBefore property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#not_before_duration PkiSecretBackendRole#not_before_duration}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.organization"></a>

```typescript
public readonly organization: string[];
```

- *Type:* string[]

The organization of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#organization PkiSecretBackendRole#organization}

---

##### `ou`<sup>Optional</sup> <a name="ou" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ou"></a>

```typescript
public readonly ou: string[];
```

- *Type:* string[]

The organization unit of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#ou PkiSecretBackendRole#ou}

---

##### `policyIdentifier`<sup>Optional</sup> <a name="policyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifier"></a>

```typescript
public readonly policyIdentifier: IResolvable | PkiSecretBackendRolePolicyIdentifier[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>[]

policy_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#policy_identifier PkiSecretBackendRole#policy_identifier}

---

##### `policyIdentifiers`<sup>Optional</sup> <a name="policyIdentifiers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.policyIdentifiers"></a>

```typescript
public readonly policyIdentifiers: string[];
```

- *Type:* string[]

Specify the list of allowed policies OIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#policy_identifiers PkiSecretBackendRole#policy_identifiers}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.postalCode"></a>

```typescript
public readonly postalCode: string[];
```

- *Type:* string[]

The postal code of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#postal_code PkiSecretBackendRole#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.province"></a>

```typescript
public readonly province: string[];
```

- *Type:* string[]

The province of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#province PkiSecretBackendRole#province}

---

##### `requireCn`<sup>Optional</sup> <a name="requireCn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.requireCn"></a>

```typescript
public readonly requireCn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to force CN usage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#require_cn PkiSecretBackendRole#require_cn}

---

##### `serverFlag`<sup>Optional</sup> <a name="serverFlag" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.serverFlag"></a>

```typescript
public readonly serverFlag: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to specify certificates for server use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#server_flag PkiSecretBackendRole#server_flag}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.streetAddress"></a>

```typescript
public readonly streetAddress: string[];
```

- *Type:* string[]

The street address of generated certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#street_address PkiSecretBackendRole#street_address}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#ttl PkiSecretBackendRole#ttl}

---

##### `useCsrCommonName`<sup>Optional</sup> <a name="useCsrCommonName" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrCommonName"></a>

```typescript
public readonly useCsrCommonName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to use the CN in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#use_csr_common_name PkiSecretBackendRole#use_csr_common_name}

---

##### `useCsrSans`<sup>Optional</sup> <a name="useCsrSans" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRoleConfig.property.useCsrSans"></a>

```typescript
public readonly useCsrSans: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Flag to use the SANs in the CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#use_csr_sans PkiSecretBackendRole#use_csr_sans}

---

### PkiSecretBackendRolePolicyIdentifier <a name="PkiSecretBackendRolePolicyIdentifier" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.Initializer"></a>

```typescript
import { pkiSecretBackendRole } from '@cdktf/provider-vault'

const pkiSecretBackendRolePolicyIdentifier: pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.oid">oid</a></code> | <code>string</code> | OID. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.cps">cps</a></code> | <code>string</code> | Optional CPS URL. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.notice">notice</a></code> | <code>string</code> | Optional notice. |

---

##### `oid`<sup>Required</sup> <a name="oid" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.oid"></a>

```typescript
public readonly oid: string;
```

- *Type:* string

OID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#oid PkiSecretBackendRole#oid}

---

##### `cps`<sup>Optional</sup> <a name="cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.cps"></a>

```typescript
public readonly cps: string;
```

- *Type:* string

Optional CPS URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#cps PkiSecretBackendRole#cps}

---

##### `notice`<sup>Optional</sup> <a name="notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier.property.notice"></a>

```typescript
public readonly notice: string;
```

- *Type:* string

Optional notice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/pki_secret_backend_role#notice PkiSecretBackendRole#notice}

---

## Classes <a name="Classes" id="Classes"></a>

### PkiSecretBackendRolePolicyIdentifierList <a name="PkiSecretBackendRolePolicyIdentifierList" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer"></a>

```typescript
import { pkiSecretBackendRole } from '@cdktf/provider-vault'

new pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get"></a>

```typescript
public get(index: number): PkiSecretBackendRolePolicyIdentifierOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PkiSecretBackendRolePolicyIdentifier[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>[]

---


### PkiSecretBackendRolePolicyIdentifierOutputReference <a name="PkiSecretBackendRolePolicyIdentifierOutputReference" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer"></a>

```typescript
import { pkiSecretBackendRole } from '@cdktf/provider-vault'

new pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetCps">resetCps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetNotice">resetNotice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCps` <a name="resetCps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetCps"></a>

```typescript
public resetCps(): void
```

##### `resetNotice` <a name="resetNotice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.resetNotice"></a>

```typescript
public resetNotice(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cpsInput">cpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.noticeInput">noticeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oidInput">oidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cps">cps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.notice">notice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oid">oid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpsInput`<sup>Optional</sup> <a name="cpsInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cpsInput"></a>

```typescript
public readonly cpsInput: string;
```

- *Type:* string

---

##### `noticeInput`<sup>Optional</sup> <a name="noticeInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.noticeInput"></a>

```typescript
public readonly noticeInput: string;
```

- *Type:* string

---

##### `oidInput`<sup>Optional</sup> <a name="oidInput" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oidInput"></a>

```typescript
public readonly oidInput: string;
```

- *Type:* string

---

##### `cps`<sup>Required</sup> <a name="cps" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.cps"></a>

```typescript
public readonly cps: string;
```

- *Type:* string

---

##### `notice`<sup>Required</sup> <a name="notice" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.notice"></a>

```typescript
public readonly notice: string;
```

- *Type:* string

---

##### `oid`<sup>Required</sup> <a name="oid" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.oid"></a>

```typescript
public readonly oid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifierOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PkiSecretBackendRolePolicyIdentifier;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.pkiSecretBackendRole.PkiSecretBackendRolePolicyIdentifier">PkiSecretBackendRolePolicyIdentifier</a>

---



