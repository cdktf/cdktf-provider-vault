# `vault_identity_group_policies`

Refer to the Terraform Registory for docs: [`vault_identity_group_policies`](https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_group_policies).

# `identityGroupPolicies` Submodule <a name="`identityGroupPolicies` Submodule" id="@cdktf/provider-vault.identityGroupPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityGroupPolicies <a name="IdentityGroupPolicies" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_group_policies vault_identity_group_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.Initializer"></a>

```typescript
import { identityGroupPolicies } from '@cdktf/provider-vault'

new identityGroupPolicies.IdentityGroupPolicies(scope: Construct, id: string, config: IdentityGroupPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig">IdentityGroupPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig">IdentityGroupPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.resetExclusive">resetExclusive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetExclusive` <a name="resetExclusive" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.resetExclusive"></a>

```typescript
public resetExclusive(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.isConstruct"></a>

```typescript
import { identityGroupPolicies } from '@cdktf/provider-vault'

identityGroupPolicies.IdentityGroupPolicies.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.isTerraformElement"></a>

```typescript
import { identityGroupPolicies } from '@cdktf/provider-vault'

identityGroupPolicies.IdentityGroupPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.isTerraformResource"></a>

```typescript
import { identityGroupPolicies } from '@cdktf/provider-vault'

identityGroupPolicies.IdentityGroupPolicies.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.exclusiveInput">exclusiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.exclusive">exclusive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `exclusiveInput`<sup>Optional</sup> <a name="exclusiveInput" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.exclusiveInput"></a>

```typescript
public readonly exclusiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `exclusive`<sup>Required</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.exclusive"></a>

```typescript
public readonly exclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityGroupPoliciesConfig <a name="IdentityGroupPoliciesConfig" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.Initializer"></a>

```typescript
import { identityGroupPolicies } from '@cdktf/provider-vault'

const identityGroupPoliciesConfig: identityGroupPolicies.IdentityGroupPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.groupId">groupId</a></code> | <code>string</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.policies">policies</a></code> | <code>string[]</code> | Policies to be tied to the group. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.exclusive">exclusive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Should the resource manage policies exclusively? Beware of race conditions when disabling exclusive management. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_group_policies#id IdentityGroupPolicies#id}. |
| <code><a href="#@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_group_policies#group_id IdentityGroupPolicies#group_id}

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

Policies to be tied to the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_group_policies#policies IdentityGroupPolicies#policies}

---

##### `exclusive`<sup>Optional</sup> <a name="exclusive" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.exclusive"></a>

```typescript
public readonly exclusive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Should the resource manage policies exclusively? Beware of race conditions when disabling exclusive management.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_group_policies#exclusive IdentityGroupPolicies#exclusive}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_group_policies#id IdentityGroupPolicies#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.identityGroupPolicies.IdentityGroupPoliciesConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/identity_group_policies#namespace IdentityGroupPolicies#namespace}

---



