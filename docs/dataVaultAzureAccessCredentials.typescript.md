# `data_vault_azure_access_credentials`

Refer to the Terraform Registory for docs: [`data_vault_azure_access_credentials`](https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials).

# `dataVaultAzureAccessCredentials` Submodule <a name="`dataVaultAzureAccessCredentials` Submodule" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataVaultAzureAccessCredentials <a name="DataVaultAzureAccessCredentials" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials vault_azure_access_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer"></a>

```typescript
import { dataVaultAzureAccessCredentials } from '@cdktf/provider-vault'

new dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials(scope: Construct, id: string, config: DataVaultAzureAccessCredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig">DataVaultAzureAccessCredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig">DataVaultAzureAccessCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetMaxCredValidationSeconds">resetMaxCredValidationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSecondsBetweenTests">resetNumSecondsBetweenTests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSequentialSuccesses">resetNumSequentialSuccesses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetValidateCreds">resetValidateCreds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxCredValidationSeconds` <a name="resetMaxCredValidationSeconds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetMaxCredValidationSeconds"></a>

```typescript
public resetMaxCredValidationSeconds(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNumSecondsBetweenTests` <a name="resetNumSecondsBetweenTests" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSecondsBetweenTests"></a>

```typescript
public resetNumSecondsBetweenTests(): void
```

##### `resetNumSequentialSuccesses` <a name="resetNumSequentialSuccesses" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetNumSequentialSuccesses"></a>

```typescript
public resetNumSequentialSuccesses(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetValidateCreds` <a name="resetValidateCreds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.resetValidateCreds"></a>

```typescript
public resetValidateCreds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct"></a>

```typescript
import { dataVaultAzureAccessCredentials } from '@cdktf/provider-vault'

dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement"></a>

```typescript
import { dataVaultAzureAccessCredentials } from '@cdktf/provider-vault'

dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource"></a>

```typescript
import { dataVaultAzureAccessCredentials } from '@cdktf/provider-vault'

dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseDuration">leaseDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseId">leaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseRenewable">leaseRenewable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseStartTime">leaseStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environmentInput">environmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSecondsInput">maxCredValidationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput">numSecondsBetweenTestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccessesInput">numSequentialSuccessesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCredsInput">validateCredsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSeconds">maxCredValidationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTests">numSecondsBetweenTests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccesses">numSequentialSuccesses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCreds">validateCreds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseDuration"></a>

```typescript
public readonly leaseDuration: number;
```

- *Type:* number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseId"></a>

```typescript
public readonly leaseId: string;
```

- *Type:* string

---

##### `leaseRenewable`<sup>Required</sup> <a name="leaseRenewable" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseRenewable"></a>

```typescript
public readonly leaseRenewable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `leaseStartTime`<sup>Required</sup> <a name="leaseStartTime" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.leaseStartTime"></a>

```typescript
public readonly leaseStartTime: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environmentInput"></a>

```typescript
public readonly environmentInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxCredValidationSecondsInput`<sup>Optional</sup> <a name="maxCredValidationSecondsInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSecondsInput"></a>

```typescript
public readonly maxCredValidationSecondsInput: number;
```

- *Type:* number

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `numSecondsBetweenTestsInput`<sup>Optional</sup> <a name="numSecondsBetweenTestsInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTestsInput"></a>

```typescript
public readonly numSecondsBetweenTestsInput: number;
```

- *Type:* number

---

##### `numSequentialSuccessesInput`<sup>Optional</sup> <a name="numSequentialSuccessesInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccessesInput"></a>

```typescript
public readonly numSequentialSuccessesInput: number;
```

- *Type:* number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `validateCredsInput`<sup>Optional</sup> <a name="validateCredsInput" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCredsInput"></a>

```typescript
public readonly validateCredsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxCredValidationSeconds`<sup>Required</sup> <a name="maxCredValidationSeconds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.maxCredValidationSeconds"></a>

```typescript
public readonly maxCredValidationSeconds: number;
```

- *Type:* number

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `numSecondsBetweenTests`<sup>Required</sup> <a name="numSecondsBetweenTests" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSecondsBetweenTests"></a>

```typescript
public readonly numSecondsBetweenTests: number;
```

- *Type:* number

---

##### `numSequentialSuccesses`<sup>Required</sup> <a name="numSequentialSuccesses" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.numSequentialSuccesses"></a>

```typescript
public readonly numSequentialSuccesses: number;
```

- *Type:* number

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `validateCreds`<sup>Required</sup> <a name="validateCreds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.validateCreds"></a>

```typescript
public readonly validateCreds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentials.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataVaultAzureAccessCredentialsConfig <a name="DataVaultAzureAccessCredentialsConfig" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.Initializer"></a>

```typescript
import { dataVaultAzureAccessCredentials } from '@cdktf/provider-vault'

const dataVaultAzureAccessCredentialsConfig: dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.backend">backend</a></code> | <code>string</code> | Azure Secret Backend to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.role">role</a></code> | <code>string</code> | Azure Secret Role to read credentials from. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.environment">environment</a></code> | <code>string</code> | The Azure environment to use during credential validation. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#id DataVaultAzureAccessCredentials#id}. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds">maxCredValidationSeconds</a></code> | <code>number</code> | If 'validate_creds' is true, the number of seconds after which to give up validating credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests">numSecondsBetweenTests</a></code> | <code>number</code> | If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses">numSequentialSuccesses</a></code> | <code>number</code> | If 'validate_creds' is true, the number of sequential successes required to validate generated credentials. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.tenantId">tenantId</a></code> | <code>string</code> | The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend. |
| <code><a href="#@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.validateCreds">validateCreds</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether generated credentials should be validated before being returned. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Azure Secret Backend to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#backend DataVaultAzureAccessCredentials#backend}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Azure Secret Role to read credentials from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#role DataVaultAzureAccessCredentials#role}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The Azure environment to use during credential validation.

Defaults to the environment configured in the Vault backend.
Some possible values: AzurePublicCloud, AzureUSGovernmentCloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#environment DataVaultAzureAccessCredentials#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#id DataVaultAzureAccessCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxCredValidationSeconds`<sup>Optional</sup> <a name="maxCredValidationSeconds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.maxCredValidationSeconds"></a>

```typescript
public readonly maxCredValidationSeconds: number;
```

- *Type:* number

If 'validate_creds' is true, the number of seconds after which to give up validating credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#max_cred_validation_seconds DataVaultAzureAccessCredentials#max_cred_validation_seconds}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#namespace DataVaultAzureAccessCredentials#namespace}

---

##### `numSecondsBetweenTests`<sup>Optional</sup> <a name="numSecondsBetweenTests" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSecondsBetweenTests"></a>

```typescript
public readonly numSecondsBetweenTests: number;
```

- *Type:* number

If 'validate_creds' is true, the number of seconds to wait between each test of generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#num_seconds_between_tests DataVaultAzureAccessCredentials#num_seconds_between_tests}

---

##### `numSequentialSuccesses`<sup>Optional</sup> <a name="numSequentialSuccesses" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.numSequentialSuccesses"></a>

```typescript
public readonly numSequentialSuccesses: number;
```

- *Type:* number

If 'validate_creds' is true, the number of sequential successes required to validate generated credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#num_sequential_successes DataVaultAzureAccessCredentials#num_sequential_successes}

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

The subscription ID to use during credential validation. Defaults to the subscription ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#subscription_id DataVaultAzureAccessCredentials#subscription_id}

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The tenant ID to use during credential validation. Defaults to the tenant ID configured in the Vault backend.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#tenant_id DataVaultAzureAccessCredentials#tenant_id}

---

##### `validateCreds`<sup>Optional</sup> <a name="validateCreds" id="@cdktf/provider-vault.dataVaultAzureAccessCredentials.DataVaultAzureAccessCredentialsConfig.property.validateCreds"></a>

```typescript
public readonly validateCreds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether generated credentials should be validated before being returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.21.0/docs/data-sources/azure_access_credentials#validate_creds DataVaultAzureAccessCredentials#validate_creds}

---



