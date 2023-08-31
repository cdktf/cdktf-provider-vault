# `vault_mfa_okta`

Refer to the Terraform Registory for docs: [`vault_mfa_okta`](https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta).

# `mfaOkta` Submodule <a name="`mfaOkta` Submodule" id="@cdktf/provider-vault.mfaOkta"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaOkta <a name="MfaOkta" id="@cdktf/provider-vault.mfaOkta.MfaOkta"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta vault_mfa_okta}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer"></a>

```typescript
import { mfaOkta } from '@cdktf/provider-vault'

new mfaOkta.MfaOkta(scope: Construct, id: string, config: MfaOktaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig">MfaOktaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.mfaOkta.MfaOkta.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig">MfaOktaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetBaseUrl">resetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetPrimaryEmail">resetPrimaryEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.resetUsernameFormat">resetUsernameFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.mfaOkta.MfaOkta.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.mfaOkta.MfaOkta.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.mfaOkta.MfaOkta.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.mfaOkta.MfaOkta.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.mfaOkta.MfaOkta.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.mfaOkta.MfaOkta.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.mfaOkta.MfaOkta.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.mfaOkta.MfaOkta.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.mfaOkta.MfaOkta.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBaseUrl` <a name="resetBaseUrl" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetBaseUrl"></a>

```typescript
public resetBaseUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPrimaryEmail` <a name="resetPrimaryEmail" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetPrimaryEmail"></a>

```typescript
public resetPrimaryEmail(): void
```

##### `resetUsernameFormat` <a name="resetUsernameFormat" id="@cdktf/provider-vault.mfaOkta.MfaOkta.resetUsernameFormat"></a>

```typescript
public resetUsernameFormat(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isConstruct"></a>

```typescript
import { mfaOkta } from '@cdktf/provider-vault'

mfaOkta.MfaOkta.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformElement"></a>

```typescript
import { mfaOkta } from '@cdktf/provider-vault'

mfaOkta.MfaOkta.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformResource"></a>

```typescript
import { mfaOkta } from '@cdktf/provider-vault'

mfaOkta.MfaOkta.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.mfaOkta.MfaOkta.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.apiTokenInput">apiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.mountAccessorInput">mountAccessorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.orgNameInput">orgNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.primaryEmailInput">primaryEmailInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.usernameFormatInput">usernameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.mountAccessor">mountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.orgName">orgName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.primaryEmail">primaryEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.usernameFormat">usernameFormat</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.apiTokenInput"></a>

```typescript
public readonly apiTokenInput: string;
```

- *Type:* string

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountAccessorInput`<sup>Optional</sup> <a name="mountAccessorInput" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.mountAccessorInput"></a>

```typescript
public readonly mountAccessorInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `orgNameInput`<sup>Optional</sup> <a name="orgNameInput" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.orgNameInput"></a>

```typescript
public readonly orgNameInput: string;
```

- *Type:* string

---

##### `primaryEmailInput`<sup>Optional</sup> <a name="primaryEmailInput" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.primaryEmailInput"></a>

```typescript
public readonly primaryEmailInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameFormatInput`<sup>Optional</sup> <a name="usernameFormatInput" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.usernameFormatInput"></a>

```typescript
public readonly usernameFormatInput: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.mountAccessor"></a>

```typescript
public readonly mountAccessor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `orgName`<sup>Required</sup> <a name="orgName" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.orgName"></a>

```typescript
public readonly orgName: string;
```

- *Type:* string

---

##### `primaryEmail`<sup>Required</sup> <a name="primaryEmail" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.primaryEmail"></a>

```typescript
public readonly primaryEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `usernameFormat`<sup>Required</sup> <a name="usernameFormat" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.usernameFormat"></a>

```typescript
public readonly usernameFormat: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOkta.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.mfaOkta.MfaOkta.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaOktaConfig <a name="MfaOktaConfig" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.Initializer"></a>

```typescript
import { mfaOkta } from '@cdktf/provider-vault'

const mfaOktaConfig: mfaOkta.MfaOktaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.apiToken">apiToken</a></code> | <code>string</code> | Okta API key. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.mountAccessor">mountAccessor</a></code> | <code>string</code> | The mount to tie this method to for use in automatic mappings. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.name">name</a></code> | <code>string</code> | Name of the MFA method. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.orgName">orgName</a></code> | <code>string</code> | Name of the organization to be used in the Okta API. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.baseUrl">baseUrl</a></code> | <code>string</code> | If set, will be used as the base domain for API requests. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.id">id</a></code> | <code>string</code> | ID computed by Vault. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.primaryEmail">primaryEmail</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the username will only match the primary email for the account. |
| <code><a href="#@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.usernameFormat">usernameFormat</a></code> | <code>string</code> | A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

Okta API key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta#api_token MfaOkta#api_token}

---

##### `mountAccessor`<sup>Required</sup> <a name="mountAccessor" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.mountAccessor"></a>

```typescript
public readonly mountAccessor: string;
```

- *Type:* string

The mount to tie this method to for use in automatic mappings.

The mapping will use the Name field of Aliases associated with this mount as the username in the mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta#mount_accessor MfaOkta#mount_accessor}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the MFA method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta#name MfaOkta#name}

---

##### `orgName`<sup>Required</sup> <a name="orgName" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.orgName"></a>

```typescript
public readonly orgName: string;
```

- *Type:* string

Name of the organization to be used in the Okta API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta#org_name MfaOkta#org_name}

---

##### `baseUrl`<sup>Optional</sup> <a name="baseUrl" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

If set, will be used as the base domain for API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta#base_url MfaOkta#base_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID computed by Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta#id MfaOkta#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta#namespace MfaOkta#namespace}

---

##### `primaryEmail`<sup>Optional</sup> <a name="primaryEmail" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.primaryEmail"></a>

```typescript
public readonly primaryEmail: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the username will only match the primary email for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta#primary_email MfaOkta#primary_email}

---

##### `usernameFormat`<sup>Optional</sup> <a name="usernameFormat" id="@cdktf/provider-vault.mfaOkta.MfaOktaConfig.property.usernameFormat"></a>

```typescript
public readonly usernameFormat: string;
```

- *Type:* string

A format string for mapping Identity names to MFA method names. Values to substitute should be placed in `{{}}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.0/docs/resources/mfa_okta#username_format MfaOkta#username_format}

---



