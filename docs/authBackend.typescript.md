# `vault_auth_backend`

Refer to the Terraform Registory for docs: [`vault_auth_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend).

# `authBackend` Submodule <a name="`authBackend` Submodule" id="@cdktf/provider-vault.authBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthBackend <a name="AuthBackend" id="@cdktf/provider-vault.authBackend.AuthBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend vault_auth_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.authBackend.AuthBackend.Initializer"></a>

```typescript
import { authBackend } from '@cdktf/provider-vault'

new authBackend.AuthBackend(scope: Construct, id: string, config: AuthBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig">AuthBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.authBackend.AuthBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig">AuthBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.putTune">putTune</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.resetTune">resetTune</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.authBackend.AuthBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.authBackend.AuthBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.authBackend.AuthBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.authBackend.AuthBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.authBackend.AuthBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.authBackend.AuthBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.authBackend.AuthBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.authBackend.AuthBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.authBackend.AuthBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTune` <a name="putTune" id="@cdktf/provider-vault.authBackend.AuthBackend.putTune"></a>

```typescript
public putTune(value: IResolvable | AuthBackendTune[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.authBackend.AuthBackend.putTune.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.authBackend.AuthBackendTune">AuthBackendTune</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.authBackend.AuthBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.authBackend.AuthBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.authBackend.AuthBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-vault.authBackend.AuthBackend.resetLocal"></a>

```typescript
public resetLocal(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.authBackend.AuthBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.authBackend.AuthBackend.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTune` <a name="resetTune" id="@cdktf/provider-vault.authBackend.AuthBackend.resetTune"></a>

```typescript
public resetTune(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.authBackend.AuthBackend.isConstruct"></a>

```typescript
import { authBackend } from '@cdktf/provider-vault'

authBackend.AuthBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.authBackend.AuthBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.authBackend.AuthBackend.isTerraformElement"></a>

```typescript
import { authBackend } from '@cdktf/provider-vault'

authBackend.AuthBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.authBackend.AuthBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.authBackend.AuthBackend.isTerraformResource"></a>

```typescript
import { authBackend } from '@cdktf/provider-vault'

authBackend.AuthBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.authBackend.AuthBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.accessor">accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.tune">tune</a></code> | <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList">AuthBackendTuneList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.localInput">localInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.tuneInput">tuneInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.authBackend.AuthBackendTune">AuthBackendTune</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.authBackend.AuthBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.authBackend.AuthBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.authBackend.AuthBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.authBackend.AuthBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.authBackend.AuthBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.authBackend.AuthBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.authBackend.AuthBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.authBackend.AuthBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.authBackend.AuthBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.authBackend.AuthBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.authBackend.AuthBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.authBackend.AuthBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.authBackend.AuthBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.authBackend.AuthBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktf/provider-vault.authBackend.AuthBackend.property.accessor"></a>

```typescript
public readonly accessor: string;
```

- *Type:* string

---

##### `tune`<sup>Required</sup> <a name="tune" id="@cdktf/provider-vault.authBackend.AuthBackend.property.tune"></a>

```typescript
public readonly tune: AuthBackendTuneList;
```

- *Type:* <a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList">AuthBackendTuneList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.localInput"></a>

```typescript
public readonly localInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `tuneInput`<sup>Optional</sup> <a name="tuneInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.tuneInput"></a>

```typescript
public readonly tuneInput: IResolvable | AuthBackendTune[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.authBackend.AuthBackendTune">AuthBackendTune</a>[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.authBackend.AuthBackend.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.authBackend.AuthBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.authBackend.AuthBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.authBackend.AuthBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-vault.authBackend.AuthBackend.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.authBackend.AuthBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.authBackend.AuthBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.authBackend.AuthBackend.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.authBackend.AuthBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthBackendConfig <a name="AuthBackendConfig" id="@cdktf/provider-vault.authBackend.AuthBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.Initializer"></a>

```typescript
import { authBackend } from '@cdktf/provider-vault'

const authBackendConfig: authBackend.AuthBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.type">type</a></code> | <code>string</code> | Name of the auth backend. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.description">description</a></code> | <code>string</code> | The description of the auth backend. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#id AuthBackend#id}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.local">local</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies if the auth method is local only. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.path">path</a></code> | <code>string</code> | path to mount the backend. This defaults to the type. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendConfig.property.tune">tune</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.authBackend.AuthBackendTune">AuthBackendTune</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#tune AuthBackend#tune}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Name of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#type AuthBackend#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the auth backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#description AuthBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#disable_remount AuthBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#id AuthBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.local"></a>

```typescript
public readonly local: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies if the auth method is local only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#local AuthBackend#local}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#namespace AuthBackend#namespace}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

path to mount the backend. This defaults to the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#path AuthBackend#path}

---

##### `tune`<sup>Optional</sup> <a name="tune" id="@cdktf/provider-vault.authBackend.AuthBackendConfig.property.tune"></a>

```typescript
public readonly tune: IResolvable | AuthBackendTune[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.authBackend.AuthBackendTune">AuthBackendTune</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#tune AuthBackend#tune}.

---

### AuthBackendTune <a name="AuthBackendTune" id="@cdktf/provider-vault.authBackend.AuthBackendTune"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.authBackend.AuthBackendTune.Initializer"></a>

```typescript
import { authBackend } from '@cdktf/provider-vault'

const authBackendTune: authBackend.AuthBackendTune = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#allowed_response_headers AuthBackend#allowed_response_headers}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#audit_non_hmac_request_keys AuthBackend#audit_non_hmac_request_keys}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#audit_non_hmac_response_keys AuthBackend#audit_non_hmac_response_keys}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#default_lease_ttl AuthBackend#default_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#listing_visibility AuthBackend#listing_visibility}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#max_lease_ttl AuthBackend#max_lease_ttl}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#passthrough_request_headers AuthBackend#passthrough_request_headers}. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTune.property.tokenType">tokenType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#token_type AuthBackend#token_type}. |

---

##### `allowedResponseHeaders`<sup>Optional</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#allowed_response_headers AuthBackend#allowed_response_headers}.

---

##### `auditNonHmacRequestKeys`<sup>Optional</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#audit_non_hmac_request_keys AuthBackend#audit_non_hmac_request_keys}.

---

##### `auditNonHmacResponseKeys`<sup>Optional</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#audit_non_hmac_response_keys AuthBackend#audit_non_hmac_response_keys}.

---

##### `defaultLeaseTtl`<sup>Optional</sup> <a name="defaultLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.defaultLeaseTtl"></a>

```typescript
public readonly defaultLeaseTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#default_lease_ttl AuthBackend#default_lease_ttl}.

---

##### `listingVisibility`<sup>Optional</sup> <a name="listingVisibility" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#listing_visibility AuthBackend#listing_visibility}.

---

##### `maxLeaseTtl`<sup>Optional</sup> <a name="maxLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.maxLeaseTtl"></a>

```typescript
public readonly maxLeaseTtl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#max_lease_ttl AuthBackend#max_lease_ttl}.

---

##### `passthroughRequestHeaders`<sup>Optional</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#passthrough_request_headers AuthBackend#passthrough_request_headers}.

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.authBackend.AuthBackendTune.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/resources/auth_backend#token_type AuthBackend#token_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AuthBackendTuneList <a name="AuthBackendTuneList" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer"></a>

```typescript
import { authBackend } from '@cdktf/provider-vault'

new authBackend.AuthBackendTuneList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.get"></a>

```typescript
public get(index: number): AuthBackendTuneOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.authBackend.AuthBackendTune">AuthBackendTune</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.authBackend.AuthBackendTuneList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuthBackendTune[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.authBackend.AuthBackendTune">AuthBackendTune</a>[]

---


### AuthBackendTuneOutputReference <a name="AuthBackendTuneOutputReference" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer"></a>

```typescript
import { authBackend } from '@cdktf/provider-vault'

new authBackend.AuthBackendTuneOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAllowedResponseHeaders">resetAllowedResponseHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys">resetAuditNonHmacRequestKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys">resetAuditNonHmacResponseKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetDefaultLeaseTtl">resetDefaultLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetListingVisibility">resetListingVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetMaxLeaseTtl">resetMaxLeaseTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetPassthroughRequestHeaders">resetPassthroughRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedResponseHeaders` <a name="resetAllowedResponseHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAllowedResponseHeaders"></a>

```typescript
public resetAllowedResponseHeaders(): void
```

##### `resetAuditNonHmacRequestKeys` <a name="resetAuditNonHmacRequestKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAuditNonHmacRequestKeys"></a>

```typescript
public resetAuditNonHmacRequestKeys(): void
```

##### `resetAuditNonHmacResponseKeys` <a name="resetAuditNonHmacResponseKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetAuditNonHmacResponseKeys"></a>

```typescript
public resetAuditNonHmacResponseKeys(): void
```

##### `resetDefaultLeaseTtl` <a name="resetDefaultLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetDefaultLeaseTtl"></a>

```typescript
public resetDefaultLeaseTtl(): void
```

##### `resetListingVisibility` <a name="resetListingVisibility" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetListingVisibility"></a>

```typescript
public resetListingVisibility(): void
```

##### `resetMaxLeaseTtl` <a name="resetMaxLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetMaxLeaseTtl"></a>

```typescript
public resetMaxLeaseTtl(): void
```

##### `resetPassthroughRequestHeaders` <a name="resetPassthroughRequestHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetPassthroughRequestHeaders"></a>

```typescript
public resetPassthroughRequestHeaders(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.resetTokenType"></a>

```typescript
public resetTokenType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.allowedResponseHeadersInput">allowedResponseHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput">auditNonHmacRequestKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput">auditNonHmacResponseKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.defaultLeaseTtlInput">defaultLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.listingVisibilityInput">listingVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.maxLeaseTtlInput">maxLeaseTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.passthroughRequestHeadersInput">passthroughRequestHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.allowedResponseHeaders">allowedResponseHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacRequestKeys">auditNonHmacRequestKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacResponseKeys">auditNonHmacResponseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.defaultLeaseTtl">defaultLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.listingVisibility">listingVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.maxLeaseTtl">maxLeaseTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.passthroughRequestHeaders">passthroughRequestHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-vault.authBackend.AuthBackendTune">AuthBackendTune</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedResponseHeadersInput`<sup>Optional</sup> <a name="allowedResponseHeadersInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.allowedResponseHeadersInput"></a>

```typescript
public readonly allowedResponseHeadersInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeysInput`<sup>Optional</sup> <a name="auditNonHmacRequestKeysInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacRequestKeysInput"></a>

```typescript
public readonly auditNonHmacRequestKeysInput: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeysInput`<sup>Optional</sup> <a name="auditNonHmacResponseKeysInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacResponseKeysInput"></a>

```typescript
public readonly auditNonHmacResponseKeysInput: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtlInput`<sup>Optional</sup> <a name="defaultLeaseTtlInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.defaultLeaseTtlInput"></a>

```typescript
public readonly defaultLeaseTtlInput: string;
```

- *Type:* string

---

##### `listingVisibilityInput`<sup>Optional</sup> <a name="listingVisibilityInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.listingVisibilityInput"></a>

```typescript
public readonly listingVisibilityInput: string;
```

- *Type:* string

---

##### `maxLeaseTtlInput`<sup>Optional</sup> <a name="maxLeaseTtlInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.maxLeaseTtlInput"></a>

```typescript
public readonly maxLeaseTtlInput: string;
```

- *Type:* string

---

##### `passthroughRequestHeadersInput`<sup>Optional</sup> <a name="passthroughRequestHeadersInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.passthroughRequestHeadersInput"></a>

```typescript
public readonly passthroughRequestHeadersInput: string[];
```

- *Type:* string[]

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `allowedResponseHeaders`<sup>Required</sup> <a name="allowedResponseHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.allowedResponseHeaders"></a>

```typescript
public readonly allowedResponseHeaders: string[];
```

- *Type:* string[]

---

##### `auditNonHmacRequestKeys`<sup>Required</sup> <a name="auditNonHmacRequestKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacRequestKeys"></a>

```typescript
public readonly auditNonHmacRequestKeys: string[];
```

- *Type:* string[]

---

##### `auditNonHmacResponseKeys`<sup>Required</sup> <a name="auditNonHmacResponseKeys" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.auditNonHmacResponseKeys"></a>

```typescript
public readonly auditNonHmacResponseKeys: string[];
```

- *Type:* string[]

---

##### `defaultLeaseTtl`<sup>Required</sup> <a name="defaultLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.defaultLeaseTtl"></a>

```typescript
public readonly defaultLeaseTtl: string;
```

- *Type:* string

---

##### `listingVisibility`<sup>Required</sup> <a name="listingVisibility" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.listingVisibility"></a>

```typescript
public readonly listingVisibility: string;
```

- *Type:* string

---

##### `maxLeaseTtl`<sup>Required</sup> <a name="maxLeaseTtl" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.maxLeaseTtl"></a>

```typescript
public readonly maxLeaseTtl: string;
```

- *Type:* string

---

##### `passthroughRequestHeaders`<sup>Required</sup> <a name="passthroughRequestHeaders" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.passthroughRequestHeaders"></a>

```typescript
public readonly passthroughRequestHeaders: string[];
```

- *Type:* string[]

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-vault.authBackend.AuthBackendTuneOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AuthBackendTune;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-vault.authBackend.AuthBackendTune">AuthBackendTune</a>

---



