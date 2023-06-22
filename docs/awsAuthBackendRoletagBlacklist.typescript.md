# `vault_aws_auth_backend_roletag_blacklist`

Refer to the Terraform Registory for docs: [`vault_aws_auth_backend_roletag_blacklist`](https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_auth_backend_roletag_blacklist).

# `awsAuthBackendRoletagBlacklist` Submodule <a name="`awsAuthBackendRoletagBlacklist` Submodule" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendRoletagBlacklist <a name="AwsAuthBackendRoletagBlacklist" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_auth_backend_roletag_blacklist vault_aws_auth_backend_roletag_blacklist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer"></a>

```typescript
import { awsAuthBackendRoletagBlacklist } from '@cdktf/provider-vault'

new awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist(scope: Construct, id: string, config: AwsAuthBackendRoletagBlacklistConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig">AwsAuthBackendRoletagBlacklistConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig">AwsAuthBackendRoletagBlacklistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetDisablePeriodicTidy">resetDisablePeriodicTidy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetSafetyBuffer">resetSafetyBuffer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDisablePeriodicTidy` <a name="resetDisablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetDisablePeriodicTidy"></a>

```typescript
public resetDisablePeriodicTidy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSafetyBuffer` <a name="resetSafetyBuffer" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.resetSafetyBuffer"></a>

```typescript
public resetSafetyBuffer(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isConstruct"></a>

```typescript
import { awsAuthBackendRoletagBlacklist } from '@cdktf/provider-vault'

awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformElement"></a>

```typescript
import { awsAuthBackendRoletagBlacklist } from '@cdktf/provider-vault'

awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformResource"></a>

```typescript
import { awsAuthBackendRoletagBlacklist } from '@cdktf/provider-vault'

awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidyInput">disablePeriodicTidyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBufferInput">safetyBufferInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidy">disablePeriodicTidy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBuffer">safetyBuffer</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `disablePeriodicTidyInput`<sup>Optional</sup> <a name="disablePeriodicTidyInput" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidyInput"></a>

```typescript
public readonly disablePeriodicTidyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `safetyBufferInput`<sup>Optional</sup> <a name="safetyBufferInput" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBufferInput"></a>

```typescript
public readonly safetyBufferInput: number;
```

- *Type:* number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `disablePeriodicTidy`<sup>Required</sup> <a name="disablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.disablePeriodicTidy"></a>

```typescript
public readonly disablePeriodicTidy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `safetyBuffer`<sup>Required</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.safetyBuffer"></a>

```typescript
public readonly safetyBuffer: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklist.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendRoletagBlacklistConfig <a name="AwsAuthBackendRoletagBlacklistConfig" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.Initializer"></a>

```typescript
import { awsAuthBackendRoletagBlacklist } from '@cdktf/provider-vault'

const awsAuthBackendRoletagBlacklistConfig: awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.disablePeriodicTidy">disablePeriodicTidy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, disables the periodic tidying of the roletag blacklist entries. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_auth_backend_roletag_blacklist#id AwsAuthBackendRoletagBlacklist#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.safetyBuffer">safetyBuffer</a></code> | <code>number</code> | The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_auth_backend_roletag_blacklist#backend AwsAuthBackendRoletagBlacklist#backend}

---

##### `disablePeriodicTidy`<sup>Optional</sup> <a name="disablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.disablePeriodicTidy"></a>

```typescript
public readonly disablePeriodicTidy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, disables the periodic tidying of the roletag blacklist entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_auth_backend_roletag_blacklist#disable_periodic_tidy AwsAuthBackendRoletagBlacklist#disable_periodic_tidy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_auth_backend_roletag_blacklist#id AwsAuthBackendRoletagBlacklist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_auth_backend_roletag_blacklist#namespace AwsAuthBackendRoletagBlacklist#namespace}

---

##### `safetyBuffer`<sup>Optional</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.awsAuthBackendRoletagBlacklist.AwsAuthBackendRoletagBlacklistConfig.property.safetyBuffer"></a>

```typescript
public readonly safetyBuffer: number;
```

- *Type:* number

The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.17.0/docs/resources/aws_auth_backend_roletag_blacklist#safety_buffer AwsAuthBackendRoletagBlacklist#safety_buffer}

---



