# `vault_aws_auth_backend_identity_whitelist`

Refer to the Terraform Registory for docs: [`vault_aws_auth_backend_identity_whitelist`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_identity_whitelist).

# `awsAuthBackendIdentityWhitelist` Submodule <a name="`awsAuthBackendIdentityWhitelist` Submodule" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AwsAuthBackendIdentityWhitelist <a name="AwsAuthBackendIdentityWhitelist" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_identity_whitelist vault_aws_auth_backend_identity_whitelist}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer"></a>

```typescript
import { awsAuthBackendIdentityWhitelist } from '@cdktf/provider-vault'

new awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist(scope: Construct, id: string, config?: AwsAuthBackendIdentityWhitelistConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig">AwsAuthBackendIdentityWhitelistConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig">AwsAuthBackendIdentityWhitelistConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetDisablePeriodicTidy">resetDisablePeriodicTidy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetSafetyBuffer">resetSafetyBuffer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetDisablePeriodicTidy` <a name="resetDisablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetDisablePeriodicTidy"></a>

```typescript
public resetDisablePeriodicTidy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetSafetyBuffer` <a name="resetSafetyBuffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.resetSafetyBuffer"></a>

```typescript
public resetSafetyBuffer(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct"></a>

```typescript
import { awsAuthBackendIdentityWhitelist } from '@cdktf/provider-vault'

awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement"></a>

```typescript
import { awsAuthBackendIdentityWhitelist } from '@cdktf/provider-vault'

awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource"></a>

```typescript
import { awsAuthBackendIdentityWhitelist } from '@cdktf/provider-vault'

awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidyInput">disablePeriodicTidyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBufferInput">safetyBufferInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidy">disablePeriodicTidy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBuffer">safetyBuffer</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `disablePeriodicTidyInput`<sup>Optional</sup> <a name="disablePeriodicTidyInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidyInput"></a>

```typescript
public readonly disablePeriodicTidyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `safetyBufferInput`<sup>Optional</sup> <a name="safetyBufferInput" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBufferInput"></a>

```typescript
public readonly safetyBufferInput: number;
```

- *Type:* number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `disablePeriodicTidy`<sup>Required</sup> <a name="disablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.disablePeriodicTidy"></a>

```typescript
public readonly disablePeriodicTidy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `safetyBuffer`<sup>Required</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.safetyBuffer"></a>

```typescript
public readonly safetyBuffer: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelist.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AwsAuthBackendIdentityWhitelistConfig <a name="AwsAuthBackendIdentityWhitelistConfig" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.Initializer"></a>

```typescript
import { awsAuthBackendIdentityWhitelist } from '@cdktf/provider-vault'

const awsAuthBackendIdentityWhitelistConfig: awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.backend">backend</a></code> | <code>string</code> | Unique name of the auth backend to configure. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.disablePeriodicTidy">disablePeriodicTidy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, disables the periodic tidying of the identiy whitelist entries. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}. |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.safetyBuffer">safetyBuffer</a></code> | <code>number</code> | The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Unique name of the auth backend to configure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_identity_whitelist#backend AwsAuthBackendIdentityWhitelist#backend}

---

##### `disablePeriodicTidy`<sup>Optional</sup> <a name="disablePeriodicTidy" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.disablePeriodicTidy"></a>

```typescript
public readonly disablePeriodicTidy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, disables the periodic tidying of the identiy whitelist entries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_identity_whitelist#disable_periodic_tidy AwsAuthBackendIdentityWhitelist#disable_periodic_tidy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_identity_whitelist#id AwsAuthBackendIdentityWhitelist#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_identity_whitelist#namespace AwsAuthBackendIdentityWhitelist#namespace}

---

##### `safetyBuffer`<sup>Optional</sup> <a name="safetyBuffer" id="@cdktf/provider-vault.awsAuthBackendIdentityWhitelist.AwsAuthBackendIdentityWhitelistConfig.property.safetyBuffer"></a>

```typescript
public readonly safetyBuffer: number;
```

- *Type:* number

The amount of extra time that must have passed beyond the roletag expiration, before it's removed from backend storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/aws_auth_backend_identity_whitelist#safety_buffer AwsAuthBackendIdentityWhitelist#safety_buffer}

---



