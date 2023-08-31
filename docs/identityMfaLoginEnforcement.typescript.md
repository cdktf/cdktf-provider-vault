# `vault_identity_mfa_login_enforcement`

Refer to the Terraform Registory for docs: [`vault_identity_mfa_login_enforcement`](https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement).

# `identityMfaLoginEnforcement` Submodule <a name="`identityMfaLoginEnforcement` Submodule" id="@cdktf/provider-vault.identityMfaLoginEnforcement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMfaLoginEnforcement <a name="IdentityMfaLoginEnforcement" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement vault_identity_mfa_login_enforcement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer"></a>

```typescript
import { identityMfaLoginEnforcement } from '@cdktf/provider-vault'

new identityMfaLoginEnforcement.IdentityMfaLoginEnforcement(scope: Construct, id: string, config: IdentityMfaLoginEnforcementConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig">IdentityMfaLoginEnforcementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig">IdentityMfaLoginEnforcementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodAccessors">resetAuthMethodAccessors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodTypes">resetAuthMethodTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityEntityIds">resetIdentityEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityGroupIds">resetIdentityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAuthMethodAccessors` <a name="resetAuthMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodAccessors"></a>

```typescript
public resetAuthMethodAccessors(): void
```

##### `resetAuthMethodTypes` <a name="resetAuthMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetAuthMethodTypes"></a>

```typescript
public resetAuthMethodTypes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentityEntityIds` <a name="resetIdentityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityEntityIds"></a>

```typescript
public resetIdentityEntityIds(): void
```

##### `resetIdentityGroupIds` <a name="resetIdentityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetIdentityGroupIds"></a>

```typescript
public resetIdentityGroupIds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct"></a>

```typescript
import { identityMfaLoginEnforcement } from '@cdktf/provider-vault'

identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement"></a>

```typescript
import { identityMfaLoginEnforcement } from '@cdktf/provider-vault'

identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource"></a>

```typescript
import { identityMfaLoginEnforcement } from '@cdktf/provider-vault'

identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespacePath">namespacePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessorsInput">authMethodAccessorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypesInput">authMethodTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIdsInput">identityEntityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIdsInput">identityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIdsInput">mfaMethodIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessors">authMethodAccessors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypes">authMethodTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIds">identityEntityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIds">identityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIds">mfaMethodIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `namespacePath`<sup>Required</sup> <a name="namespacePath" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespacePath"></a>

```typescript
public readonly namespacePath: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `authMethodAccessorsInput`<sup>Optional</sup> <a name="authMethodAccessorsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessorsInput"></a>

```typescript
public readonly authMethodAccessorsInput: string[];
```

- *Type:* string[]

---

##### `authMethodTypesInput`<sup>Optional</sup> <a name="authMethodTypesInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypesInput"></a>

```typescript
public readonly authMethodTypesInput: string[];
```

- *Type:* string[]

---

##### `identityEntityIdsInput`<sup>Optional</sup> <a name="identityEntityIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIdsInput"></a>

```typescript
public readonly identityEntityIdsInput: string[];
```

- *Type:* string[]

---

##### `identityGroupIdsInput`<sup>Optional</sup> <a name="identityGroupIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIdsInput"></a>

```typescript
public readonly identityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mfaMethodIdsInput`<sup>Optional</sup> <a name="mfaMethodIdsInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIdsInput"></a>

```typescript
public readonly mfaMethodIdsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `authMethodAccessors`<sup>Required</sup> <a name="authMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodAccessors"></a>

```typescript
public readonly authMethodAccessors: string[];
```

- *Type:* string[]

---

##### `authMethodTypes`<sup>Required</sup> <a name="authMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.authMethodTypes"></a>

```typescript
public readonly authMethodTypes: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `identityEntityIds`<sup>Required</sup> <a name="identityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityEntityIds"></a>

```typescript
public readonly identityEntityIds: string[];
```

- *Type:* string[]

---

##### `identityGroupIds`<sup>Required</sup> <a name="identityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.identityGroupIds"></a>

```typescript
public readonly identityGroupIds: string[];
```

- *Type:* string[]

---

##### `mfaMethodIds`<sup>Required</sup> <a name="mfaMethodIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.mfaMethodIds"></a>

```typescript
public readonly mfaMethodIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcement.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMfaLoginEnforcementConfig <a name="IdentityMfaLoginEnforcementConfig" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.Initializer"></a>

```typescript
import { identityMfaLoginEnforcement } from '@cdktf/provider-vault'

const identityMfaLoginEnforcementConfig: identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.mfaMethodIds">mfaMethodIds</a></code> | <code>string[]</code> | Set of MFA method UUIDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.name">name</a></code> | <code>string</code> | Login enforcement name. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodAccessors">authMethodAccessors</a></code> | <code>string[]</code> | Set of auth method accessor IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodTypes">authMethodTypes</a></code> | <code>string[]</code> | Set of auth method types. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityEntityIds">identityEntityIds</a></code> | <code>string[]</code> | Set of identity entity IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityGroupIds">identityGroupIds</a></code> | <code>string[]</code> | Set of identity group IDs. |
| <code><a href="#@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mfaMethodIds`<sup>Required</sup> <a name="mfaMethodIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.mfaMethodIds"></a>

```typescript
public readonly mfaMethodIds: string[];
```

- *Type:* string[]

Set of MFA method UUIDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#mfa_method_ids IdentityMfaLoginEnforcement#mfa_method_ids}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Login enforcement name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#name IdentityMfaLoginEnforcement#name}

---

##### `authMethodAccessors`<sup>Optional</sup> <a name="authMethodAccessors" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodAccessors"></a>

```typescript
public readonly authMethodAccessors: string[];
```

- *Type:* string[]

Set of auth method accessor IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#auth_method_accessors IdentityMfaLoginEnforcement#auth_method_accessors}

---

##### `authMethodTypes`<sup>Optional</sup> <a name="authMethodTypes" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.authMethodTypes"></a>

```typescript
public readonly authMethodTypes: string[];
```

- *Type:* string[]

Set of auth method types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#auth_method_types IdentityMfaLoginEnforcement#auth_method_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#id IdentityMfaLoginEnforcement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identityEntityIds`<sup>Optional</sup> <a name="identityEntityIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityEntityIds"></a>

```typescript
public readonly identityEntityIds: string[];
```

- *Type:* string[]

Set of identity entity IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#identity_entity_ids IdentityMfaLoginEnforcement#identity_entity_ids}

---

##### `identityGroupIds`<sup>Optional</sup> <a name="identityGroupIds" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.identityGroupIds"></a>

```typescript
public readonly identityGroupIds: string[];
```

- *Type:* string[]

Set of identity group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#identity_group_ids IdentityMfaLoginEnforcement#identity_group_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityMfaLoginEnforcement.IdentityMfaLoginEnforcementConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/identity_mfa_login_enforcement#namespace IdentityMfaLoginEnforcement#namespace}

---



