# `vault_jwt_auth_backend_role`

Refer to the Terraform Registory for docs: [`vault_jwt_auth_backend_role`](https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role).

# `jwtAuthBackendRole` Submodule <a name="`jwtAuthBackendRole` Submodule" id="@cdktf/provider-vault.jwtAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### JwtAuthBackendRole <a name="JwtAuthBackendRole" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role vault_jwt_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer"></a>

```typescript
import { jwtAuthBackendRole } from '@cdktf/provider-vault'

new jwtAuthBackendRole.JwtAuthBackendRole(scope: Construct, id: string, config: JwtAuthBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig">JwtAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig">JwtAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAllowedRedirectUris">resetAllowedRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundAudiences">resetBoundAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaims">resetBoundClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaimsType">resetBoundClaimsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundSubject">resetBoundSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClaimMappings">resetClaimMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClockSkewLeeway">resetClockSkewLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetDisableBoundClaimsParsing">resetDisableBoundClaimsParsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetExpirationLeeway">resetExpirationLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetMaxAge">resetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNotBeforeLeeway">resetNotBeforeLeeway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOidcScopes">resetOidcScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetRoleType">resetRoleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetUserClaimJsonPointer">resetUserClaimJsonPointer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetVerboseOidcLogging">resetVerboseOidcLogging</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowedRedirectUris` <a name="resetAllowedRedirectUris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetAllowedRedirectUris"></a>

```typescript
public resetAllowedRedirectUris(): void
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetBoundAudiences` <a name="resetBoundAudiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundAudiences"></a>

```typescript
public resetBoundAudiences(): void
```

##### `resetBoundClaims` <a name="resetBoundClaims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaims"></a>

```typescript
public resetBoundClaims(): void
```

##### `resetBoundClaimsType` <a name="resetBoundClaimsType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundClaimsType"></a>

```typescript
public resetBoundClaimsType(): void
```

##### `resetBoundSubject` <a name="resetBoundSubject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetBoundSubject"></a>

```typescript
public resetBoundSubject(): void
```

##### `resetClaimMappings` <a name="resetClaimMappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClaimMappings"></a>

```typescript
public resetClaimMappings(): void
```

##### `resetClockSkewLeeway` <a name="resetClockSkewLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetClockSkewLeeway"></a>

```typescript
public resetClockSkewLeeway(): void
```

##### `resetDisableBoundClaimsParsing` <a name="resetDisableBoundClaimsParsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetDisableBoundClaimsParsing"></a>

```typescript
public resetDisableBoundClaimsParsing(): void
```

##### `resetExpirationLeeway` <a name="resetExpirationLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetExpirationLeeway"></a>

```typescript
public resetExpirationLeeway(): void
```

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetGroupsClaim"></a>

```typescript
public resetGroupsClaim(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNotBeforeLeeway` <a name="resetNotBeforeLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetNotBeforeLeeway"></a>

```typescript
public resetNotBeforeLeeway(): void
```

##### `resetOidcScopes` <a name="resetOidcScopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetOidcScopes"></a>

```typescript
public resetOidcScopes(): void
```

##### `resetRoleType` <a name="resetRoleType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetRoleType"></a>

```typescript
public resetRoleType(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

##### `resetUserClaimJsonPointer` <a name="resetUserClaimJsonPointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetUserClaimJsonPointer"></a>

```typescript
public resetUserClaimJsonPointer(): void
```

##### `resetVerboseOidcLogging` <a name="resetVerboseOidcLogging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.resetVerboseOidcLogging"></a>

```typescript
public resetVerboseOidcLogging(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct"></a>

```typescript
import { jwtAuthBackendRole } from '@cdktf/provider-vault'

jwtAuthBackendRole.JwtAuthBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement"></a>

```typescript
import { jwtAuthBackendRole } from '@cdktf/provider-vault'

jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource"></a>

```typescript
import { jwtAuthBackendRole } from '@cdktf/provider-vault'

jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUrisInput">allowedRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiencesInput">boundAudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsInput">boundClaimsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsTypeInput">boundClaimsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubjectInput">boundSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappingsInput">claimMappingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeewayInput">clockSkewLeewayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsingInput">disableBoundClaimsParsingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeewayInput">expirationLeewayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaimInput">groupsClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAgeInput">maxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeewayInput">notBeforeLeewayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopesInput">oidcScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleTypeInput">roleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimInput">userClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointerInput">userClaimJsonPointerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLoggingInput">verboseOidcLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiences">boundAudiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaims">boundClaims</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsType">boundClaimsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubject">boundSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappings">claimMappings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeeway">clockSkewLeeway</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsing">disableBoundClaimsParsing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeeway">expirationLeeway</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeeway">notBeforeLeeway</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopes">oidcScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleType">roleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaim">userClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointer">userClaimJsonPointer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLogging">verboseOidcLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedRedirectUrisInput`<sup>Optional</sup> <a name="allowedRedirectUrisInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUrisInput"></a>

```typescript
public readonly allowedRedirectUrisInput: string[];
```

- *Type:* string[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `boundAudiencesInput`<sup>Optional</sup> <a name="boundAudiencesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiencesInput"></a>

```typescript
public readonly boundAudiencesInput: string[];
```

- *Type:* string[]

---

##### `boundClaimsInput`<sup>Optional</sup> <a name="boundClaimsInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsInput"></a>

```typescript
public readonly boundClaimsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `boundClaimsTypeInput`<sup>Optional</sup> <a name="boundClaimsTypeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsTypeInput"></a>

```typescript
public readonly boundClaimsTypeInput: string;
```

- *Type:* string

---

##### `boundSubjectInput`<sup>Optional</sup> <a name="boundSubjectInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubjectInput"></a>

```typescript
public readonly boundSubjectInput: string;
```

- *Type:* string

---

##### `claimMappingsInput`<sup>Optional</sup> <a name="claimMappingsInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappingsInput"></a>

```typescript
public readonly claimMappingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clockSkewLeewayInput`<sup>Optional</sup> <a name="clockSkewLeewayInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeewayInput"></a>

```typescript
public readonly clockSkewLeewayInput: number;
```

- *Type:* number

---

##### `disableBoundClaimsParsingInput`<sup>Optional</sup> <a name="disableBoundClaimsParsingInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsingInput"></a>

```typescript
public readonly disableBoundClaimsParsingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expirationLeewayInput`<sup>Optional</sup> <a name="expirationLeewayInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeewayInput"></a>

```typescript
public readonly expirationLeewayInput: number;
```

- *Type:* number

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaimInput"></a>

```typescript
public readonly groupsClaimInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `notBeforeLeewayInput`<sup>Optional</sup> <a name="notBeforeLeewayInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeewayInput"></a>

```typescript
public readonly notBeforeLeewayInput: number;
```

- *Type:* number

---

##### `oidcScopesInput`<sup>Optional</sup> <a name="oidcScopesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopesInput"></a>

```typescript
public readonly oidcScopesInput: string[];
```

- *Type:* string[]

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `roleTypeInput`<sup>Optional</sup> <a name="roleTypeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleTypeInput"></a>

```typescript
public readonly roleTypeInput: string;
```

- *Type:* string

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `userClaimInput`<sup>Optional</sup> <a name="userClaimInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimInput"></a>

```typescript
public readonly userClaimInput: string;
```

- *Type:* string

---

##### `userClaimJsonPointerInput`<sup>Optional</sup> <a name="userClaimJsonPointerInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointerInput"></a>

```typescript
public readonly userClaimJsonPointerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `verboseOidcLoggingInput`<sup>Optional</sup> <a name="verboseOidcLoggingInput" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLoggingInput"></a>

```typescript
public readonly verboseOidcLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedRedirectUris`<sup>Required</sup> <a name="allowedRedirectUris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.allowedRedirectUris"></a>

```typescript
public readonly allowedRedirectUris: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `boundAudiences`<sup>Required</sup> <a name="boundAudiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundAudiences"></a>

```typescript
public readonly boundAudiences: string[];
```

- *Type:* string[]

---

##### `boundClaims`<sup>Required</sup> <a name="boundClaims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaims"></a>

```typescript
public readonly boundClaims: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `boundClaimsType`<sup>Required</sup> <a name="boundClaimsType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundClaimsType"></a>

```typescript
public readonly boundClaimsType: string;
```

- *Type:* string

---

##### `boundSubject`<sup>Required</sup> <a name="boundSubject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.boundSubject"></a>

```typescript
public readonly boundSubject: string;
```

- *Type:* string

---

##### `claimMappings`<sup>Required</sup> <a name="claimMappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.claimMappings"></a>

```typescript
public readonly claimMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `clockSkewLeeway`<sup>Required</sup> <a name="clockSkewLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.clockSkewLeeway"></a>

```typescript
public readonly clockSkewLeeway: number;
```

- *Type:* number

---

##### `disableBoundClaimsParsing`<sup>Required</sup> <a name="disableBoundClaimsParsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.disableBoundClaimsParsing"></a>

```typescript
public readonly disableBoundClaimsParsing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expirationLeeway`<sup>Required</sup> <a name="expirationLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.expirationLeeway"></a>

```typescript
public readonly expirationLeeway: number;
```

- *Type:* number

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `notBeforeLeeway`<sup>Required</sup> <a name="notBeforeLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.notBeforeLeeway"></a>

```typescript
public readonly notBeforeLeeway: number;
```

- *Type:* number

---

##### `oidcScopes`<sup>Required</sup> <a name="oidcScopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.oidcScopes"></a>

```typescript
public readonly oidcScopes: string[];
```

- *Type:* string[]

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `roleType`<sup>Required</sup> <a name="roleType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.roleType"></a>

```typescript
public readonly roleType: string;
```

- *Type:* string

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `userClaim`<sup>Required</sup> <a name="userClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaim"></a>

```typescript
public readonly userClaim: string;
```

- *Type:* string

---

##### `userClaimJsonPointer`<sup>Required</sup> <a name="userClaimJsonPointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.userClaimJsonPointer"></a>

```typescript
public readonly userClaimJsonPointer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `verboseOidcLogging`<sup>Required</sup> <a name="verboseOidcLogging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.verboseOidcLogging"></a>

```typescript
public readonly verboseOidcLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### JwtAuthBackendRoleConfig <a name="JwtAuthBackendRoleConfig" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.Initializer"></a>

```typescript
import { jwtAuthBackendRole } from '@cdktf/provider-vault'

const jwtAuthBackendRoleConfig: jwtAuthBackendRole.JwtAuthBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaim">userClaim</a></code> | <code>string</code> | The claim to use to uniquely identify the user; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.allowedRedirectUris">allowedRedirectUris</a></code> | <code>string[]</code> | The list of allowed values for redirect_uri during OIDC logins. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundAudiences">boundAudiences</a></code> | <code>string[]</code> | List of aud claims to match against. Any match is sufficient. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaims">boundClaims</a></code> | <code>{[ key: string ]: string}</code> | Map of claims/values to match against. The expected value may be a single string or a comma-separated string list. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaimsType">boundClaimsType</a></code> | <code>string</code> | How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundSubject">boundSubject</a></code> | <code>string</code> | If set, requires that the sub claim matches this value. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.claimMappings">claimMappings</a></code> | <code>{[ key: string ]: string}</code> | Map of claims (keys) to be copied to specified metadata fields (values). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.clockSkewLeeway">clockSkewLeeway</a></code> | <code>number</code> | The amount of leeway to add to all claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.disableBoundClaimsParsing">disableBoundClaimsParsing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Disable bound claim value parsing. Useful when values contain commas. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.expirationLeeway">expirationLeeway</a></code> | <code>number</code> | The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | The claim to use to uniquely identify the set of groups to which the user belongs; |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#id JwtAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.maxAge">maxAge</a></code> | <code>number</code> | Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.notBeforeLeeway">notBeforeLeeway</a></code> | <code>number</code> | The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.oidcScopes">oidcScopes</a></code> | <code>string[]</code> | List of OIDC scopes to be used with an OIDC role. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleType">roleType</a></code> | <code>string</code> | Type of role, either "oidc" (default) or "jwt". |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaimJsonPointer">userClaimJsonPointer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the user_claim value uses JSON pointer syntax for referencing claims. |
| <code><a href="#@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.verboseOidcLogging">verboseOidcLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Log received OIDC tokens and claims when debug-level logging is active. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#role_name JwtAuthBackendRole#role_name}

---

##### `userClaim`<sup>Required</sup> <a name="userClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaim"></a>

```typescript
public readonly userClaim: string;
```

- *Type:* string

The claim to use to uniquely identify the user;

this will be used as the name for the Identity entity alias created due to a successful login.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#user_claim JwtAuthBackendRole#user_claim}

---

##### `allowedRedirectUris`<sup>Optional</sup> <a name="allowedRedirectUris" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.allowedRedirectUris"></a>

```typescript
public readonly allowedRedirectUris: string[];
```

- *Type:* string[]

The list of allowed values for redirect_uri during OIDC logins.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#allowed_redirect_uris JwtAuthBackendRole#allowed_redirect_uris}

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#backend JwtAuthBackendRole#backend}

---

##### `boundAudiences`<sup>Optional</sup> <a name="boundAudiences" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundAudiences"></a>

```typescript
public readonly boundAudiences: string[];
```

- *Type:* string[]

List of aud claims to match against. Any match is sufficient.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#bound_audiences JwtAuthBackendRole#bound_audiences}

---

##### `boundClaims`<sup>Optional</sup> <a name="boundClaims" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaims"></a>

```typescript
public readonly boundClaims: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of claims/values to match against. The expected value may be a single string or a comma-separated string list.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#bound_claims JwtAuthBackendRole#bound_claims}

---

##### `boundClaimsType`<sup>Optional</sup> <a name="boundClaimsType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundClaimsType"></a>

```typescript
public readonly boundClaimsType: string;
```

- *Type:* string

How to interpret values in the claims/values map: can be either "string" (exact match) or "glob" (wildcard match).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#bound_claims_type JwtAuthBackendRole#bound_claims_type}

---

##### `boundSubject`<sup>Optional</sup> <a name="boundSubject" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.boundSubject"></a>

```typescript
public readonly boundSubject: string;
```

- *Type:* string

If set, requires that the sub claim matches this value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#bound_subject JwtAuthBackendRole#bound_subject}

---

##### `claimMappings`<sup>Optional</sup> <a name="claimMappings" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.claimMappings"></a>

```typescript
public readonly claimMappings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of claims (keys) to be copied to specified metadata fields (values).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#claim_mappings JwtAuthBackendRole#claim_mappings}

---

##### `clockSkewLeeway`<sup>Optional</sup> <a name="clockSkewLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.clockSkewLeeway"></a>

```typescript
public readonly clockSkewLeeway: number;
```

- *Type:* number

The amount of leeway to add to all claims to account for clock skew, in seconds.

Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#clock_skew_leeway JwtAuthBackendRole#clock_skew_leeway}

---

##### `disableBoundClaimsParsing`<sup>Optional</sup> <a name="disableBoundClaimsParsing" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.disableBoundClaimsParsing"></a>

```typescript
public readonly disableBoundClaimsParsing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Disable bound claim value parsing. Useful when values contain commas.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#disable_bound_claims_parsing JwtAuthBackendRole#disable_bound_claims_parsing}

---

##### `expirationLeeway`<sup>Optional</sup> <a name="expirationLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.expirationLeeway"></a>

```typescript
public readonly expirationLeeway: number;
```

- *Type:* number

The amount of leeway to add to expiration (exp) claims to account for clock skew, in seconds.

Defaults to 60 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#expiration_leeway JwtAuthBackendRole#expiration_leeway}

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

The claim to use to uniquely identify the set of groups to which the user belongs;

this will be used as the names for the Identity group aliases created due to a successful login. The claim value must be a list of strings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#groups_claim JwtAuthBackendRole#groups_claim}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#id JwtAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

Specifies the allowable elapsed time in seconds since the last time the user was actively authenticated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#max_age JwtAuthBackendRole#max_age}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#namespace JwtAuthBackendRole#namespace}

---

##### `notBeforeLeeway`<sup>Optional</sup> <a name="notBeforeLeeway" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.notBeforeLeeway"></a>

```typescript
public readonly notBeforeLeeway: number;
```

- *Type:* number

The amount of leeway to add to not before (nbf) claims to account for clock skew, in seconds.

Defaults to 150 seconds if set to 0 and can be disabled if set to -1. Only applicable with 'jwt' roles. 

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#not_before_leeway JwtAuthBackendRole#not_before_leeway}

---

##### `oidcScopes`<sup>Optional</sup> <a name="oidcScopes" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.oidcScopes"></a>

```typescript
public readonly oidcScopes: string[];
```

- *Type:* string[]

List of OIDC scopes to be used with an OIDC role.

The standard scope "openid" is automatically included and need not be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#oidc_scopes JwtAuthBackendRole#oidc_scopes}

---

##### `roleType`<sup>Optional</sup> <a name="roleType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.roleType"></a>

```typescript
public readonly roleType: string;
```

- *Type:* string

Type of role, either "oidc" (default) or "jwt".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#role_type JwtAuthBackendRole#role_type}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_bound_cidrs JwtAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_explicit_max_ttl JwtAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_max_ttl JwtAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_no_default_policy JwtAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_num_uses JwtAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_period JwtAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_policies JwtAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_ttl JwtAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#token_type JwtAuthBackendRole#token_type}

---

##### `userClaimJsonPointer`<sup>Optional</sup> <a name="userClaimJsonPointer" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.userClaimJsonPointer"></a>

```typescript
public readonly userClaimJsonPointer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the user_claim value uses JSON pointer syntax for referencing claims.

By default, the user_claim value will not use JSON pointer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#user_claim_json_pointer JwtAuthBackendRole#user_claim_json_pointer}

---

##### `verboseOidcLogging`<sup>Optional</sup> <a name="verboseOidcLogging" id="@cdktf/provider-vault.jwtAuthBackendRole.JwtAuthBackendRoleConfig.property.verboseOidcLogging"></a>

```typescript
public readonly verboseOidcLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Log received OIDC tokens and claims when debug-level logging is active.

Not recommended in production since sensitive information may be present in OIDC responses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/jwt_auth_backend_role#verbose_oidc_logging JwtAuthBackendRole#verbose_oidc_logging}

---



