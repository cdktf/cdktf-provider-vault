# `vault_identity_oidc_provider`

Refer to the Terraform Registory for docs: [`vault_identity_oidc_provider`](https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider).

# `identityOidcProvider` Submodule <a name="`identityOidcProvider` Submodule" id="@cdktf/provider-vault.identityOidcProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityOidcProvider <a name="IdentityOidcProvider" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider vault_identity_oidc_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer"></a>

```typescript
import { identityOidcProvider } from '@cdktf/provider-vault'

new identityOidcProvider.IdentityOidcProvider(scope: Construct, id: string, config: IdentityOidcProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig">IdentityOidcProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig">IdentityOidcProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetAllowedClientIds">resetAllowedClientIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetHttpsEnabled">resetHttpsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetIssuerHost">resetIssuerHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetScopesSupported">resetScopesSupported</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetAllowedClientIds` <a name="resetAllowedClientIds" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetAllowedClientIds"></a>

```typescript
public resetAllowedClientIds(): void
```

##### `resetHttpsEnabled` <a name="resetHttpsEnabled" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetHttpsEnabled"></a>

```typescript
public resetHttpsEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIssuerHost` <a name="resetIssuerHost" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetIssuerHost"></a>

```typescript
public resetIssuerHost(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetScopesSupported` <a name="resetScopesSupported" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.resetScopesSupported"></a>

```typescript
public resetScopesSupported(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityOidcProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isConstruct"></a>

```typescript
import { identityOidcProvider } from '@cdktf/provider-vault'

identityOidcProvider.IdentityOidcProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformElement"></a>

```typescript
import { identityOidcProvider } from '@cdktf/provider-vault'

identityOidcProvider.IdentityOidcProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformResource"></a>

```typescript
import { identityOidcProvider } from '@cdktf/provider-vault'

identityOidcProvider.IdentityOidcProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.generateConfigForImport"></a>

```typescript
import { identityOidcProvider } from '@cdktf/provider-vault'

identityOidcProvider.IdentityOidcProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityOidcProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityOidcProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityOidcProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityOidcProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.allowedClientIdsInput">allowedClientIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.httpsEnabledInput">httpsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuerHostInput">issuerHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.scopesSupportedInput">scopesSupportedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.allowedClientIds">allowedClientIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.httpsEnabled">httpsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuerHost">issuerHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.scopesSupported">scopesSupported</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `allowedClientIdsInput`<sup>Optional</sup> <a name="allowedClientIdsInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.allowedClientIdsInput"></a>

```typescript
public readonly allowedClientIdsInput: string[];
```

- *Type:* string[]

---

##### `httpsEnabledInput`<sup>Optional</sup> <a name="httpsEnabledInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.httpsEnabledInput"></a>

```typescript
public readonly httpsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `issuerHostInput`<sup>Optional</sup> <a name="issuerHostInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuerHostInput"></a>

```typescript
public readonly issuerHostInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `scopesSupportedInput`<sup>Optional</sup> <a name="scopesSupportedInput" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.scopesSupportedInput"></a>

```typescript
public readonly scopesSupportedInput: string[];
```

- *Type:* string[]

---

##### `allowedClientIds`<sup>Required</sup> <a name="allowedClientIds" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.allowedClientIds"></a>

```typescript
public readonly allowedClientIds: string[];
```

- *Type:* string[]

---

##### `httpsEnabled`<sup>Required</sup> <a name="httpsEnabled" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.httpsEnabled"></a>

```typescript
public readonly httpsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `issuerHost`<sup>Required</sup> <a name="issuerHost" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.issuerHost"></a>

```typescript
public readonly issuerHost: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `scopesSupported`<sup>Required</sup> <a name="scopesSupported" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.scopesSupported"></a>

```typescript
public readonly scopesSupported: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityOidcProviderConfig <a name="IdentityOidcProviderConfig" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.Initializer"></a>

```typescript
import { identityOidcProvider } from '@cdktf/provider-vault'

const identityOidcProviderConfig: identityOidcProvider.IdentityOidcProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.name">name</a></code> | <code>string</code> | The name of the provider. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.allowedClientIds">allowedClientIds</a></code> | <code>string[]</code> | The client IDs that are permitted to use the provider. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.httpsEnabled">httpsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set to true if the issuer endpoint uses HTTPS. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider#id IdentityOidcProvider#id}. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.issuerHost">issuerHost</a></code> | <code>string</code> | The host for the issuer. Can be either host or host:port. |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.scopesSupported">scopesSupported</a></code> | <code>string[]</code> | The scopes available for requesting on the provider. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider#name IdentityOidcProvider#name}

---

##### `allowedClientIds`<sup>Optional</sup> <a name="allowedClientIds" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.allowedClientIds"></a>

```typescript
public readonly allowedClientIds: string[];
```

- *Type:* string[]

The client IDs that are permitted to use the provider.

If empty, no clients are allowed. If "*", all clients are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider#allowed_client_ids IdentityOidcProvider#allowed_client_ids}

---

##### `httpsEnabled`<sup>Optional</sup> <a name="httpsEnabled" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.httpsEnabled"></a>

```typescript
public readonly httpsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set to true if the issuer endpoint uses HTTPS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider#https_enabled IdentityOidcProvider#https_enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider#id IdentityOidcProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `issuerHost`<sup>Optional</sup> <a name="issuerHost" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.issuerHost"></a>

```typescript
public readonly issuerHost: string;
```

- *Type:* string

The host for the issuer. Can be either host or host:port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider#issuer_host IdentityOidcProvider#issuer_host}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider#namespace IdentityOidcProvider#namespace}

---

##### `scopesSupported`<sup>Optional</sup> <a name="scopesSupported" id="@cdktf/provider-vault.identityOidcProvider.IdentityOidcProviderConfig.property.scopesSupported"></a>

```typescript
public readonly scopesSupported: string[];
```

- *Type:* string[]

The scopes available for requesting on the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.23.0/docs/resources/identity_oidc_provider#scopes_supported IdentityOidcProvider#scopes_supported}

---



