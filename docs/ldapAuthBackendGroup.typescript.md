# `ldapAuthBackendGroup` Submodule <a name="`ldapAuthBackendGroup` Submodule" id="@cdktf/provider-vault.ldapAuthBackendGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapAuthBackendGroup <a name="LdapAuthBackendGroup" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group vault_ldap_auth_backend_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer"></a>

```typescript
import { ldapAuthBackendGroup } from '@cdktf/provider-vault'

new ldapAuthBackendGroup.LdapAuthBackendGroup(scope: Construct, id: string, config: LdapAuthBackendGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig">LdapAuthBackendGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig">LdapAuthBackendGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetPolicies">resetPolicies</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LdapAuthBackendGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isConstruct"></a>

```typescript
import { ldapAuthBackendGroup } from '@cdktf/provider-vault'

ldapAuthBackendGroup.LdapAuthBackendGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformElement"></a>

```typescript
import { ldapAuthBackendGroup } from '@cdktf/provider-vault'

ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformResource"></a>

```typescript
import { ldapAuthBackendGroup } from '@cdktf/provider-vault'

ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.generateConfigForImport"></a>

```typescript
import { ldapAuthBackendGroup } from '@cdktf/provider-vault'

ldapAuthBackendGroup.LdapAuthBackendGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LdapAuthBackendGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LdapAuthBackendGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LdapAuthBackendGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LdapAuthBackendGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.groupnameInput">groupnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.groupname">groupname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `groupnameInput`<sup>Optional</sup> <a name="groupnameInput" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.groupnameInput"></a>

```typescript
public readonly groupnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `groupname`<sup>Required</sup> <a name="groupname" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.groupname"></a>

```typescript
public readonly groupname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapAuthBackendGroupConfig <a name="LdapAuthBackendGroupConfig" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.Initializer"></a>

```typescript
import { ldapAuthBackendGroup } from '@cdktf/provider-vault'

const ldapAuthBackendGroupConfig: ldapAuthBackendGroup.LdapAuthBackendGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.groupname">groupname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group#groupname LdapAuthBackendGroup#groupname}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.backend">backend</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group#backend LdapAuthBackendGroup#backend}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group#id LdapAuthBackendGroup#id}. |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.policies">policies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group#policies LdapAuthBackendGroup#policies}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupname`<sup>Required</sup> <a name="groupname" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.groupname"></a>

```typescript
public readonly groupname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group#groupname LdapAuthBackendGroup#groupname}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group#backend LdapAuthBackendGroup#backend}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group#id LdapAuthBackendGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group#namespace LdapAuthBackendGroup#namespace}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-vault.ldapAuthBackendGroup.LdapAuthBackendGroupConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.1.0/docs/resources/ldap_auth_backend_group#policies LdapAuthBackendGroup#policies}.

---



