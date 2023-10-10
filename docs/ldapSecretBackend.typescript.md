# `vault_ldap_secret_backend`

Refer to the Terraform Registory for docs: [`vault_ldap_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend).

# `ldapSecretBackend` Submodule <a name="`ldapSecretBackend` Submodule" id="@cdktf/provider-vault.ldapSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackend <a name="LdapSecretBackend" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend vault_ldap_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer"></a>

```typescript
import { ldapSecretBackend } from '@cdktf/provider-vault'

new ldapSecretBackend.LdapSecretBackend(scope: Construct, id: string, config: LdapSecretBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig">LdapSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig">LdapSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedManagedKeys">resetAllowedManagedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsCert">resetClientTlsCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsKey">resetClientTlsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetConnectionTimeout">resetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetExternalEntropyAccess">resetExternalEntropyAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetInsecureTls">resetInsecureTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLength">resetLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSealWrap">resetSealWrap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetStarttls">resetStarttls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUpndomain">resetUpndomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserattr">resetUserattr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserdn">resetUserdn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowedManagedKeys` <a name="resetAllowedManagedKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAllowedManagedKeys"></a>

```typescript
public resetAllowedManagedKeys(): void
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacRequestKeys"></a>

```typescript
public resetAuditNonHmacRequestKeys(): void
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetAuditNonHmacResponseKeys"></a>

```typescript
public resetAuditNonHmacResponseKeys(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetClientTlsCert` <a name="resetClientTlsCert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsCert"></a>

```typescript
public resetClientTlsCert(): void
```

##### `resetClientTlsKey` <a name="resetClientTlsKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetClientTlsKey"></a>

```typescript
public resetClientTlsKey(): void
```

##### `resetConnectionTimeout` <a name="resetConnectionTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetConnectionTimeout"></a>

```typescript
public resetConnectionTimeout(): void
```

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```typescript
public resetDefaultLeaseTtlSeconds(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetExternalEntropyAccess` <a name="resetExternalEntropyAccess" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetExternalEntropyAccess"></a>

```typescript
public resetExternalEntropyAccess(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInsecureTls` <a name="resetInsecureTls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetInsecureTls"></a>

```typescript
public resetInsecureTls(): void
```

##### `resetLength` <a name="resetLength" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLength"></a>

```typescript
public resetLength(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetMaxLeaseTtlSeconds"></a>

```typescript
public resetMaxLeaseTtlSeconds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPasswordPolicy"></a>

```typescript
public resetPasswordPolicy(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetRequestTimeout"></a>

```typescript
public resetRequestTimeout(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSchema"></a>

```typescript
public resetSchema(): void
```

##### `resetSealWrap` <a name="resetSealWrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetSealWrap"></a>

```typescript
public resetSealWrap(): void
```

##### `resetStarttls` <a name="resetStarttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetStarttls"></a>

```typescript
public resetStarttls(): void
```

##### `resetUpndomain` <a name="resetUpndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUpndomain"></a>

```typescript
public resetUpndomain(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUserattr` <a name="resetUserattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserattr"></a>

```typescript
public resetUserattr(): void
```

##### `resetUserdn` <a name="resetUserdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.resetUserdn"></a>

```typescript
public resetUserdn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct"></a>

```typescript
import { ldapSecretBackend } from '@cdktf/provider-vault'

ldapSecretBackend.LdapSecretBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement"></a>

```typescript
import { ldapSecretBackend } from '@cdktf/provider-vault'

ldapSecretBackend.LdapSecretBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource"></a>

```typescript
import { ldapSecretBackend } from '@cdktf/provider-vault'

ldapSecretBackend.LdapSecretBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeysInput">allowedManagedKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddnInput">binddnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassInput">bindpassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCertInput">clientTlsCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKeyInput">clientTlsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeoutInput">connectionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccessInput">externalEntropyAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTlsInput">insecureTlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lengthInput">lengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.localInput">localInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.optionsInput">optionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrapInput">sealWrapInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttlsInput">starttlsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomainInput">upndomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattrInput">userattrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdnInput">userdnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddn">binddn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpass">bindpass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCert">clientTlsCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKey">clientTlsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.length">length</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrap">sealWrap</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttls">starttls</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomain">upndomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattr">userattr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdn">userdn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `allowedManagedKeysInput`<sup>Optional</sup> <a name="allowedManagedKeysInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeysInput"></a>

```typescript
public readonly allowedManagedKeysInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeysInput"></a>

```typescript
public readonly auditNonHmacRequestKeysInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeysInput"></a>

```typescript
public readonly auditNonHmacResponseKeysInput: string[];
```

- *Type:* string[]

---

##### `binddnInput`<sup>Optional</sup> <a name="binddnInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddnInput"></a>

```typescript
public readonly binddnInput: string;
```

- *Type:* string

---

##### `bindpassInput`<sup>Optional</sup> <a name="bindpassInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpassInput"></a>

```typescript
public readonly bindpassInput: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `clientTlsCertInput`<sup>Optional</sup> <a name="clientTlsCertInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCertInput"></a>

```typescript
public readonly clientTlsCertInput: string;
```

- *Type:* string

---

##### `clientTlsKeyInput`<sup>Optional</sup> <a name="clientTlsKeyInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKeyInput"></a>

```typescript
public readonly clientTlsKeyInput: string;
```

- *Type:* string

---

##### `connectionTimeoutInput`<sup>Optional</sup> <a name="connectionTimeoutInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeoutInput"></a>

```typescript
public readonly connectionTimeoutInput: number;
```

- *Type:* number

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```typescript
public readonly defaultLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalEntropyAccessInput`<sup>Optional</sup> <a name="externalEntropyAccessInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccessInput"></a>

```typescript
public readonly externalEntropyAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `insecureTlsInput`<sup>Optional</sup> <a name="insecureTlsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTlsInput"></a>

```typescript
public readonly insecureTlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lengthInput`<sup>Optional</sup> <a name="lengthInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.lengthInput"></a>

```typescript
public readonly lengthInput: number;
```

- *Type:* number

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```typescript
public readonly maxLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.optionsInput"></a>

```typescript
public readonly optionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicyInput"></a>

```typescript
public readonly passwordPolicyInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeoutInput"></a>

```typescript
public readonly requestTimeoutInput: number;
```

- *Type:* number

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `sealWrapInput`<sup>Optional</sup> <a name="sealWrapInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrapInput"></a>

```typescript
public readonly sealWrapInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `starttlsInput`<sup>Optional</sup> <a name="starttlsInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttlsInput"></a>

```typescript
public readonly starttlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `upndomainInput`<sup>Optional</sup> <a name="upndomainInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomainInput"></a>

```typescript
public readonly upndomainInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userattrInput`<sup>Optional</sup> <a name="userattrInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattrInput"></a>

```typescript
public readonly userattrInput: string;
```

- *Type:* string

---

##### `userdnInput`<sup>Optional</sup> <a name="userdnInput" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdnInput"></a>

```typescript
public readonly userdnInput: string;
```

- *Type:* string

---

##### `allowedManagedKeys`<sup>Required</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.allowedManagedKeys"></a>

```typescript
public readonly allowedManagedKeys: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.binddn"></a>

```typescript
public readonly binddn: string;
```

- *Type:* string

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.bindpass"></a>

```typescript
public readonly bindpass: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `clientTlsCert`<sup>Required</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsCert"></a>

```typescript
public readonly clientTlsCert: string;
```

- *Type:* string

---

##### `clientTlsKey`<sup>Required</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.clientTlsKey"></a>

```typescript
public readonly clientTlsKey: string;
```

- *Type:* string

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalEntropyAccess`<sup>Required</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.externalEntropyAccess"></a>

```typescript
public readonly externalEntropyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `insecureTls`<sup>Required</sup> <a name="insecureTls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `length`<sup>Required</sup> <a name="length" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `requestTimeout`<sup>Required</sup> <a name="requestTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `sealWrap`<sup>Required</sup> <a name="sealWrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.sealWrap"></a>

```typescript
public readonly sealWrap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `starttls`<sup>Required</sup> <a name="starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.starttls"></a>

```typescript
public readonly starttls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `upndomain`<sup>Required</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.upndomain"></a>

```typescript
public readonly upndomain: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userattr`<sup>Required</sup> <a name="userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userattr"></a>

```typescript
public readonly userattr: string;
```

- *Type:* string

---

##### `userdn`<sup>Required</sup> <a name="userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.userdn"></a>

```typescript
public readonly userdn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendConfig <a name="LdapSecretBackendConfig" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.Initializer"></a>

```typescript
import { ldapSecretBackend } from '@cdktf/provider-vault'

const ldapSecretBackendConfig: ldapSecretBackend.LdapSecretBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.binddn">binddn</a></code> | <code>string</code> | Distinguished name of object to bind when performing user and group search. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpass">bindpass</a></code> | <code>string</code> | LDAP password for searching for the user DN. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedManagedKeys">allowedManagedKeys</a></code> | <code>string[]</code> | List of managed key registry entry names that the mount in question is allowed to access. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the request data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | Specifies the list of keys that will not be HMAC'd by audit devices in the response data object. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.certificate">certificate</a></code> | <code>string</code> | CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsCert">clientTlsCert</a></code> | <code>string</code> | Client certificate to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsKey">clientTlsKey</a></code> | <code>string</code> | Client certificate key to provide to the LDAP server, must be x509 PEM encoded. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | Default lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.description">description</a></code> | <code>string</code> | Human-friendly description of the mount. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.externalEntropyAccess">externalEntropyAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable the secrets engine to access Vault's external entropy source. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.insecureTls">insecureTls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip LDAP server SSL Certificate verification - insecure and not recommended for production use. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.length">length</a></code> | <code>number</code> | The desired length of passwords that Vault generates. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | Local mount flag that can be explicitly set to true to enforce local mount in HA environment. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | Maximum possible lease duration for tokens and secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.options">options</a></code> | <code>{[ key: string ]: string}</code> | Specifies mount type specific options that are passed to the backend. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | Name of the password policy to use to generate passwords. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.path">path</a></code> | <code>string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | Timeout, in seconds, for the connection when making requests against the server before returning back an error. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.schema">schema</a></code> | <code>string</code> | The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.sealWrap">sealWrap</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.starttls">starttls</a></code> | <code>boolean \| cdktf.IResolvable</code> | Issue a StartTLS command after establishing unencrypted connection. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.upndomain">upndomain</a></code> | <code>string</code> | Enables userPrincipalDomain login with [username]@UPNDomain. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.url">url</a></code> | <code>string</code> | LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userattr">userattr</a></code> | <code>string</code> | Attribute used for users (default: cn). |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userdn">userdn</a></code> | <code>string</code> | LDAP domain to use for users (eg: ou=People,dc=example,dc=org). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `binddn`<sup>Required</sup> <a name="binddn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.binddn"></a>

```typescript
public readonly binddn: string;
```

- *Type:* string

Distinguished name of object to bind when performing user and group search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#binddn LdapSecretBackend#binddn}

---

##### `bindpass`<sup>Required</sup> <a name="bindpass" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.bindpass"></a>

```typescript
public readonly bindpass: string;
```

- *Type:* string

LDAP password for searching for the user DN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#bindpass LdapSecretBackend#bindpass}

---

##### `allowedManagedKeys`<sup>Optional</sup> <a name="allowedManagedKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.allowedManagedKeys"></a>

```typescript
public readonly allowedManagedKeys: string[];
```

- *Type:* string[]

List of managed key registry entry names that the mount in question is allowed to access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#allowed_managed_keys LdapSecretBackend#allowed_managed_keys}

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#audit_non_hmac_request_keys LdapSecretBackend#audit_non_hmac_request_keys}

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#audit_non_hmac_response_keys LdapSecretBackend#audit_non_hmac_response_keys}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

CA certificate to use when verifying LDAP server certificate, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#certificate LdapSecretBackend#certificate}

---

##### `clientTlsCert`<sup>Optional</sup> <a name="clientTlsCert" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsCert"></a>

```typescript
public readonly clientTlsCert: string;
```

- *Type:* string

Client certificate to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#client_tls_cert LdapSecretBackend#client_tls_cert}

---

##### `clientTlsKey`<sup>Optional</sup> <a name="clientTlsKey" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.clientTlsKey"></a>

```typescript
public readonly clientTlsKey: string;
```

- *Type:* string

Client certificate key to provide to the LDAP server, must be x509 PEM encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#client_tls_key LdapSecretBackend#client_tls_key}

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

Timeout, in seconds, when attempting to connect to the LDAP server before trying the next URL in the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#connection_timeout LdapSecretBackend#connection_timeout}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

Default lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#default_lease_ttl_seconds LdapSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-friendly description of the mount.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#description LdapSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#disable_remount LdapSecretBackend#disable_remount}

---

##### `externalEntropyAccess`<sup>Optional</sup> <a name="externalEntropyAccess" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.externalEntropyAccess"></a>

```typescript
public readonly externalEntropyAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable the secrets engine to access Vault's external entropy source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#external_entropy_access LdapSecretBackend#external_entropy_access}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#id LdapSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecureTls`<sup>Optional</sup> <a name="insecureTls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.insecureTls"></a>

```typescript
public readonly insecureTls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip LDAP server SSL Certificate verification - insecure and not recommended for production use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#insecure_tls LdapSecretBackend#insecure_tls}

---

##### `length`<sup>Optional</sup> <a name="length" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.length"></a>

```typescript
public readonly length: number;
```

- *Type:* number

The desired length of passwords that Vault generates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#length LdapSecretBackend#length}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Local mount flag that can be explicitly set to true to enforce local mount in HA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#local LdapSecretBackend#local}

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

Maximum possible lease duration for tokens and secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#max_lease_ttl_seconds LdapSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#namespace LdapSecretBackend#namespace}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.options"></a>

```typescript
public readonly options: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Specifies mount type specific options that are passed to the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#options LdapSecretBackend#options}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

Name of the password policy to use to generate passwords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#password_policy LdapSecretBackend#password_policy}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#path LdapSecretBackend#path}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

Timeout, in seconds, for the connection when making requests against the server before returning back an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#request_timeout LdapSecretBackend#request_timeout}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The LDAP schema to use when storing entry passwords. Valid schemas include openldap, ad, and racf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#schema LdapSecretBackend#schema}

---

##### `sealWrap`<sup>Optional</sup> <a name="sealWrap" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.sealWrap"></a>

```typescript
public readonly sealWrap: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#seal_wrap LdapSecretBackend#seal_wrap}

---

##### `starttls`<sup>Optional</sup> <a name="starttls" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.starttls"></a>

```typescript
public readonly starttls: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Issue a StartTLS command after establishing unencrypted connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#starttls LdapSecretBackend#starttls}

---

##### `upndomain`<sup>Optional</sup> <a name="upndomain" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.upndomain"></a>

```typescript
public readonly upndomain: string;
```

- *Type:* string

Enables userPrincipalDomain login with [username]@UPNDomain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#upndomain LdapSecretBackend#upndomain}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

LDAP URL to connect to (default: ldap://127.0.0.1). Multiple URLs can be specified by concatenating them with commas; they will be tried in-order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#url LdapSecretBackend#url}

---

##### `userattr`<sup>Optional</sup> <a name="userattr" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userattr"></a>

```typescript
public readonly userattr: string;
```

- *Type:* string

Attribute used for users (default: cn).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#userattr LdapSecretBackend#userattr}

---

##### `userdn`<sup>Optional</sup> <a name="userdn" id="@cdktf/provider-vault.ldapSecretBackend.LdapSecretBackendConfig.property.userdn"></a>

```typescript
public readonly userdn: string;
```

- *Type:* string

LDAP domain to use for users (eg: ou=People,dc=example,dc=org).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/ldap_secret_backend#userdn LdapSecretBackend#userdn}

---



