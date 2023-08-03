# `vault_gcp_secret_impersonated_account`

Refer to the Terraform Registory for docs: [`vault_gcp_secret_impersonated_account`](https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/gcp_secret_impersonated_account).

# `gcpSecretImpersonatedAccount` Submodule <a name="`gcpSecretImpersonatedAccount` Submodule" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpSecretImpersonatedAccount <a name="GcpSecretImpersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/gcp_secret_impersonated_account vault_gcp_secret_impersonated_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer"></a>

```typescript
import { gcpSecretImpersonatedAccount } from '@cdktf/provider-vault'

new gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount(scope: Construct, id: string, config: GcpSecretImpersonatedAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig">GcpSecretImpersonatedAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig">GcpSecretImpersonatedAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTokenScopes">resetTokenScopes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTokenScopes` <a name="resetTokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.resetTokenScopes"></a>

```typescript
public resetTokenScopes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct"></a>

```typescript
import { gcpSecretImpersonatedAccount } from '@cdktf/provider-vault'

gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement"></a>

```typescript
import { gcpSecretImpersonatedAccount } from '@cdktf/provider-vault'

gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource"></a>

```typescript
import { gcpSecretImpersonatedAccount } from '@cdktf/provider-vault'

gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountProject">serviceAccountProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccountInput">impersonatedAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopesInput">tokenScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccount">impersonatedAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopes">tokenScopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceAccountProject`<sup>Required</sup> <a name="serviceAccountProject" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountProject"></a>

```typescript
public readonly serviceAccountProject: string;
```

- *Type:* string

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `impersonatedAccountInput`<sup>Optional</sup> <a name="impersonatedAccountInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccountInput"></a>

```typescript
public readonly impersonatedAccountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `tokenScopesInput`<sup>Optional</sup> <a name="tokenScopesInput" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopesInput"></a>

```typescript
public readonly tokenScopesInput: string[];
```

- *Type:* string[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `impersonatedAccount`<sup>Required</sup> <a name="impersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.impersonatedAccount"></a>

```typescript
public readonly impersonatedAccount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `tokenScopes`<sup>Required</sup> <a name="tokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tokenScopes"></a>

```typescript
public readonly tokenScopes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpSecretImpersonatedAccountConfig <a name="GcpSecretImpersonatedAccountConfig" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.Initializer"></a>

```typescript
import { gcpSecretImpersonatedAccount } from '@cdktf/provider-vault'

const gcpSecretImpersonatedAccountConfig: gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.backend">backend</a></code> | <code>string</code> | Path where the GCP secrets engine is mounted. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.impersonatedAccount">impersonatedAccount</a></code> | <code>string</code> | Name of the Impersonated Account to create. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | Email of the GCP service account. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}. |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.tokenScopes">tokenScopes</a></code> | <code>string[]</code> | List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Path where the GCP secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/gcp_secret_impersonated_account#backend GcpSecretImpersonatedAccount#backend}

---

##### `impersonatedAccount`<sup>Required</sup> <a name="impersonatedAccount" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.impersonatedAccount"></a>

```typescript
public readonly impersonatedAccount: string;
```

- *Type:* string

Name of the Impersonated Account to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/gcp_secret_impersonated_account#impersonated_account GcpSecretImpersonatedAccount#impersonated_account}

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

Email of the GCP service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/gcp_secret_impersonated_account#service_account_email GcpSecretImpersonatedAccount#service_account_email}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/gcp_secret_impersonated_account#id GcpSecretImpersonatedAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/gcp_secret_impersonated_account#namespace GcpSecretImpersonatedAccount#namespace}

---

##### `tokenScopes`<sup>Optional</sup> <a name="tokenScopes" id="@cdktf/provider-vault.gcpSecretImpersonatedAccount.GcpSecretImpersonatedAccountConfig.property.tokenScopes"></a>

```typescript
public readonly tokenScopes: string[];
```

- *Type:* string[]

List of OAuth scopes to assign to `access_token` secrets generated under this impersonated account (`access_token` impersonated accounts only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.19.0/docs/resources/gcp_secret_impersonated_account#token_scopes GcpSecretImpersonatedAccount#token_scopes}

---



