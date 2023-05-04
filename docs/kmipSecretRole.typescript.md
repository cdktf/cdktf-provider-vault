# `vault_kmip_secret_role`

Refer to the Terraform Registory for docs: [`vault_kmip_secret_role`](https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role).

# `kmipSecretRole` Submodule <a name="`kmipSecretRole` Submodule" id="@cdktf/provider-vault.kmipSecretRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmipSecretRole <a name="KmipSecretRole" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role vault_kmip_secret_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer"></a>

```typescript
import { kmipSecretRole } from '@cdktf/provider-vault'

new kmipSecretRole.KmipSecretRole(scope: Construct, id: string, config: KmipSecretRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig">KmipSecretRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig">KmipSecretRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate">resetOperationActivate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute">resetOperationAddAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll">resetOperationAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate">resetOperationCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy">resetOperationDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions">resetOperationDiscoverVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet">resetOperationGet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList">resetOperationGetAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes">resetOperationGetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate">resetOperationLocate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone">resetOperationNone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister">resetOperationRegister</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey">resetOperationRekey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke">resetOperationRevoke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits">resetTlsClientKeyBits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType">resetTlsClientKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl">resetTlsClientTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetOperationActivate` <a name="resetOperationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationActivate"></a>

```typescript
public resetOperationActivate(): void
```

##### `resetOperationAddAttribute` <a name="resetOperationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAddAttribute"></a>

```typescript
public resetOperationAddAttribute(): void
```

##### `resetOperationAll` <a name="resetOperationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationAll"></a>

```typescript
public resetOperationAll(): void
```

##### `resetOperationCreate` <a name="resetOperationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationCreate"></a>

```typescript
public resetOperationCreate(): void
```

##### `resetOperationDestroy` <a name="resetOperationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDestroy"></a>

```typescript
public resetOperationDestroy(): void
```

##### `resetOperationDiscoverVersions` <a name="resetOperationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationDiscoverVersions"></a>

```typescript
public resetOperationDiscoverVersions(): void
```

##### `resetOperationGet` <a name="resetOperationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGet"></a>

```typescript
public resetOperationGet(): void
```

##### `resetOperationGetAttributeList` <a name="resetOperationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributeList"></a>

```typescript
public resetOperationGetAttributeList(): void
```

##### `resetOperationGetAttributes` <a name="resetOperationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationGetAttributes"></a>

```typescript
public resetOperationGetAttributes(): void
```

##### `resetOperationLocate` <a name="resetOperationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationLocate"></a>

```typescript
public resetOperationLocate(): void
```

##### `resetOperationNone` <a name="resetOperationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationNone"></a>

```typescript
public resetOperationNone(): void
```

##### `resetOperationRegister` <a name="resetOperationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRegister"></a>

```typescript
public resetOperationRegister(): void
```

##### `resetOperationRekey` <a name="resetOperationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRekey"></a>

```typescript
public resetOperationRekey(): void
```

##### `resetOperationRevoke` <a name="resetOperationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetOperationRevoke"></a>

```typescript
public resetOperationRevoke(): void
```

##### `resetTlsClientKeyBits` <a name="resetTlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyBits"></a>

```typescript
public resetTlsClientKeyBits(): void
```

##### `resetTlsClientKeyType` <a name="resetTlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientKeyType"></a>

```typescript
public resetTlsClientKeyType(): void
```

##### `resetTlsClientTtl` <a name="resetTlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.resetTlsClientTtl"></a>

```typescript
public resetTlsClientTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct"></a>

```typescript
import { kmipSecretRole } from '@cdktf/provider-vault'

kmipSecretRole.KmipSecretRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement"></a>

```typescript
import { kmipSecretRole } from '@cdktf/provider-vault'

kmipSecretRole.KmipSecretRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource"></a>

```typescript
import { kmipSecretRole } from '@cdktf/provider-vault'

kmipSecretRole.KmipSecretRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput">operationActivateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput">operationAddAttributeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput">operationAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput">operationCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput">operationDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput">operationDiscoverVersionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput">operationGetAttributeListInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput">operationGetAttributesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput">operationGetInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput">operationLocateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput">operationNoneInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput">operationRegisterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput">operationRekeyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput">operationRevokeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput">tlsClientKeyBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput">tlsClientKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput">tlsClientTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate">operationActivate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute">operationAddAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll">operationAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate">operationCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy">operationDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions">operationDiscoverVersions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet">operationGet</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList">operationGetAttributeList</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes">operationGetAttributes</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate">operationLocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone">operationNone</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister">operationRegister</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey">operationRekey</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke">operationRevoke</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits">tlsClientKeyBits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType">tlsClientKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl">tlsClientTtl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `operationActivateInput`<sup>Optional</sup> <a name="operationActivateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivateInput"></a>

```typescript
public readonly operationActivateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationAddAttributeInput`<sup>Optional</sup> <a name="operationAddAttributeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttributeInput"></a>

```typescript
public readonly operationAddAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationAllInput`<sup>Optional</sup> <a name="operationAllInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAllInput"></a>

```typescript
public readonly operationAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationCreateInput`<sup>Optional</sup> <a name="operationCreateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreateInput"></a>

```typescript
public readonly operationCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationDestroyInput`<sup>Optional</sup> <a name="operationDestroyInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroyInput"></a>

```typescript
public readonly operationDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationDiscoverVersionsInput`<sup>Optional</sup> <a name="operationDiscoverVersionsInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersionsInput"></a>

```typescript
public readonly operationDiscoverVersionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationGetAttributeListInput`<sup>Optional</sup> <a name="operationGetAttributeListInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeListInput"></a>

```typescript
public readonly operationGetAttributeListInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationGetAttributesInput`<sup>Optional</sup> <a name="operationGetAttributesInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributesInput"></a>

```typescript
public readonly operationGetAttributesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationGetInput`<sup>Optional</sup> <a name="operationGetInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetInput"></a>

```typescript
public readonly operationGetInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationLocateInput`<sup>Optional</sup> <a name="operationLocateInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocateInput"></a>

```typescript
public readonly operationLocateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationNoneInput`<sup>Optional</sup> <a name="operationNoneInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNoneInput"></a>

```typescript
public readonly operationNoneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationRegisterInput`<sup>Optional</sup> <a name="operationRegisterInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegisterInput"></a>

```typescript
public readonly operationRegisterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationRekeyInput`<sup>Optional</sup> <a name="operationRekeyInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekeyInput"></a>

```typescript
public readonly operationRekeyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationRevokeInput`<sup>Optional</sup> <a name="operationRevokeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevokeInput"></a>

```typescript
public readonly operationRevokeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `tlsClientKeyBitsInput`<sup>Optional</sup> <a name="tlsClientKeyBitsInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBitsInput"></a>

```typescript
public readonly tlsClientKeyBitsInput: number;
```

- *Type:* number

---

##### `tlsClientKeyTypeInput`<sup>Optional</sup> <a name="tlsClientKeyTypeInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyTypeInput"></a>

```typescript
public readonly tlsClientKeyTypeInput: string;
```

- *Type:* string

---

##### `tlsClientTtlInput`<sup>Optional</sup> <a name="tlsClientTtlInput" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtlInput"></a>

```typescript
public readonly tlsClientTtlInput: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `operationActivate`<sup>Required</sup> <a name="operationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationActivate"></a>

```typescript
public readonly operationActivate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationAddAttribute`<sup>Required</sup> <a name="operationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAddAttribute"></a>

```typescript
public readonly operationAddAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationAll`<sup>Required</sup> <a name="operationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationAll"></a>

```typescript
public readonly operationAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationCreate`<sup>Required</sup> <a name="operationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationCreate"></a>

```typescript
public readonly operationCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationDestroy`<sup>Required</sup> <a name="operationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDestroy"></a>

```typescript
public readonly operationDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationDiscoverVersions`<sup>Required</sup> <a name="operationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationDiscoverVersions"></a>

```typescript
public readonly operationDiscoverVersions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationGet`<sup>Required</sup> <a name="operationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGet"></a>

```typescript
public readonly operationGet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationGetAttributeList`<sup>Required</sup> <a name="operationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributeList"></a>

```typescript
public readonly operationGetAttributeList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationGetAttributes`<sup>Required</sup> <a name="operationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationGetAttributes"></a>

```typescript
public readonly operationGetAttributes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationLocate`<sup>Required</sup> <a name="operationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationLocate"></a>

```typescript
public readonly operationLocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationNone`<sup>Required</sup> <a name="operationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationNone"></a>

```typescript
public readonly operationNone: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationRegister`<sup>Required</sup> <a name="operationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRegister"></a>

```typescript
public readonly operationRegister: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationRekey`<sup>Required</sup> <a name="operationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRekey"></a>

```typescript
public readonly operationRekey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `operationRevoke`<sup>Required</sup> <a name="operationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.operationRevoke"></a>

```typescript
public readonly operationRevoke: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `tlsClientKeyBits`<sup>Required</sup> <a name="tlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyBits"></a>

```typescript
public readonly tlsClientKeyBits: number;
```

- *Type:* number

---

##### `tlsClientKeyType`<sup>Required</sup> <a name="tlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientKeyType"></a>

```typescript
public readonly tlsClientKeyType: string;
```

- *Type:* string

---

##### `tlsClientTtl`<sup>Required</sup> <a name="tlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tlsClientTtl"></a>

```typescript
public readonly tlsClientTtl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KmipSecretRoleConfig <a name="KmipSecretRoleConfig" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.Initializer"></a>

```typescript
import { kmipSecretRole } from '@cdktf/provider-vault'

const kmipSecretRoleConfig: kmipSecretRole.KmipSecretRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path">path</a></code> | <code>string</code> | Path where KMIP backend is mounted. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role">role</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope">scope</a></code> | <code>string</code> | Name of the scope. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#id KmipSecretRole#id}. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate">operationActivate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Activate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute">operationAddAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Add Attribute operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll">operationAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant all permissions to this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate">operationCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Create operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy">operationDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Destroy operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions">operationDiscoverVersions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Discover Version operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet">operationGet</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Get operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList">operationGetAttributeList</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attribute List operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes">operationGetAttributes</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Get Attributes operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate">operationLocate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Locate operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone">operationNone</a></code> | <code>boolean \| cdktf.IResolvable</code> | Remove all permissions from this role. May not be specified with any other operation_* params. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister">operationRegister</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Register operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey">operationRekey</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Rekey operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke">operationRevoke</a></code> | <code>boolean \| cdktf.IResolvable</code> | Grant permission to use the KMIP Revoke operation. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits">tlsClientKeyBits</a></code> | <code>number</code> | Client certificate key bits, valid values depend on key type. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType">tlsClientKeyType</a></code> | <code>string</code> | Client certificate key type, rsa or ec. |
| <code><a href="#@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl">tlsClientTtl</a></code> | <code>number</code> | Client certificate TTL in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path where KMIP backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#path KmipSecretRole#path}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#role KmipSecretRole#role}

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

Name of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#scope KmipSecretRole#scope}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#id KmipSecretRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#namespace KmipSecretRole#namespace}

---

##### `operationActivate`<sup>Optional</sup> <a name="operationActivate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationActivate"></a>

```typescript
public readonly operationActivate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Activate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_activate KmipSecretRole#operation_activate}

---

##### `operationAddAttribute`<sup>Optional</sup> <a name="operationAddAttribute" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAddAttribute"></a>

```typescript
public readonly operationAddAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Add Attribute operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_add_attribute KmipSecretRole#operation_add_attribute}

---

##### `operationAll`<sup>Optional</sup> <a name="operationAll" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationAll"></a>

```typescript
public readonly operationAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant all permissions to this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_all KmipSecretRole#operation_all}

---

##### `operationCreate`<sup>Optional</sup> <a name="operationCreate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationCreate"></a>

```typescript
public readonly operationCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_create KmipSecretRole#operation_create}

---

##### `operationDestroy`<sup>Optional</sup> <a name="operationDestroy" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDestroy"></a>

```typescript
public readonly operationDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Destroy operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_destroy KmipSecretRole#operation_destroy}

---

##### `operationDiscoverVersions`<sup>Optional</sup> <a name="operationDiscoverVersions" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationDiscoverVersions"></a>

```typescript
public readonly operationDiscoverVersions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Discover Version operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_discover_versions KmipSecretRole#operation_discover_versions}

---

##### `operationGet`<sup>Optional</sup> <a name="operationGet" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGet"></a>

```typescript
public readonly operationGet: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Get operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_get KmipSecretRole#operation_get}

---

##### `operationGetAttributeList`<sup>Optional</sup> <a name="operationGetAttributeList" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributeList"></a>

```typescript
public readonly operationGetAttributeList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Get Attribute List operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_get_attribute_list KmipSecretRole#operation_get_attribute_list}

---

##### `operationGetAttributes`<sup>Optional</sup> <a name="operationGetAttributes" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationGetAttributes"></a>

```typescript
public readonly operationGetAttributes: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Get Attributes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_get_attributes KmipSecretRole#operation_get_attributes}

---

##### `operationLocate`<sup>Optional</sup> <a name="operationLocate" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationLocate"></a>

```typescript
public readonly operationLocate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Locate operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_locate KmipSecretRole#operation_locate}

---

##### `operationNone`<sup>Optional</sup> <a name="operationNone" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationNone"></a>

```typescript
public readonly operationNone: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Remove all permissions from this role. May not be specified with any other operation_* params.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_none KmipSecretRole#operation_none}

---

##### `operationRegister`<sup>Optional</sup> <a name="operationRegister" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRegister"></a>

```typescript
public readonly operationRegister: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Register operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_register KmipSecretRole#operation_register}

---

##### `operationRekey`<sup>Optional</sup> <a name="operationRekey" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRekey"></a>

```typescript
public readonly operationRekey: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Rekey operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_rekey KmipSecretRole#operation_rekey}

---

##### `operationRevoke`<sup>Optional</sup> <a name="operationRevoke" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.operationRevoke"></a>

```typescript
public readonly operationRevoke: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Grant permission to use the KMIP Revoke operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#operation_revoke KmipSecretRole#operation_revoke}

---

##### `tlsClientKeyBits`<sup>Optional</sup> <a name="tlsClientKeyBits" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyBits"></a>

```typescript
public readonly tlsClientKeyBits: number;
```

- *Type:* number

Client certificate key bits, valid values depend on key type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#tls_client_key_bits KmipSecretRole#tls_client_key_bits}

---

##### `tlsClientKeyType`<sup>Optional</sup> <a name="tlsClientKeyType" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientKeyType"></a>

```typescript
public readonly tlsClientKeyType: string;
```

- *Type:* string

Client certificate key type, rsa or ec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#tls_client_key_type KmipSecretRole#tls_client_key_type}

---

##### `tlsClientTtl`<sup>Optional</sup> <a name="tlsClientTtl" id="@cdktf/provider-vault.kmipSecretRole.KmipSecretRoleConfig.property.tlsClientTtl"></a>

```typescript
public readonly tlsClientTtl: number;
```

- *Type:* number

Client certificate TTL in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.1/docs/resources/kmip_secret_role#tls_client_ttl KmipSecretRole#tls_client_ttl}

---



