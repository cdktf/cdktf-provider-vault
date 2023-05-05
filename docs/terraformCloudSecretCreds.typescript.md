# `vault_terraform_cloud_secret_creds`

Refer to the Terraform Registory for docs: [`vault_terraform_cloud_secret_creds`](https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_creds).

# `terraformCloudSecretCreds` Submodule <a name="`terraformCloudSecretCreds` Submodule" id="@cdktf/provider-vault.terraformCloudSecretCreds"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TerraformCloudSecretCreds <a name="TerraformCloudSecretCreds" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_creds vault_terraform_cloud_secret_creds}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer"></a>

```typescript
import { terraformCloudSecretCreds } from '@cdktf/provider-vault'

new terraformCloudSecretCreds.TerraformCloudSecretCreds(scope: Construct, id: string, config: TerraformCloudSecretCredsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig">TerraformCloudSecretCredsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig">TerraformCloudSecretCredsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isConstruct"></a>

```typescript
import { terraformCloudSecretCreds } from '@cdktf/provider-vault'

terraformCloudSecretCreds.TerraformCloudSecretCreds.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformElement"></a>

```typescript
import { terraformCloudSecretCreds } from '@cdktf/provider-vault'

terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformResource"></a>

```typescript
import { terraformCloudSecretCreds } from '@cdktf/provider-vault'

terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.teamId">teamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.tokenId">tokenId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.teamId"></a>

```typescript
public readonly teamId: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `tokenId`<sup>Required</sup> <a name="tokenId" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.tokenId"></a>

```typescript
public readonly tokenId: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCreds.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TerraformCloudSecretCredsConfig <a name="TerraformCloudSecretCredsConfig" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.Initializer"></a>

```typescript
import { terraformCloudSecretCreds } from '@cdktf/provider-vault'

const terraformCloudSecretCredsConfig: terraformCloudSecretCreds.TerraformCloudSecretCredsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.backend">backend</a></code> | <code>string</code> | Terraform Cloud secret backend to generate tokens from. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.role">role</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_creds#id TerraformCloudSecretCreds#id}. |
| <code><a href="#@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Terraform Cloud secret backend to generate tokens from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_creds#backend TerraformCloudSecretCreds#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_creds#role TerraformCloudSecretCreds#role}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_creds#id TerraformCloudSecretCreds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.terraformCloudSecretCreds.TerraformCloudSecretCredsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/resources/terraform_cloud_secret_creds#namespace TerraformCloudSecretCreds#namespace}

---



