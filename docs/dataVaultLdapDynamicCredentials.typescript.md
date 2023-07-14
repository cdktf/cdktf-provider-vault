# `data_vault_ldap_dynamic_credentials`

Refer to the Terraform Registory for docs: [`data_vault_ldap_dynamic_credentials`](https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_dynamic_credentials).

# `dataVaultLdapDynamicCredentials` Submodule <a name="`dataVaultLdapDynamicCredentials` Submodule" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultLdapDynamicCredentials <a name="DataVaultLdapDynamicCredentials" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_dynamic_credentials vault_ldap_dynamic_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer"></a>

```typescript
import { dataVaultLdapDynamicCredentials } from '@cdktf/provider-vault'

new dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials(scope: Construct, id: string, config: DataVaultLdapDynamicCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig">DataVaultLdapDynamicCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig">DataVaultLdapDynamicCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isConstruct"></a>

```typescript
import { dataVaultLdapDynamicCredentials } from '@cdktf/provider-vault'

dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformElement"></a>

```typescript
import { dataVaultLdapDynamicCredentials } from '@cdktf/provider-vault'

dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformDataSource"></a>

```typescript
import { dataVaultLdapDynamicCredentials } from '@cdktf/provider-vault'

dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.distinguishedNames">distinguishedNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseRenewable">leaseRenewable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `distinguishedNames`<sup>Required</sup> <a name="distinguishedNames" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.distinguishedNames"></a>

```typescript
public readonly distinguishedNames: string[];
```

- *Type:* string[]

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.leaseRenewable"></a>

```typescript
public readonly leaseRenewable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultLdapDynamicCredentialsConfig <a name="DataVaultLdapDynamicCredentialsConfig" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.Initializer"></a>

```typescript
import { dataVaultLdapDynamicCredentials } from '@cdktf/provider-vault'

const dataVaultLdapDynamicCredentialsConfig: dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.mount">mount</a></code> | <code>string</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_dynamic_credentials#id DataVaultLdapDynamicCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_dynamic_credentials#mount DataVaultLdapDynamicCredentials#mount}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_dynamic_credentials#role_name DataVaultLdapDynamicCredentials#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_dynamic_credentials#id DataVaultLdapDynamicCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapDynamicCredentials.DataVaultLdapDynamicCredentialsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_dynamic_credentials#namespace DataVaultLdapDynamicCredentials#namespace}

---



