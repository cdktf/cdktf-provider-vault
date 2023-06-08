# `vault_rabbitmq_secret_backend`

Refer to the Terraform Registory for docs: [`vault_rabbitmq_secret_backend`](https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend).

# `rabbitmqSecretBackend` Submodule <a name="`rabbitmqSecretBackend` Submodule" id="@cdktf/provider-vault.rabbitmqSecretBackend"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RabbitmqSecretBackend <a name="RabbitmqSecretBackend" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend vault_rabbitmq_secret_backend}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer"></a>

```typescript
import { rabbitmqSecretBackend } from '@cdktf/provider-vault'

new rabbitmqSecretBackend.RabbitmqSecretBackend(scope: Construct, id: string, config: RabbitmqSecretBackendConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig">RabbitmqSecretBackendConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig">RabbitmqSecretBackendConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDefaultLeaseTtlSeconds">resetDefaultLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDisableRemount">resetDisableRemount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetMaxLeaseTtlSeconds">resetMaxLeaseTtlSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetUsernameTemplate">resetUsernameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetVerifyConnection">resetVerifyConnection</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDefaultLeaseTtlSeconds` <a name="resetDefaultLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDefaultLeaseTtlSeconds"></a>

```typescript
public resetDefaultLeaseTtlSeconds(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisableRemount` <a name="resetDisableRemount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetDisableRemount"></a>

```typescript
public resetDisableRemount(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxLeaseTtlSeconds` <a name="resetMaxLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetMaxLeaseTtlSeconds"></a>

```typescript
public resetMaxLeaseTtlSeconds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPasswordPolicy"></a>

```typescript
public resetPasswordPolicy(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetUsernameTemplate` <a name="resetUsernameTemplate" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetUsernameTemplate"></a>

```typescript
public resetUsernameTemplate(): void
```

##### `resetVerifyConnection` <a name="resetVerifyConnection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.resetVerifyConnection"></a>

```typescript
public resetVerifyConnection(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct"></a>

```typescript
import { rabbitmqSecretBackend } from '@cdktf/provider-vault'

rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement"></a>

```typescript
import { rabbitmqSecretBackend } from '@cdktf/provider-vault'

rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource"></a>

```typescript
import { rabbitmqSecretBackend } from '@cdktf/provider-vault'

rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUriInput">connectionUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSecondsInput">defaultLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemountInput">disableRemountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSecondsInput">maxLeaseTtlSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplateInput">usernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnectionInput">verifyConnectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUri">connectionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionUriInput`<sup>Optional</sup> <a name="connectionUriInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUriInput"></a>

```typescript
public readonly connectionUriInput: string;
```

- *Type:* string

---

##### `defaultLeaseTtlSecondsInput`<sup>Optional</sup> <a name="defaultLeaseTtlSecondsInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSecondsInput"></a>

```typescript
public readonly defaultLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disableRemountInput`<sup>Optional</sup> <a name="disableRemountInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemountInput"></a>

```typescript
public readonly disableRemountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxLeaseTtlSecondsInput`<sup>Optional</sup> <a name="maxLeaseTtlSecondsInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSecondsInput"></a>

```typescript
public readonly maxLeaseTtlSecondsInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicyInput"></a>

```typescript
public readonly passwordPolicyInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `usernameTemplateInput`<sup>Optional</sup> <a name="usernameTemplateInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplateInput"></a>

```typescript
public readonly usernameTemplateInput: string;
```

- *Type:* string

---

##### `verifyConnectionInput`<sup>Optional</sup> <a name="verifyConnectionInput" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnectionInput"></a>

```typescript
public readonly verifyConnectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.connectionUri"></a>

```typescript
public readonly connectionUri: string;
```

- *Type:* string

---

##### `defaultLeaseTtlSeconds`<sup>Required</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disableRemount`<sup>Required</sup> <a name="disableRemount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxLeaseTtlSeconds`<sup>Required</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `usernameTemplate`<sup>Required</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

---

##### `verifyConnection`<sup>Required</sup> <a name="verifyConnection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackend.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RabbitmqSecretBackendConfig <a name="RabbitmqSecretBackendConfig" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.Initializer"></a>

```typescript
import { rabbitmqSecretBackend } from '@cdktf/provider-vault'

const rabbitmqSecretBackendConfig: rabbitmqSecretBackend.RabbitmqSecretBackendConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connectionUri">connectionUri</a></code> | <code>string</code> | Specifies the RabbitMQ connection URI. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.password">password</a></code> | <code>string</code> | Specifies the RabbitMQ management administrator password. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.username">username</a></code> | <code>string</code> | Specifies the RabbitMQ management administrator username. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.defaultLeaseTtlSeconds">defaultLeaseTtlSeconds</a></code> | <code>number</code> | Default lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.description">description</a></code> | <code>string</code> | Human-friendly description of the mount for the backend. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.disableRemount">disableRemount</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set, opts out of mount migration on path updates. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.maxLeaseTtlSeconds">maxLeaseTtlSeconds</a></code> | <code>number</code> | Maximum possible lease duration for secrets in seconds. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.path">path</a></code> | <code>string</code> | The path of the RabbitMQ Secret Backend where the connection should be configured. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.usernameTemplate">usernameTemplate</a></code> | <code>string</code> | Template describing how dynamic usernames are generated. |
| <code><a href="#@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.verifyConnection">verifyConnection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to verify connection URI, username, and password. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionUri`<sup>Required</sup> <a name="connectionUri" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.connectionUri"></a>

```typescript
public readonly connectionUri: string;
```

- *Type:* string

Specifies the RabbitMQ connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#connection_uri RabbitmqSecretBackend#connection_uri}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Specifies the RabbitMQ management administrator password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#password RabbitmqSecretBackend#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Specifies the RabbitMQ management administrator username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#username RabbitmqSecretBackend#username}

---

##### `defaultLeaseTtlSeconds`<sup>Optional</sup> <a name="defaultLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.defaultLeaseTtlSeconds"></a>

```typescript
public readonly defaultLeaseTtlSeconds: number;
```

- *Type:* number

Default lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#default_lease_ttl_seconds RabbitmqSecretBackend#default_lease_ttl_seconds}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-friendly description of the mount for the backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#description RabbitmqSecretBackend#description}

---

##### `disableRemount`<sup>Optional</sup> <a name="disableRemount" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.disableRemount"></a>

```typescript
public readonly disableRemount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set, opts out of mount migration on path updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#disable_remount RabbitmqSecretBackend#disable_remount}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#id RabbitmqSecretBackend#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxLeaseTtlSeconds`<sup>Optional</sup> <a name="maxLeaseTtlSeconds" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.maxLeaseTtlSeconds"></a>

```typescript
public readonly maxLeaseTtlSeconds: number;
```

- *Type:* number

Maximum possible lease duration for secrets in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#max_lease_ttl_seconds RabbitmqSecretBackend#max_lease_ttl_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#namespace RabbitmqSecretBackend#namespace}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

Specifies a password policy to use when creating dynamic credentials. Defaults to generating an alphanumeric password if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#password_policy RabbitmqSecretBackend#password_policy}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path of the RabbitMQ Secret Backend where the connection should be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#path RabbitmqSecretBackend#path}

---

##### `usernameTemplate`<sup>Optional</sup> <a name="usernameTemplate" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.usernameTemplate"></a>

```typescript
public readonly usernameTemplate: string;
```

- *Type:* string

Template describing how dynamic usernames are generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#username_template RabbitmqSecretBackend#username_template}

---

##### `verifyConnection`<sup>Optional</sup> <a name="verifyConnection" id="@cdktf/provider-vault.rabbitmqSecretBackend.RabbitmqSecretBackendConfig.property.verifyConnection"></a>

```typescript
public readonly verifyConnection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to verify connection URI, username, and password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/rabbitmq_secret_backend#verify_connection RabbitmqSecretBackend#verify_connection}

---



