# `data_vault_ldap_static_credentials`

Refer to the Terraform Registory for docs: [`data_vault_ldap_static_credentials`](https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_static_credentials).

# `dataVaultLdapStaticCredentials` Submodule <a name="`dataVaultLdapStaticCredentials` Submodule" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultLdapStaticCredentials <a name="DataVaultLdapStaticCredentials" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_static_credentials vault_ldap_static_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer"></a>

```typescript
import { dataVaultLdapStaticCredentials } from '@cdktf/provider-vault'

new dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials(scope: Construct, id: string, config: DataVaultLdapStaticCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig">DataVaultLdapStaticCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig">DataVaultLdapStaticCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct"></a>

```typescript
import { dataVaultLdapStaticCredentials } from '@cdktf/provider-vault'

dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement"></a>

```typescript
import { dataVaultLdapStaticCredentials } from '@cdktf/provider-vault'

dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource"></a>

```typescript
import { dataVaultLdapStaticCredentials } from '@cdktf/provider-vault'

dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastPassword">lastPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastVaultRotation">lastVaultRotation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `lastPassword`<sup>Required</sup> <a name="lastPassword" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastPassword"></a>

```typescript
public readonly lastPassword: string;
```

- *Type:* string

---

##### `lastVaultRotation`<sup>Required</sup> <a name="lastVaultRotation" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.lastVaultRotation"></a>

```typescript
public readonly lastVaultRotation: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultLdapStaticCredentialsConfig <a name="DataVaultLdapStaticCredentialsConfig" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.Initializer"></a>

```typescript
import { dataVaultLdapStaticCredentials } from '@cdktf/provider-vault'

const dataVaultLdapStaticCredentialsConfig: dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.mount">mount</a></code> | <code>string</code> | LDAP Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

LDAP Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_static_credentials#mount DataVaultLdapStaticCredentials#mount}

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_static_credentials#role_name DataVaultLdapStaticCredentials#role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_static_credentials#id DataVaultLdapStaticCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultLdapStaticCredentials.DataVaultLdapStaticCredentialsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.18.0/docs/data-sources/ldap_static_credentials#namespace DataVaultLdapStaticCredentials#namespace}

---



