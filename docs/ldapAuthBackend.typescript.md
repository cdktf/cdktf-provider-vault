# `ldapAuthBackend` Submodule <a name="`ldapAuthBackend` Submodule" id="@cdktf/provider-vault.ldapAuthBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapAuthBackend <a name="LdapAuthBackend" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend vault_ldap_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer"></a>

```typescript
import { ldapAuthBackend } from '@cdktf/provider-vault'

new ldapAuthBackend.LdapAuthBackend(scope: Construct, id: string, config: LdapAuthBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig">LdapAuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig">LdapAuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBinddn">resetBinddn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpass">resetBindpass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCaseSensitiveNames">resetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsCert">resetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsKey">resetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDenyNullBind">resetDenyNullBind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDiscoverdn">resetDiscoverdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupattr">resetGroupattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupdn">resetGroupdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupfilter">resetGroupfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetMaxPageSize">resetMaxPageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetStarttls">resetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMaxVersion">resetTlsMaxVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUpndomain">resetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserattr">resetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserdn">resetUserdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserfilter">resetUserfilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUsernameAsAlias">resetUsernameAsAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUseTokenGroups">resetUseTokenGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBinddn` <a name="resetBinddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBinddn"></a>

```typescript
public resetBinddn(): void
```

##### `resetBindpass` <a name="resetBindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetBindpass"></a>

```typescript
public resetBindpass(): void
```

##### `resetCaseSensitiveNames` <a name="resetCaseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCaseSensitiveNames"></a>

```typescript
public resetCaseSensitiveNames(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetClientTlsCert` <a name="resetClientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsCert"></a>

```typescript
public resetClientTlsCert(): void
```

##### `resetClientTlsKey` <a name="resetClientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetClientTlsKey"></a>

```typescript
public resetClientTlsKey(): void
```

##### `resetDenyNullBind` <a name="resetDenyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDenyNullBind"></a>

```typescript
public resetDenyNullBind(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetDiscoverdn` <a name="resetDiscoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetDiscoverdn"></a>

```typescript
public resetDiscoverdn(): void
```

##### `resetGroupattr` <a name="resetGroupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupattr"></a>

```typescript
public resetGroupattr(): void
```

##### `resetGroupdn` <a name="resetGroupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupdn"></a>

```typescript
public resetGroupdn(): void
```

##### `resetGroupfilter` <a name="resetGroupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetGroupfilter"></a>

```typescript
public resetGroupfilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetMaxPageSize` <a name="resetMaxPageSize" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetMaxPageSize"></a>

```typescript
public resetMaxPageSize(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetStarttls` <a name="resetStarttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetStarttls"></a>

```typescript
public resetStarttls(): void
```

##### `resetTlsMaxVersion` <a name="resetTlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMaxVersion"></a>

```typescript
public resetTlsMaxVersion(): void
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTlsMinVersion"></a>

```typescript
public resetTlsMinVersion(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

##### `resetUpndomain` <a name="resetUpndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUpndomain"></a>

```typescript
public resetUpndomain(): void
```

##### `resetUserattr` <a name="resetUserattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserattr"></a>

```typescript
public resetUserattr(): void
```

##### `resetUserdn` <a name="resetUserdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserdn"></a>

```typescript
public resetUserdn(): void
```

##### `resetUserfilter` <a name="resetUserfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUserfilter"></a>

```typescript
public resetUserfilter(): void
```

##### `resetUsernameAsAlias` <a name="resetUsernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUsernameAsAlias"></a>

```typescript
public resetUsernameAsAlias(): void
```

##### `resetUseTokenGroups` <a name="resetUseTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.resetUseTokenGroups"></a>

```typescript
public resetUseTokenGroups(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LdapAuthBackend resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct"></a>

```typescript
import { ldapAuthBackend } from '@cdktf/provider-vault'

ldapAuthBackend.LdapAuthBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement"></a>

```typescript
import { ldapAuthBackend } from '@cdktf/provider-vault'

ldapAuthBackend.LdapAuthBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource"></a>

```typescript
import { ldapAuthBackend } from '@cdktf/provider-vault'

ldapAuthBackend.LdapAuthBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport"></a>

```typescript
import { ldapAuthBackend } from '@cdktf/provider-vault'

ldapAuthBackend.LdapAuthBackend.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LdapAuthBackend resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapAuthBackend to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapAuthBackend that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LdapAuthBackend to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddnInput">binddnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassInput">bindpassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNamesInput">caseSensitiveNamesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCertInput">clientTlsCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKeyInput">clientTlsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBindInput">denyNullBindInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdnInput">discoverdnInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattrInput">groupattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdnInput">groupdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilterInput">groupfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.localInput">localInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSizeInput">maxPageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttlsInput">starttlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersionInput">tlsMaxVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomainInput">upndomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattrInput">userattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdnInput">userdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilterInput">userfilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAliasInput">usernameAsAliasInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroupsInput">useTokenGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddn">binddn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpass">bindpass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCert">clientTlsCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKey">clientTlsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBind">denyNullBind</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdn">discoverdn</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattr">groupattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdn">groupdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilter">groupfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSize">maxPageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttls">starttls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomain">upndomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattr">userattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdn">userdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilter">userfilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAlias">usernameAsAlias</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroups">useTokenGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `binddnInput`<sup>Optional</sup> <a name="binddnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddnInput"></a>

```typescript
public readonly binddnInput: string;
```

- *Type:* string

---

##### `bindpassInput`<sup>Optional</sup> <a name="bindpassInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpassInput"></a>

```typescript
public readonly bindpassInput: string;
```

- *Type:* string

---

##### `caseSensitiveNamesInput`<sup>Optional</sup> <a name="caseSensitiveNamesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNamesInput"></a>

```typescript
public readonly caseSensitiveNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `clientTlsCertInput`<sup>Optional</sup> <a name="clientTlsCertInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCertInput"></a>

```typescript
public readonly clientTlsCertInput: string;
```

- *Type:* string

---

##### `clientTlsKeyInput`<sup>Optional</sup> <a name="clientTlsKeyInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKeyInput"></a>

```typescript
public readonly clientTlsKeyInput: string;
```

- *Type:* string

---

##### `denyNullBindInput`<sup>Optional</sup> <a name="denyNullBindInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBindInput"></a>

```typescript
public readonly denyNullBindInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discoverdnInput`<sup>Optional</sup> <a name="discoverdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdnInput"></a>

```typescript
public readonly discoverdnInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupattrInput`<sup>Optional</sup> <a name="groupattrInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattrInput"></a>

```typescript
public readonly groupattrInput: string;
```

- *Type:* string

---

##### `groupdnInput`<sup>Optional</sup> <a name="groupdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdnInput"></a>

```typescript
public readonly groupdnInput: string;
```

- *Type:* string

---

##### `groupfilterInput`<sup>Optional</sup> <a name="groupfilterInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilterInput"></a>

```typescript
public readonly groupfilterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxPageSizeInput`<sup>Optional</sup> <a name="maxPageSizeInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSizeInput"></a>

```typescript
public readonly maxPageSizeInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `starttlsInput`<sup>Optional</sup> <a name="starttlsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttlsInput"></a>

```typescript
public readonly starttlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsMaxVersionInput`<sup>Optional</sup> <a name="tlsMaxVersionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersionInput"></a>

```typescript
public readonly tlsMaxVersionInput: string;
```

- *Type:* string

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersionInput"></a>

```typescript
public readonly tlsMinVersionInput: string;
```

- *Type:* string

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `upndomainInput`<sup>Optional</sup> <a name="upndomainInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomainInput"></a>

```typescript
public readonly upndomainInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userattrInput`<sup>Optional</sup> <a name="userattrInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattrInput"></a>

```typescript
public readonly userattrInput: string;
```

- *Type:* string

---

##### `userdnInput`<sup>Optional</sup> <a name="userdnInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdnInput"></a>

```typescript
public readonly userdnInput: string;
```

- *Type:* string

---

##### `userfilterInput`<sup>Optional</sup> <a name="userfilterInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilterInput"></a>

```typescript
public readonly userfilterInput: string;
```

- *Type:* string

---

##### `usernameAsAliasInput`<sup>Optional</sup> <a name="usernameAsAliasInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAliasInput"></a>

```typescript
public readonly usernameAsAliasInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTokenGroupsInput`<sup>Optional</sup> <a name="useTokenGroupsInput" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroupsInput"></a>

```typescript
public readonly useTokenGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.binddn"></a>

```typescript
public readonly binddn: string;
```

- *Type:* string

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.bindpass"></a>

```typescript
public readonly bindpass: string;
```

- *Type:* string

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="caseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.caseSensitiveNames"></a>

```typescript
public readonly caseSensitiveNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `clientTlsCert`<sup>Required</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsCert"></a>

```typescript
public readonly clientTlsCert: string;
```

- *Type:* string

---

##### `clientTlsKey`<sup>Required</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.clientTlsKey"></a>

```typescript
public readonly clientTlsKey: string;
```

- *Type:* string

---

##### `denyNullBind`<sup>Required</sup> <a name="denyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.denyNullBind"></a>

```typescript
public readonly denyNullBind: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `discoverdn`<sup>Required</sup> <a name="discoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.discoverdn"></a>

```typescript
public readonly discoverdn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupattr`<sup>Required</sup> <a name="groupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupattr"></a>

```typescript
public readonly groupattr: string;
```

- *Type:* string

---

##### `groupdn`<sup>Required</sup> <a name="groupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupdn"></a>

```typescript
public readonly groupdn: string;
```

- *Type:* string

---

##### `groupfilter`<sup>Required</sup> <a name="groupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.groupfilter"></a>

```typescript
public readonly groupfilter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxPageSize`<sup>Required</sup> <a name="maxPageSize" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.maxPageSize"></a>

```typescript
public readonly maxPageSize: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.starttls"></a>

```typescript
public readonly starttls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tlsMaxVersion`<sup>Required</sup> <a name="tlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMaxVersion"></a>

```typescript
public readonly tlsMaxVersion: string;
```

- *Type:* string

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.upndomain"></a>

```typescript
public readonly upndomain: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userattr"></a>

```typescript
public readonly userattr: string;
```

- *Type:* string

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userdn"></a>

```typescript
public readonly userdn: string;
```

- *Type:* string

---

##### `userfilter`<sup>Required</sup> <a name="userfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.userfilter"></a>

```typescript
public readonly userfilter: string;
```

- *Type:* string

---

##### `usernameAsAlias`<sup>Required</sup> <a name="usernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.usernameAsAlias"></a>

```typescript
public readonly usernameAsAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTokenGroups`<sup>Required</sup> <a name="useTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.useTokenGroups"></a>

```typescript
public readonly useTokenGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapAuthBackendConfig <a name="LdapAuthBackendConfig" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.Initializer"></a>

```typescript
import { ldapAuthBackend } from '@cdktf/provider-vault'

const ldapAuthBackendConfig: ldapAuthBackend.LdapAuthBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.binddn">binddn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpass">bindpass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsCert">clientTlsCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsKey">clientTlsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.denyNullBind">denyNullBind</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.discoverdn">discoverdn</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupattr">groupattr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupdn">groupdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupfilter">groupfilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.maxPageSize">maxPageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#max_page_size LdapAuthBackend#max_page_size}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.starttls">starttls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMaxVersion">tlsMaxVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.upndomain">upndomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userattr">userattr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userdn">userdn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userfilter">userfilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.usernameAsAlias">usernameAsAlias</a></code> | <code>boolean \| cdktf.IResolvable</code> | Force the auth method to use the username passed by the user as the alias name. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.useTokenGroups">useTokenGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}.

---

##### `binddn`<sup>Optional</sup> <a name="binddn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.binddn"></a>

```typescript
public readonly binddn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}.

---

##### `bindpass`<sup>Optional</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.bindpass"></a>

```typescript
public readonly bindpass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}.

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.caseSensitiveNames"></a>

```typescript
public readonly caseSensitiveNames: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}.

---

##### `clientTlsCert`<sup>Optional</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsCert"></a>

```typescript
public readonly clientTlsCert: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}.

---

##### `clientTlsKey`<sup>Optional</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.clientTlsKey"></a>

```typescript
public readonly clientTlsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}.

---

##### `denyNullBind`<sup>Optional</sup> <a name="denyNullBind" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.denyNullBind"></a>

```typescript
public readonly denyNullBind: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}.

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#disable_remount LdapAuthBackend#disable_remount}

---

##### `discoverdn`<sup>Optional</sup> <a name="discoverdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.discoverdn"></a>

```typescript
public readonly discoverdn: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}.

---

##### `groupattr`<sup>Optional</sup> <a name="groupattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupattr"></a>

```typescript
public readonly groupattr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}.

---

##### `groupdn`<sup>Optional</sup> <a name="groupdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupdn"></a>

```typescript
public readonly groupdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}.

---

##### `groupfilter`<sup>Optional</sup> <a name="groupfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.groupfilter"></a>

```typescript
public readonly groupfilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#local LdapAuthBackend#local}

---

##### `maxPageSize`<sup>Optional</sup> <a name="maxPageSize" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.maxPageSize"></a>

```typescript
public readonly maxPageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#max_page_size LdapAuthBackend#max_page_size}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#namespace LdapAuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}.

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.starttls"></a>

```typescript
public readonly starttls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}.

---

##### `tlsMaxVersion`<sup>Optional</sup> <a name="tlsMaxVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMaxVersion"></a>

```typescript
public readonly tlsMaxVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}.

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}.

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#token_bound_cidrs LdapAuthBackend#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#token_explicit_max_ttl LdapAuthBackend#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#token_max_ttl LdapAuthBackend#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#token_no_default_policy LdapAuthBackend#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#token_num_uses LdapAuthBackend#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#token_period LdapAuthBackend#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#token_policies LdapAuthBackend#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#token_ttl LdapAuthBackend#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.upndomain"></a>

```typescript
public readonly upndomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}.

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userattr"></a>

```typescript
public readonly userattr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}.

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userdn"></a>

```typescript
public readonly userdn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}.

---

##### `userfilter`<sup>Optional</sup> <a name="userfilter" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.userfilter"></a>

```typescript
public readonly userfilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}.

---

##### `usernameAsAlias`<sup>Optional</sup> <a name="usernameAsAlias" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.usernameAsAlias"></a>

```typescript
public readonly usernameAsAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Force the auth method to use the username passed by the user as the alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#username_as_alias LdapAuthBackend#username_as_alias}

---

##### `useTokenGroups`<sup>Optional</sup> <a name="useTokenGroups" id="@cdktf/provider-vault.ldapAuthBackend.LdapAuthBackendConfig.property.useTokenGroups"></a>

```typescript
public readonly useTokenGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}.

---



