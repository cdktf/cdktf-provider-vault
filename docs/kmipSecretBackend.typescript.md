# `vault_kmip_secret_backend`

Refer to the Terraform Registory for docs: [`vault_kmip_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend).

# `kmipSecretBackend` Submodule <a name="`kmipSecretBackend` Submodule" id="@cdktf/provider-vault.kmipSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretBackend <a name="KmipSecretBackend" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend vault_kmip_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer"></a>

```typescript
import { kmipSecretBackend } from '@cdktf/provider-vault'

new kmipSecretBackend.KmipSecretBackend(scope: Construct, id: string, config: KmipSecretBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig">KmipSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig">KmipSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyBits">resetDefaultTlsClientKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyType">resetDefaultTlsClientKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientTtl">resetDefaultTlsClientTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListenAddrs">resetListenAddrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerHostnames">resetServerHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerIps">resetServerIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyBits">resetTlsCaKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyType">resetTlsCaKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsMinVersion">resetTlsMinVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDefaultTlsClientKeyBits` <a name="resetDefaultTlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyBits"></a>

```typescript
public resetDefaultTlsClientKeyBits(): void
```

##### `resetDefaultTlsClientKeyType` <a name="resetDefaultTlsClientKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientKeyType"></a>

```typescript
public resetDefaultTlsClientKeyType(): void
```

##### `resetDefaultTlsClientTtl` <a name="resetDefaultTlsClientTtl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDefaultTlsClientTtl"></a>

```typescript
public resetDefaultTlsClientTtl(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetListenAddrs` <a name="resetListenAddrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetListenAddrs"></a>

```typescript
public resetListenAddrs(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetServerHostnames` <a name="resetServerHostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerHostnames"></a>

```typescript
public resetServerHostnames(): void
```

##### `resetServerIps` <a name="resetServerIps" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetServerIps"></a>

```typescript
public resetServerIps(): void
```

##### `resetTlsCaKeyBits` <a name="resetTlsCaKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyBits"></a>

```typescript
public resetTlsCaKeyBits(): void
```

##### `resetTlsCaKeyType` <a name="resetTlsCaKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsCaKeyType"></a>

```typescript
public resetTlsCaKeyType(): void
```

##### `resetTlsMinVersion` <a name="resetTlsMinVersion" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.resetTlsMinVersion"></a>

```typescript
public resetTlsMinVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct"></a>

```typescript
import { kmipSecretBackend } from '@cdktf/provider-vault'

kmipSecretBackend.KmipSecretBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement"></a>

```typescript
import { kmipSecretBackend } from '@cdktf/provider-vault'

kmipSecretBackend.KmipSecretBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource"></a>

```typescript
import { kmipSecretBackend } from '@cdktf/provider-vault'

kmipSecretBackend.KmipSecretBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBitsInput">defaultTlsClientKeyBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyTypeInput">defaultTlsClientKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtlInput">defaultTlsClientTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrsInput">listenAddrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnamesInput">serverHostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIpsInput">serverIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBitsInput">tlsCaKeyBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyTypeInput">tlsCaKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersionInput">tlsMinVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBits">defaultTlsClientKeyBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyType">defaultTlsClientKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtl">defaultTlsClientTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrs">listenAddrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnames">serverHostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIps">serverIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBits">tlsCaKeyBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyType">tlsCaKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultTlsClientKeyBitsInput`<sup>Optional</sup> <a name="defaultTlsClientKeyBitsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBitsInput"></a>

```typescript
public readonly defaultTlsClientKeyBitsInput: number;
```

- *Type:* number

---

##### `defaultTlsClientKeyTypeInput`<sup>Optional</sup> <a name="defaultTlsClientKeyTypeInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyTypeInput"></a>

```typescript
public readonly defaultTlsClientKeyTypeInput: string;
```

- *Type:* string

---

##### `defaultTlsClientTtlInput`<sup>Optional</sup> <a name="defaultTlsClientTtlInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtlInput"></a>

```typescript
public readonly defaultTlsClientTtlInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `listenAddrsInput`<sup>Optional</sup> <a name="listenAddrsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrsInput"></a>

```typescript
public readonly listenAddrsInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `serverHostnamesInput`<sup>Optional</sup> <a name="serverHostnamesInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnamesInput"></a>

```typescript
public readonly serverHostnamesInput: string[];
```

- *Type:* string[]

---

##### `serverIpsInput`<sup>Optional</sup> <a name="serverIpsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIpsInput"></a>

```typescript
public readonly serverIpsInput: string[];
```

- *Type:* string[]

---

##### `tlsCaKeyBitsInput`<sup>Optional</sup> <a name="tlsCaKeyBitsInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBitsInput"></a>

```typescript
public readonly tlsCaKeyBitsInput: number;
```

- *Type:* number

---

##### `tlsCaKeyTypeInput`<sup>Optional</sup> <a name="tlsCaKeyTypeInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyTypeInput"></a>

```typescript
public readonly tlsCaKeyTypeInput: string;
```

- *Type:* string

---

##### `tlsMinVersionInput`<sup>Optional</sup> <a name="tlsMinVersionInput" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersionInput"></a>

```typescript
public readonly tlsMinVersionInput: string;
```

- *Type:* string

---

##### `defaultTlsClientKeyBits`<sup>Required</sup> <a name="defaultTlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyBits"></a>

```typescript
public readonly defaultTlsClientKeyBits: number;
```

- *Type:* number

---

##### `defaultTlsClientKeyType`<sup>Required</sup> <a name="defaultTlsClientKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientKeyType"></a>

```typescript
public readonly defaultTlsClientKeyType: string;
```

- *Type:* string

---

##### `defaultTlsClientTtl`<sup>Required</sup> <a name="defaultTlsClientTtl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.defaultTlsClientTtl"></a>

```typescript
public readonly defaultTlsClientTtl: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenAddrs`<sup>Required</sup> <a name="listenAddrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.listenAddrs"></a>

```typescript
public readonly listenAddrs: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `serverHostnames`<sup>Required</sup> <a name="serverHostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverHostnames"></a>

```typescript
public readonly serverHostnames: string[];
```

- *Type:* string[]

---

##### `serverIps`<sup>Required</sup> <a name="serverIps" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.serverIps"></a>

```typescript
public readonly serverIps: string[];
```

- *Type:* string[]

---

##### `tlsCaKeyBits`<sup>Required</sup> <a name="tlsCaKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyBits"></a>

```typescript
public readonly tlsCaKeyBits: number;
```

- *Type:* number

---

##### `tlsCaKeyType`<sup>Required</sup> <a name="tlsCaKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsCaKeyType"></a>

```typescript
public readonly tlsCaKeyType: string;
```

- *Type:* string

---

##### `tlsMinVersion`<sup>Required</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretBackendConfig <a name="KmipSecretBackendConfig" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.Initializer"></a>

```typescript
import { kmipSecretBackend } from '@cdktf/provider-vault'

const kmipSecretBackendConfig: kmipSecretBackend.KmipSecretBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.path">path</a></code> | <code>string</code> | Path where KMIP secret backend will be mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyBits">defaultTlsClientKeyBits</a></code> | <code>number</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyType">defaultTlsClientKeyType</a></code> | <code>string</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientTtl">defaultTlsClientTtl</a></code> | <code>number</code> | Client certificate TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.description">description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listenAddrs">listenAddrs</a></code> | <code>string[]</code> | Addresses the KMIP server should listen on (host:port). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverHostnames">serverHostnames</a></code> | <code>string[]</code> | Hostnames to include in the server's TLS certificate as SAN DNS names. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverIps">serverIps</a></code> | <code>string[]</code> | IPs to include in the server's TLS certificate as SAN IP addresses. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyBits">tlsCaKeyBits</a></code> | <code>number</code> | CA key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyType">tlsCaKeyType</a></code> | <code>string</code> | CA key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsMinVersion">tlsMinVersion</a></code> | <code>string</code> | Minimum TLS version to accept. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path where KMIP secret backend will be mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#path KmipSecretBackend#path}

---

##### `defaultTlsClientKeyBits`<sup>Optional</sup> <a name="defaultTlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyBits"></a>

```typescript
public readonly defaultTlsClientKeyBits: number;
```

- *Type:* number

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#default_tls_client_key_bits KmipSecretBackend#default_tls_client_key_bits}

---

##### `defaultTlsClientKeyType`<sup>Optional</sup> <a name="defaultTlsClientKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientKeyType"></a>

```typescript
public readonly defaultTlsClientKeyType: string;
```

- *Type:* string

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#default_tls_client_key_type KmipSecretBackend#default_tls_client_key_type}

---

##### `defaultTlsClientTtl`<sup>Optional</sup> <a name="defaultTlsClientTtl" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.defaultTlsClientTtl"></a>

```typescript
public readonly defaultTlsClientTtl: number;
```

- *Type:* number

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#default_tls_client_ttl KmipSecretBackend#default_tls_client_ttl}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#description KmipSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#disable_remount KmipSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#id KmipSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listenAddrs`<sup>Optional</sup> <a name="listenAddrs" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.listenAddrs"></a>

```typescript
public readonly listenAddrs: string[];
```

- *Type:* string[]

Addresses the KMIP server should listen on (host:port).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#listen_addrs KmipSecretBackend#listen_addrs}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#namespace KmipSecretBackend#namespace}

---

##### `serverHostnames`<sup>Optional</sup> <a name="serverHostnames" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverHostnames"></a>

```typescript
public readonly serverHostnames: string[];
```

- *Type:* string[]

Hostnames to include in the server's TLS certificate as SAN DNS names.

The first will be used as the common name (CN)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#server_hostnames KmipSecretBackend#server_hostnames}

---

##### `serverIps`<sup>Optional</sup> <a name="serverIps" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.serverIps"></a>

```typescript
public readonly serverIps: string[];
```

- *Type:* string[]

IPs to include in the server's TLS certificate as SAN IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#server_ips KmipSecretBackend#server_ips}

---

##### `tlsCaKeyBits`<sup>Optional</sup> <a name="tlsCaKeyBits" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyBits"></a>

```typescript
public readonly tlsCaKeyBits: number;
```

- *Type:* number

CA key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#tls_ca_key_bits KmipSecretBackend#tls_ca_key_bits}

---

##### `tlsCaKeyType`<sup>Optional</sup> <a name="tlsCaKeyType" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsCaKeyType"></a>

```typescript
public readonly tlsCaKeyType: string;
```

- *Type:* string

CA key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#tls_ca_key_type KmipSecretBackend#tls_ca_key_type}

---

##### `tlsMinVersion`<sup>Optional</sup> <a name="tlsMinVersion" id="@cdktf/provider-vault.kmipSecretBackend.KmipSecretBackendConfig.property.tlsMinVersion"></a>

```typescript
public readonly tlsMinVersion: string;
```

- *Type:* string

Minimum TLS version to accept.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/kmip_secret_backend#tls_min_version KmipSecretBackend#tls_min_version}

---



