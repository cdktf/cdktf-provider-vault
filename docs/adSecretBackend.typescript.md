# `vault_ad_secret_backend`

Refer to the Terraform Registory for docs: [`vault_ad_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend).

# `adSecretBackend` Submodule <a name="`adSecretBackend` Submodule" id="@cdktf/provider-vault.adSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdSecretBackend <a name="AdSecretBackend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend vault_ad_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer"></a>

```typescript
import { adSecretBackend } from '@cdktf/provider-vault'

new adSecretBackend.AdSecretBackend(scope: Construct, id: string, config: AdSecretBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig">AdSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig">AdSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetAnonymousGroupSearch">resetAnonymousGroupSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCaseSensitiveNames">resetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsCert">resetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsKey">resetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDenyNullBind">resetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDiscoverdn">resetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetFormatter">resetFormatter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupattr">resetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupdn">resetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupfilter">resetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLastRotationTolerance">resetLastRotationTolerance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLength">resetLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxTtl">resetMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetStarttls">resetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMaxVersion">resetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUpndomain">resetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUsePre111GroupCnBehavior">resetUsePre111GroupCnBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserattr">resetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserdn">resetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUseTokenGroups">resetUseTokenGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAnonymousGroupSearch` <a name="resetAnonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetAnonymousGroupSearch"></a>

```typescript
public resetAnonymousGroupSearch(): void
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetCaseSensitiveNames` <a name="resetCaseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCaseSensitiveNames"></a>

```typescript
public resetCaseSensitiveNames(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetClientTlsCert` <a name="resetClientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsCert"></a>

```typescript
public resetClientTlsCert(): void
```

##### `resetClientTlsKey` <a name="resetClientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetClientTlsKey"></a>

```typescript
public resetClientTlsKey(): void
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```typescript
public resetDefaultLeaseTtlSeconds(): void
```

##### `resetDenyNullBind` <a name="resetDenyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDenyNullBind"></a>

```typescript
public resetDenyNullBind(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetDiscoverdn` <a name="resetDiscoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetDiscoverdn"></a>

```typescript
public resetDiscoverdn(): void
```

##### `resetFormatter` <a name="resetFormatter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetFormatter"></a>

```typescript
public resetFormatter(): void
```

##### `resetGroupattr` <a name="resetGroupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupattr"></a>

```typescript
public resetGroupattr(): void
```

##### `resetGroupdn` <a name="resetGroupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupdn"></a>

```typescript
public resetGroupdn(): void
```

##### `resetGroupfilter` <a name="resetGroupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetGroupfilter"></a>

```typescript
public resetGroupfilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetLastRotationTolerance` <a name="resetLastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLastRotationTolerance"></a>

```typescript
public resetLastRotationTolerance(): void
```

##### `resetLength` <a name="resetLength" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLength"></a>

```typescript
public resetLength(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxLeaseTtlSeconds"></a>

```typescript
public resetMaxLeaseTtlSeconds(): void
```

##### `resetMaxTtl` <a name="resetMaxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetMaxTtl"></a>

```typescript
public resetMaxTtl(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetPasswordPolicy"></a>

```typescript
public resetPasswordPolicy(): void
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetRequestTimeout"></a>

```typescript
public resetRequestTimeout(): void
```

##### `resetStarttls` <a name="resetStarttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetStarttls"></a>

```typescript
public resetStarttls(): void
```

##### `resetTlsMaxVersion` <a name="resetTlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMaxVersion"></a>

```typescript
public resetTlsMaxVersion(): void
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTlsMinVersion"></a>

```typescript
public resetTlsMinVersion(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetUpndomain` <a name="resetUpndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUpndomain"></a>

```typescript
public resetUpndomain(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUsePre111GroupCnBehavior` <a name="resetUsePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUsePre111GroupCnBehavior"></a>

```typescript
public resetUsePre111GroupCnBehavior(): void
```

##### `resetUserattr` <a name="resetUserattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserattr"></a>

```typescript
public resetUserattr(): void
```

##### `resetUserdn` <a name="resetUserdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUserdn"></a>

```typescript
public resetUserdn(): void
```

##### `resetUseTokenGroups` <a name="resetUseTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.resetUseTokenGroups"></a>

```typescript
public resetUseTokenGroups(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AdSecretBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct"></a>

```typescript
import { adSecretBackend } from '@cdktf/provider-vault'

adSecretBackend.AdSecretBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement"></a>

```typescript
import { adSecretBackend } from '@cdktf/provider-vault'

adSecretBackend.AdSecretBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource"></a>

```typescript
import { adSecretBackend } from '@cdktf/provider-vault'

adSecretBackend.AdSecretBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport"></a>

```typescript
import { adSecretBackend } from '@cdktf/provider-vault'

adSecretBackend.AdSecretBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AdSecretBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AdSecretBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AdSecretBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AdSecretBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearchInput">anonymousGroupSearchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddnInput">binddnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpassInput">bindpassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNamesInput">caseSensitiveNamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCertInput">clientTlsCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKeyInput">clientTlsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBindInput">denyNullBindInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdnInput">discoverdnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatterInput">formatterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattrInput">groupattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdnInput">groupdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilterInput">groupfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationToleranceInput">lastRotationToleranceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lengthInput">lengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.localInput">localInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtlInput">maxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttlsInput">starttlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersionInput">tlsMaxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomainInput">upndomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehaviorInput">usePre111GroupCnBehaviorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattrInput">userattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdnInput">userdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroupsInput">useTokenGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddn">binddn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpass">bindpass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCert">clientTlsCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKey">clientTlsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBind">denyNullBind</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdn">discoverdn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatter">formatter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattr">groupattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdn">groupdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilter">groupfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationTolerance">lastRotationTolerance</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtl">maxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttls">starttls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomain">upndomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehavior">usePre111GroupCnBehavior</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattr">userattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdn">userdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroups">useTokenGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `anonymousGroupSearchInput`<sup>Optional</sup> <a name="anonymousGroupSearchInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearchInput"></a>

```typescript
public readonly anonymousGroupSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `binddnInput`<sup>Optional</sup> <a name="binddnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddnInput"></a>

```typescript
public readonly binddnInput: string;
```

- *Type:* string

---

##### `bindpassInput`<sup>Optional</sup> <a name="bindpassInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpassInput"></a>

```typescript
public readonly bindpassInput: string;
```

- *Type:* string

---

##### `caseSensitiveNamesInput`<sup>Optional</sup> <a name="caseSensitiveNamesInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNamesInput"></a>

```typescript
public readonly caseSensitiveNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `clientTlsCertInput`<sup>Optional</sup> <a name="clientTlsCertInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCertInput"></a>

```typescript
public readonly clientTlsCertInput: string;
```

- *Type:* string

---

##### `clientTlsKeyInput`<sup>Optional</sup> <a name="clientTlsKeyInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKeyInput"></a>

```typescript
public readonly clientTlsKeyInput: string;
```

- *Type:* string

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```typescript
public readonly defaultLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `denyNullBindInput`<sup>Optional</sup> <a name="denyNullBindInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBindInput"></a>

```typescript
public readonly denyNullBindInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discoverdnInput`<sup>Optional</sup> <a name="discoverdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdnInput"></a>

```typescript
public readonly discoverdnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `formatterInput`<sup>Optional</sup> <a name="formatterInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatterInput"></a>

```typescript
public readonly formatterInput: string;
```

- *Type:* string

---

##### `groupattrInput`<sup>Optional</sup> <a name="groupattrInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattrInput"></a>

```typescript
public readonly groupattrInput: string;
```

- *Type:* string

---

##### `groupdnInput`<sup>Optional</sup> <a name="groupdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdnInput"></a>

```typescript
public readonly groupdnInput: string;
```

- *Type:* string

---

##### `groupfilterInput`<sup>Optional</sup> <a name="groupfilterInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilterInput"></a>

```typescript
public readonly groupfilterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lastRotationToleranceInput`<sup>Optional</sup> <a name="lastRotationToleranceInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationToleranceInput"></a>

```typescript
public readonly lastRotationToleranceInput: number;
```

- *Type:* number

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* number

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```typescript
public readonly maxLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `maxTtlInput`<sup>Optional</sup> <a name="maxTtlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtlInput"></a>

```typescript
public readonly maxTtlInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicyInput"></a>

```typescript
public readonly passwordPolicyInput: string;
```

- *Type:* string

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeoutInput"></a>

```typescript
public readonly requestTimeoutInput: number;
```

- *Type:* number

---

##### `starttlsInput`<sup>Optional</sup> <a name="starttlsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttlsInput"></a>

```typescript
public readonly starttlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsMaxVersionInput`<sup>Optional</sup> <a name="tlsMaxVersionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersionInput"></a>

```typescript
public readonly tlsMaxVersionInput: string;
```

- *Type:* string

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersionInput"></a>

```typescript
public readonly tlsMinVersionInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `upndomainInput`<sup>Optional</sup> <a name="upndomainInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomainInput"></a>

```typescript
public readonly upndomainInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usePre111GroupCnBehaviorInput`<sup>Optional</sup> <a name="usePre111GroupCnBehaviorInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehaviorInput"></a>

```typescript
public readonly usePre111GroupCnBehaviorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userattrInput`<sup>Optional</sup> <a name="userattrInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattrInput"></a>

```typescript
public readonly userattrInput: string;
```

- *Type:* string

---

##### `userdnInput`<sup>Optional</sup> <a name="userdnInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdnInput"></a>

```typescript
public readonly userdnInput: string;
```

- *Type:* string

---

##### `useTokenGroupsInput`<sup>Optional</sup> <a name="useTokenGroupsInput" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroupsInput"></a>

```typescript
public readonly useTokenGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `anonymousGroupSearch`<sup>Required</sup> <a name="anonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.anonymousGroupSearch"></a>

```typescript
public readonly anonymousGroupSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.binddn"></a>

```typescript
public readonly binddn: string;
```

- *Type:* string

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.bindpass"></a>

```typescript
public readonly bindpass: string;
```

- *Type:* string

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="caseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.caseSensitiveNames"></a>

```typescript
public readonly caseSensitiveNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `clientTlsCert`<sup>Required</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsCert"></a>

```typescript
public readonly clientTlsCert: string;
```

- *Type:* string

---

##### `clientTlsKey`<sup>Required</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.clientTlsKey"></a>

```typescript
public readonly clientTlsKey: string;
```

- *Type:* string

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `denyNullBind`<sup>Required</sup> <a name="denyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.denyNullBind"></a>

```typescript
public readonly denyNullBind: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discoverdn`<sup>Required</sup> <a name="discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.discoverdn"></a>

```typescript
public readonly discoverdn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `formatter`<sup>Required</sup> <a name="formatter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.formatter"></a>

```typescript
public readonly formatter: string;
```

- *Type:* string

---

##### `groupattr`<sup>Required</sup> <a name="groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupattr"></a>

```typescript
public readonly groupattr: string;
```

- *Type:* string

---

##### `groupdn`<sup>Required</sup> <a name="groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupdn"></a>

```typescript
public readonly groupdn: string;
```

- *Type:* string

---

##### `groupfilter`<sup>Required</sup> <a name="groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.groupfilter"></a>

```typescript
public readonly groupfilter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lastRotationTolerance`<sup>Required</sup> <a name="lastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.lastRotationTolerance"></a>

```typescript
public readonly lastRotationTolerance: number;
```

- *Type:* number

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.starttls"></a>

```typescript
public readonly starttls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsMaxVersion`<sup>Required</sup> <a name="tlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMaxVersion"></a>

```typescript
public readonly tlsMaxVersion: string;
```

- *Type:* string

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.upndomain"></a>

```typescript
public readonly upndomain: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `usePre111GroupCnBehavior`<sup>Required</sup> <a name="usePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.usePre111GroupCnBehavior"></a>

```typescript
public readonly usePre111GroupCnBehavior: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userattr"></a>

```typescript
public readonly userattr: string;
```

- *Type:* string

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.userdn"></a>

```typescript
public readonly userdn: string;
```

- *Type:* string

---

##### `useTokenGroups`<sup>Required</sup> <a name="useTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.useTokenGroups"></a>

```typescript
public readonly useTokenGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AdSecretBackendConfig <a name="AdSecretBackendConfig" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.Initializer"></a>

```typescript
import { adSecretBackend } from '@cdktf/provider-vault'

const adSecretBackendConfig: adSecretBackend.AdSecretBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.binddn">binddn</a></code> | <code>string</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.bindpass">bindpass</a></code> | <code>string</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.anonymousGroupSearch">anonymousGroupSearch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.backend">backend</a></code> | <code>string</code> | The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, case sensitivity will be used when comparing usernames and groups for matching policies. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.certificate">certificate</a></code> | <code>string</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsCert">clientTlsCert</a></code> | <code>string</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsKey">clientTlsKey</a></code> | <code>string</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.denyNullBind">denyNullBind</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.description">description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.discoverdn">discoverdn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Use anonymous bind to discover the bind DN of a user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.formatter">formatter</a></code> | <code>string</code> | Text to insert the password into, ex. "customPrefix{{PASSWORD}}customSuffix". |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupattr">groupattr</a></code> | <code>string</code> | LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupdn">groupdn</a></code> | <code>string</code> | LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupfilter">groupfilter</a></code> | <code>string</code> | Go template for querying group membership of user. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lastRotationTolerance">lastRotationTolerance</a></code> | <code>number</code> | The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.length">length</a></code> | <code>number</code> | The desired length of passwords that Vault generates. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | Mark the secrets engine as local-only. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxTtl">maxTtl</a></code> | <code>number</code> | In seconds, the maximum password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.starttls">starttls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>string</code> | Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.ttl">ttl</a></code> | <code>number</code> | In seconds, the default password time-to-live. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.upndomain">upndomain</a></code> | <code>string</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.url">url</a></code> | <code>string</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.usePre111GroupCnBehavior">usePre111GroupCnBehavior</a></code> | <code>boolean \| cdktf.IResolvable</code> | In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations. |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userattr">userattr</a></code> | <code>string</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userdn">userdn</a></code> | <code>string</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |
| <code><a href="#@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.binddn"></a>

```typescript
public readonly binddn: string;
```

- *Type:* string

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#binddn AdSecretBackend#binddn}

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.bindpass"></a>

```typescript
public readonly bindpass: string;
```

- *Type:* string

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#bindpass AdSecretBackend#bindpass}

---

##### `anonymousGroupSearch`<sup>Optional</sup> <a name="anonymousGroupSearch" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.anonymousGroupSearch"></a>

```typescript
public readonly anonymousGroupSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use anonymous binds when performing LDAP group searches (if true the initial credentials will still be used for the initial connection test).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#anonymous_group_search AdSecretBackend#anonymous_group_search}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The mount path for a backend, for example, the path given in "$ vault auth enable -path=my-ad ad".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#backend AdSecretBackend#backend}

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.caseSensitiveNames"></a>

```typescript
public readonly caseSensitiveNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, case sensitivity will be used when comparing usernames and groups for matching policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#case_sensitive_names AdSecretBackend#case_sensitive_names}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#certificate AdSecretBackend#certificate}

---

##### `clientTlsCert`<sup>Optional</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsCert"></a>

```typescript
public readonly clientTlsCert: string;
```

- *Type:* string

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#client_tls_cert AdSecretBackend#client_tls_cert}

---

##### `clientTlsKey`<sup>Optional</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.clientTlsKey"></a>

```typescript
public readonly clientTlsKey: string;
```

- *Type:* string

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#client_tls_key AdSecretBackend#client_tls_key}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#default_lease_ttl_seconds AdSecretBackend#default_lease_ttl_seconds}

---

##### `denyNullBind`<sup>Optional</sup> <a name="denyNullBind" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.denyNullBind"></a>

```typescript
public readonly denyNullBind: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denies an unauthenticated LDAP bind request if the user's password is empty; defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#deny_null_bind AdSecretBackend#deny_null_bind}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#description AdSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#disable_remount AdSecretBackend#disable_remount}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.discoverdn"></a>

```typescript
public readonly discoverdn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Use anonymous bind to discover the bind DN of a user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#discoverdn AdSecretBackend#discoverdn}

---

##### `formatter`<sup>Optional</sup> <a name="formatter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.formatter"></a>

```typescript
public readonly formatter: string;
```

- *Type:* string

Text to insert the password into, ex. "customPrefix{{PASSWORD}}customSuffix".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#formatter AdSecretBackend#formatter}

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupattr"></a>

```typescript
public readonly groupattr: string;
```

- *Type:* string

LDAP attribute to follow on objects returned by <groupfilter> in order to enumerate user group membership.

Examples: "cn" or "memberOf", etc. Default: cn

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#groupattr AdSecretBackend#groupattr}

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupdn"></a>

```typescript
public readonly groupdn: string;
```

- *Type:* string

LDAP search base to use for group membership search (eg: ou=Groups,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#groupdn AdSecretBackend#groupdn}

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.groupfilter"></a>

```typescript
public readonly groupfilter: string;
```

- *Type:* string

Go template for querying group membership of user.

The template can access the following context variables: UserDN, Username Example: (&(objectClass=group)(member:1.2.840.113556.1.4.1941:={{.UserDN}})) Default: (|(memberUid={{.Username}})(member={{.UserDN}})(uniqueMember={{.UserDN}}))

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#groupfilter AdSecretBackend#groupfilter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#id AdSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#insecure_tls AdSecretBackend#insecure_tls}

---

##### `lastRotationTolerance`<sup>Optional</sup> <a name="lastRotationTolerance" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.lastRotationTolerance"></a>

```typescript
public readonly lastRotationTolerance: number;
```

- *Type:* number

The number of seconds after a Vault rotation where, if Active Directory shows a later rotation, it should be considered out-of-band.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#last_rotation_tolerance AdSecretBackend#last_rotation_tolerance}

---

##### `length`<sup>Optional</sup> <a name="length" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

The desired length of passwords that Vault generates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#length AdSecretBackend#length}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Mark the secrets engine as local-only.

Local engines are not replicated or removed by replication.Tolerance duration to use when checking the last rotation time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#local AdSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#max_lease_ttl_seconds AdSecretBackend#max_lease_ttl_seconds}

---

##### `maxTtl`<sup>Optional</sup> <a name="maxTtl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.maxTtl"></a>

```typescript
public readonly maxTtl: number;
```

- *Type:* number

In seconds, the maximum password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#max_ttl AdSecretBackend#max_ttl}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#namespace AdSecretBackend#namespace}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#password_policy AdSecretBackend#password_policy}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#request_timeout AdSecretBackend#request_timeout}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.starttls"></a>

```typescript
public readonly starttls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#starttls AdSecretBackend#starttls}

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMaxVersion"></a>

```typescript
public readonly tlsMaxVersion: string;
```

- *Type:* string

Maximum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#tls_max_version AdSecretBackend#tls_max_version}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

Minimum TLS version to use. Accepted values are 'tls10', 'tls11', 'tls12' or 'tls13'. Defaults to 'tls12'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#tls_min_version AdSecretBackend#tls_min_version}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

In seconds, the default password time-to-live.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#ttl AdSecretBackend#ttl}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.upndomain"></a>

```typescript
public readonly upndomain: string;
```

- *Type:* string

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#upndomain AdSecretBackend#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#url AdSecretBackend#url}

---

##### `usePre111GroupCnBehavior`<sup>Optional</sup> <a name="usePre111GroupCnBehavior" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.usePre111GroupCnBehavior"></a>

```typescript
public readonly usePre111GroupCnBehavior: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

In Vault 1.1.1 a fix for handling group CN values of different cases unfortunately introduced a regression that could cause previously defined groups to not be found due to a change in the resulting name. If set true, the pre-1.1.1 behavior for matching group CNs will be used. This is only needed in some upgrade scenarios for backwards compatibility. It is enabled by default if the config is upgraded but disabled by default on new configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#use_pre111_group_cn_behavior AdSecretBackend#use_pre111_group_cn_behavior}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userattr"></a>

```typescript
public readonly userattr: string;
```

- *Type:* string

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#userattr AdSecretBackend#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.userdn"></a>

```typescript
public readonly userdn: string;
```

- *Type:* string

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#userdn AdSecretBackend#userdn}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktf/provider-vault.adSecretBackend.AdSecretBackendConfig.property.useTokenGroups"></a>

```typescript
public readonly useTokenGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, use the Active Directory tokenGroups constructed attribute of the user to find the group memberships.

This will find all security groups including nested ones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/ad_secret_backend#use_token_groups AdSecretBackend#use_token_groups}

---



