# `rgpPolicy` Submodule <a name="`rgpPolicy` Submodule" id="@cdktf/provider-vault.rgpPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RgpPolicy <a name="RgpPolicy" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/rgp_policy vault_rgp_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.Initializer"></a>

```typescript
import { rgpPolicy } from '@cdktf/provider-vault'

new rgpPolicy.RgpPolicy(scope: Construct, id: string, config: RgpPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig">RgpPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig">RgpPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.isConstruct"></a>

```typescript
import { rgpPolicy } from '@cdktf/provider-vault'

rgpPolicy.RgpPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.isTerraformElement"></a>

```typescript
import { rgpPolicy } from '@cdktf/provider-vault'

rgpPolicy.RgpPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.isTerraformResource"></a>

```typescript
import { rgpPolicy } from '@cdktf/provider-vault'

rgpPolicy.RgpPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.enforcementLevelInput">enforcementLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.enforcementLevel">enforcementLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.policy">policy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enforcementLevelInput`<sup>Optional</sup> <a name="enforcementLevelInput" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.enforcementLevelInput"></a>

```typescript
public readonly enforcementLevelInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `enforcementLevel`<sup>Required</sup> <a name="enforcementLevel" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.enforcementLevel"></a>

```typescript
public readonly enforcementLevel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.rgpPolicy.RgpPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RgpPolicyConfig <a name="RgpPolicyConfig" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.Initializer"></a>

```typescript
import { rgpPolicy } from '@cdktf/provider-vault'

const rgpPolicyConfig: rgpPolicy.RgpPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.enforcementLevel">enforcementLevel</a></code> | <code>string</code> | Enforcement level of Sentinel policy. Can be one of: 'advisory', 'soft-mandatory' or 'hard-mandatory'. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.name">name</a></code> | <code>string</code> | Name of the policy. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.policy">policy</a></code> | <code>string</code> | The policy document. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rgp_policy#id RgpPolicy#id}. |
| <code><a href="#@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enforcementLevel`<sup>Required</sup> <a name="enforcementLevel" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.enforcementLevel"></a>

```typescript
public readonly enforcementLevel: string;
```

- *Type:* string

Enforcement level of Sentinel policy. Can be one of: 'advisory', 'soft-mandatory' or 'hard-mandatory'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rgp_policy#enforcement_level RgpPolicy#enforcement_level}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the policy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rgp_policy#name RgpPolicy#name}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

The policy document.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rgp_policy#policy RgpPolicy#policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rgp_policy#id RgpPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rgpPolicy.RgpPolicyConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/rgp_policy#namespace RgpPolicy#namespace}

---


