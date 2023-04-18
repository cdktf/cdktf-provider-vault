# `vault_identity_group_member_entity_ids`

Refer to the Terraform Registory for docs: [`vault_identity_group_member_entity_ids`](https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_group_member_entity_ids).

# `identityGroupMemberEntityIds` Submodule <a name="`identityGroupMemberEntityIds` Submodule" id="@cdktf/provider-vault.identityGroupMemberEntityIds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroupMemberEntityIds <a name="IdentityGroupMemberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_group_member_entity_ids vault_identity_group_member_entity_ids}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktf/provider-vault'

new identityGroupMemberEntityIds.IdentityGroupMemberEntityIds(scope: Construct, id: string, config: IdentityGroupMemberEntityIdsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig">IdentityGroupMemberEntityIdsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig">IdentityGroupMemberEntityIdsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetExclusive">resetExclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetMemberEntityIds">resetMemberEntityIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetExclusive` <a name="resetExclusive" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetExclusive"></a>

```typescript
public resetExclusive(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMemberEntityIds` <a name="resetMemberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetMemberEntityIds"></a>

```typescript
public resetMemberEntityIds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktf/provider-vault'

identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktf/provider-vault'

identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktf/provider-vault'

identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusiveInput">exclusiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIdsInput">memberEntityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusive">exclusive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIds">memberEntityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `exclusiveInput`<sup>Optional</sup> <a name="exclusiveInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusiveInput"></a>

```typescript
public readonly exclusiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberEntityIdsInput`<sup>Optional</sup> <a name="memberEntityIdsInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIdsInput"></a>

```typescript
public readonly memberEntityIdsInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `exclusive`<sup>Required</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.exclusive"></a>

```typescript
public readonly exclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `memberEntityIds`<sup>Required</sup> <a name="memberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.memberEntityIds"></a>

```typescript
public readonly memberEntityIds: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIds.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupMemberEntityIdsConfig <a name="IdentityGroupMemberEntityIdsConfig" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.Initializer"></a>

```typescript
import { identityGroupMemberEntityIds } from '@cdktf/provider-vault'

const identityGroupMemberEntityIdsConfig: identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.groupId">groupId</a></code> | <code>string</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.exclusive">exclusive</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, allows the resource to manage member entity ids exclusively. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_group_member_entity_ids#id IdentityGroupMemberEntityIds#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.memberEntityIds">memberEntityIds</a></code> | <code>string[]</code> | Entity IDs to be assigned as group members. |
| <code><a href="#@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_group_member_entity_ids#group_id IdentityGroupMemberEntityIds#group_id}

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.exclusive"></a>

```typescript
public readonly exclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, allows the resource to manage member entity ids exclusively.

Beware of race conditions when disabling exclusive management

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_group_member_entity_ids#exclusive IdentityGroupMemberEntityIds#exclusive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_group_member_entity_ids#id IdentityGroupMemberEntityIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `memberEntityIds`<sup>Optional</sup> <a name="memberEntityIds" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.memberEntityIds"></a>

```typescript
public readonly memberEntityIds: string[];
```

- *Type:* string[]

Entity IDs to be assigned as group members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_group_member_entity_ids#member_entity_ids IdentityGroupMemberEntityIds#member_entity_ids}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupMemberEntityIds.IdentityGroupMemberEntityIdsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.0/docs/resources/identity_group_member_entity_ids#namespace IdentityGroupMemberEntityIds#namespace}

---



