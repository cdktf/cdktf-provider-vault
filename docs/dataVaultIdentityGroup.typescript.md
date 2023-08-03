# `data_vault_identity_group`

Refer to the Terraform Registory for docs: [`data_vault_identity_group`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/identity_group).

# `dataVaultIdentityGroup` Submodule <a name="`dataVaultIdentityGroup` Submodule" id="@cdktf/provider-vault.dataVaultIdentityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultIdentityGroup <a name="DataVaultIdentityGroup" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/identity_group vault_identity_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer"></a>

```typescript
import { dataVaultIdentityGroup } from '@cdktf/provider-vault'

new dataVaultIdentityGroup.DataVaultIdentityGroup(scope: Construct, id: string, config?: DataVaultIdentityGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig">DataVaultIdentityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig">DataVaultIdentityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasId">resetAliasId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasMountAccessor">resetAliasMountAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasName">resetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAliasId` <a name="resetAliasId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasId"></a>

```typescript
public resetAliasId(): void
```

##### `resetAliasMountAccessor` <a name="resetAliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasMountAccessor"></a>

```typescript
public resetAliasMountAccessor(): void
```

##### `resetAliasName` <a name="resetAliasName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetAliasName"></a>

```typescript
public resetAliasName(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetGroupName` <a name="resetGroupName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct"></a>

```typescript
import { dataVaultIdentityGroup } from '@cdktf/provider-vault'

dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement"></a>

```typescript
import { dataVaultIdentityGroup } from '@cdktf/provider-vault'

dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource"></a>

```typescript
import { dataVaultIdentityGroup } from '@cdktf/provider-vault'

dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCanonicalId">aliasCanonicalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCreationTime">aliasCreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasLastUpdateTime">aliasLastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMergedFromCanonicalIds">aliasMergedFromCanonicalIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMetadata">aliasMetadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountPath">aliasMountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountType">aliasMountType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dataJson">dataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lastUpdateTime">lastUpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberEntityIds">memberEntityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberGroupIds">memberGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.modifyIndex">modifyIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceId">namespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.parentGroupIds">parentGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasIdInput">aliasIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessorInput">aliasMountAccessorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasNameInput">aliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasId">aliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessor">aliasMountAccessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasName">aliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `aliasCanonicalId`<sup>Required</sup> <a name="aliasCanonicalId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCanonicalId"></a>

```typescript
public readonly aliasCanonicalId: string;
```

- *Type:* string

---

##### `aliasCreationTime`<sup>Required</sup> <a name="aliasCreationTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasCreationTime"></a>

```typescript
public readonly aliasCreationTime: string;
```

- *Type:* string

---

##### `aliasLastUpdateTime`<sup>Required</sup> <a name="aliasLastUpdateTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasLastUpdateTime"></a>

```typescript
public readonly aliasLastUpdateTime: string;
```

- *Type:* string

---

##### `aliasMergedFromCanonicalIds`<sup>Required</sup> <a name="aliasMergedFromCanonicalIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMergedFromCanonicalIds"></a>

```typescript
public readonly aliasMergedFromCanonicalIds: string[];
```

- *Type:* string[]

---

##### `aliasMetadata`<sup>Required</sup> <a name="aliasMetadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMetadata"></a>

```typescript
public readonly aliasMetadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `aliasMountPath`<sup>Required</sup> <a name="aliasMountPath" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountPath"></a>

```typescript
public readonly aliasMountPath: string;
```

- *Type:* string

---

##### `aliasMountType`<sup>Required</sup> <a name="aliasMountType" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountType"></a>

```typescript
public readonly aliasMountType: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.dataJson"></a>

```typescript
public readonly dataJson: string;
```

- *Type:* string

---

##### `lastUpdateTime`<sup>Required</sup> <a name="lastUpdateTime" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.lastUpdateTime"></a>

```typescript
public readonly lastUpdateTime: string;
```

- *Type:* string

---

##### `memberEntityIds`<sup>Required</sup> <a name="memberEntityIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberEntityIds"></a>

```typescript
public readonly memberEntityIds: string[];
```

- *Type:* string[]

---

##### `memberGroupIds`<sup>Required</sup> <a name="memberGroupIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.memberGroupIds"></a>

```typescript
public readonly memberGroupIds: string[];
```

- *Type:* string[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `modifyIndex`<sup>Required</sup> <a name="modifyIndex" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.modifyIndex"></a>

```typescript
public readonly modifyIndex: number;
```

- *Type:* number

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

---

##### `parentGroupIds`<sup>Required</sup> <a name="parentGroupIds" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.parentGroupIds"></a>

```typescript
public readonly parentGroupIds: string[];
```

- *Type:* string[]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `aliasIdInput`<sup>Optional</sup> <a name="aliasIdInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasIdInput"></a>

```typescript
public readonly aliasIdInput: string;
```

- *Type:* string

---

##### `aliasMountAccessorInput`<sup>Optional</sup> <a name="aliasMountAccessorInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessorInput"></a>

```typescript
public readonly aliasMountAccessorInput: string;
```

- *Type:* string

---

##### `aliasNameInput`<sup>Optional</sup> <a name="aliasNameInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasNameInput"></a>

```typescript
public readonly aliasNameInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `aliasId`<sup>Required</sup> <a name="aliasId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasId"></a>

```typescript
public readonly aliasId: string;
```

- *Type:* string

---

##### `aliasMountAccessor`<sup>Required</sup> <a name="aliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasMountAccessor"></a>

```typescript
public readonly aliasMountAccessor: string;
```

- *Type:* string

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultIdentityGroupConfig <a name="DataVaultIdentityGroupConfig" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.Initializer"></a>

```typescript
import { dataVaultIdentityGroup } from '@cdktf/provider-vault'

const dataVaultIdentityGroupConfig: dataVaultIdentityGroup.DataVaultIdentityGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasId">aliasId</a></code> | <code>string</code> | ID of the alias. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasMountAccessor">aliasMountAccessor</a></code> | <code>string</code> | Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasName">aliasName</a></code> | <code>string</code> | Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupId">groupId</a></code> | <code>string</code> | ID of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupName">groupName</a></code> | <code>string</code> | Name of the group. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aliasId`<sup>Optional</sup> <a name="aliasId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasId"></a>

```typescript
public readonly aliasId: string;
```

- *Type:* string

ID of the alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/identity_group#alias_id DataVaultIdentityGroup#alias_id}

---

##### `aliasMountAccessor`<sup>Optional</sup> <a name="aliasMountAccessor" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasMountAccessor"></a>

```typescript
public readonly aliasMountAccessor: string;
```

- *Type:* string

Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/identity_group#alias_mount_accessor DataVaultIdentityGroup#alias_mount_accessor}

---

##### `aliasName`<sup>Optional</sup> <a name="aliasName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/identity_group#alias_name DataVaultIdentityGroup#alias_name}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

ID of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/identity_group#group_id DataVaultIdentityGroup#group_id}

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Name of the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/identity_group#group_name DataVaultIdentityGroup#group_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/identity_group#id DataVaultIdentityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultIdentityGroup.DataVaultIdentityGroupConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/data-sources/identity_group#namespace DataVaultIdentityGroup#namespace}

---



