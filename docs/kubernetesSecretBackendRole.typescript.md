# `kubernetesSecretBackendRole` Submodule <a name="`kubernetesSecretBackendRole` Submodule" id="@cdktf/provider-vault.kubernetesSecretBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesSecretBackendRole <a name="KubernetesSecretBackendRole" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role vault_kubernetes_secret_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer"></a>

```typescript
import { kubernetesSecretBackendRole } from '@cdktf/provider-vault'

new kubernetesSecretBackendRole.KubernetesSecretBackendRole(scope: Construct, id: string, config: KubernetesSecretBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig">KubernetesSecretBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig">KubernetesSecretBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetAllowedKubernetesNamespaces">resetAllowedKubernetesNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetAllowedKubernetesNamespaceSelector">resetAllowedKubernetesNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraAnnotations">resetExtraAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraLabels">resetExtraLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetGeneratedRoleRules">resetGeneratedRoleRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleName">resetKubernetesRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleType">resetKubernetesRoleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNameTemplate">resetNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetServiceAccountName">resetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenDefaultTtl">resetTokenDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAllowedKubernetesNamespaces` <a name="resetAllowedKubernetesNamespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetAllowedKubernetesNamespaces"></a>

```typescript
public resetAllowedKubernetesNamespaces(): void
```

##### `resetAllowedKubernetesNamespaceSelector` <a name="resetAllowedKubernetesNamespaceSelector" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetAllowedKubernetesNamespaceSelector"></a>

```typescript
public resetAllowedKubernetesNamespaceSelector(): void
```

##### `resetExtraAnnotations` <a name="resetExtraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraAnnotations"></a>

```typescript
public resetExtraAnnotations(): void
```

##### `resetExtraLabels` <a name="resetExtraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetExtraLabels"></a>

```typescript
public resetExtraLabels(): void
```

##### `resetGeneratedRoleRules` <a name="resetGeneratedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetGeneratedRoleRules"></a>

```typescript
public resetGeneratedRoleRules(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKubernetesRoleName` <a name="resetKubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleName"></a>

```typescript
public resetKubernetesRoleName(): void
```

##### `resetKubernetesRoleType` <a name="resetKubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetKubernetesRoleType"></a>

```typescript
public resetKubernetesRoleType(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetNameTemplate` <a name="resetNameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetNameTemplate"></a>

```typescript
public resetNameTemplate(): void
```

##### `resetServiceAccountName` <a name="resetServiceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetServiceAccountName"></a>

```typescript
public resetServiceAccountName(): void
```

##### `resetTokenDefaultTtl` <a name="resetTokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenDefaultTtl"></a>

```typescript
public resetTokenDefaultTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesSecretBackendRole resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct"></a>

```typescript
import { kubernetesSecretBackendRole } from '@cdktf/provider-vault'

kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement"></a>

```typescript
import { kubernetesSecretBackendRole } from '@cdktf/provider-vault'

kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource"></a>

```typescript
import { kubernetesSecretBackendRole } from '@cdktf/provider-vault'

kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport"></a>

```typescript
import { kubernetesSecretBackendRole } from '@cdktf/provider-vault'

kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a KubernetesSecretBackendRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KubernetesSecretBackendRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KubernetesSecretBackendRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesSecretBackendRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaceSelectorInput">allowedKubernetesNamespaceSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespacesInput">allowedKubernetesNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotationsInput">extraAnnotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabelsInput">extraLabelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRulesInput">generatedRoleRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleNameInput">kubernetesRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleTypeInput">kubernetesRoleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplateInput">nameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountNameInput">serviceAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtlInput">tokenDefaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaces">allowedKubernetesNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaceSelector">allowedKubernetesNamespaceSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotations">extraAnnotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabels">extraLabels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRules">generatedRoleRules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleName">kubernetesRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleType">kubernetesRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplate">nameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtl">tokenDefaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedKubernetesNamespaceSelectorInput`<sup>Optional</sup> <a name="allowedKubernetesNamespaceSelectorInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaceSelectorInput"></a>

```typescript
public readonly allowedKubernetesNamespaceSelectorInput: string;
```

- *Type:* string

---

##### `allowedKubernetesNamespacesInput`<sup>Optional</sup> <a name="allowedKubernetesNamespacesInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespacesInput"></a>

```typescript
public readonly allowedKubernetesNamespacesInput: string[];
```

- *Type:* string[]

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `extraAnnotationsInput`<sup>Optional</sup> <a name="extraAnnotationsInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotationsInput"></a>

```typescript
public readonly extraAnnotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extraLabelsInput`<sup>Optional</sup> <a name="extraLabelsInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabelsInput"></a>

```typescript
public readonly extraLabelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generatedRoleRulesInput`<sup>Optional</sup> <a name="generatedRoleRulesInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRulesInput"></a>

```typescript
public readonly generatedRoleRulesInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kubernetesRoleNameInput`<sup>Optional</sup> <a name="kubernetesRoleNameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleNameInput"></a>

```typescript
public readonly kubernetesRoleNameInput: string;
```

- *Type:* string

---

##### `kubernetesRoleTypeInput`<sup>Optional</sup> <a name="kubernetesRoleTypeInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleTypeInput"></a>

```typescript
public readonly kubernetesRoleTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `nameTemplateInput`<sup>Optional</sup> <a name="nameTemplateInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplateInput"></a>

```typescript
public readonly nameTemplateInput: string;
```

- *Type:* string

---

##### `serviceAccountNameInput`<sup>Optional</sup> <a name="serviceAccountNameInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountNameInput"></a>

```typescript
public readonly serviceAccountNameInput: string;
```

- *Type:* string

---

##### `tokenDefaultTtlInput`<sup>Optional</sup> <a name="tokenDefaultTtlInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtlInput"></a>

```typescript
public readonly tokenDefaultTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `allowedKubernetesNamespaces`<sup>Required</sup> <a name="allowedKubernetesNamespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaces"></a>

```typescript
public readonly allowedKubernetesNamespaces: string[];
```

- *Type:* string[]

---

##### `allowedKubernetesNamespaceSelector`<sup>Required</sup> <a name="allowedKubernetesNamespaceSelector" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.allowedKubernetesNamespaceSelector"></a>

```typescript
public readonly allowedKubernetesNamespaceSelector: string;
```

- *Type:* string

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `extraAnnotations`<sup>Required</sup> <a name="extraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraAnnotations"></a>

```typescript
public readonly extraAnnotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `extraLabels`<sup>Required</sup> <a name="extraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.extraLabels"></a>

```typescript
public readonly extraLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generatedRoleRules`<sup>Required</sup> <a name="generatedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.generatedRoleRules"></a>

```typescript
public readonly generatedRoleRules: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kubernetesRoleName`<sup>Required</sup> <a name="kubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleName"></a>

```typescript
public readonly kubernetesRoleName: string;
```

- *Type:* string

---

##### `kubernetesRoleType`<sup>Required</sup> <a name="kubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.kubernetesRoleType"></a>

```typescript
public readonly kubernetesRoleType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `nameTemplate`<sup>Required</sup> <a name="nameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.nameTemplate"></a>

```typescript
public readonly nameTemplate: string;
```

- *Type:* string

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

---

##### `tokenDefaultTtl`<sup>Required</sup> <a name="tokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenDefaultTtl"></a>

```typescript
public readonly tokenDefaultTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesSecretBackendRoleConfig <a name="KubernetesSecretBackendRoleConfig" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.Initializer"></a>

```typescript
import { kubernetesSecretBackendRole } from '@cdktf/provider-vault'

const kubernetesSecretBackendRoleConfig: kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | The mount path for the Kubernetes secrets engine. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.name">name</a></code> | <code>string</code> | The name of the role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaces">allowedKubernetesNamespaces</a></code> | <code>string[]</code> | The list of Kubernetes namespaces this role can generate credentials for. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaceSelector">allowedKubernetesNamespaceSelector</a></code> | <code>string</code> | A label selector for Kubernetes namespaces in which credentials can begenerated. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraAnnotations">extraAnnotations</a></code> | <code>{[ key: string ]: string}</code> | Additional annotations to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraLabels">extraLabels</a></code> | <code>{[ key: string ]: string}</code> | Additional labels to apply to all generated Kubernetes objects. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.generatedRoleRules">generatedRoleRules</a></code> | <code>string</code> | The Role or ClusterRole rules to use when generating a role. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleName">kubernetesRoleName</a></code> | <code>string</code> | The pre-existing Role or ClusterRole to bind a generated service account to. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleType">kubernetesRoleType</a></code> | <code>string</code> | Specifies whether the Kubernetes role is a Role or ClusterRole. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.nameTemplate">nameTemplate</a></code> | <code>string</code> | The name template to use when generating service accounts, roles and role bindings. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.serviceAccountName">serviceAccountName</a></code> | <code>string</code> | The pre-existing service account to generate tokens for. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenDefaultTtl">tokenDefaultTtl</a></code> | <code>number</code> | The default TTL for generated Kubernetes tokens in seconds. |
| <code><a href="#@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum TTL for generated Kubernetes tokens in seconds. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The mount path for the Kubernetes secrets engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#backend KubernetesSecretBackendRole#backend}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#name KubernetesSecretBackendRole#name}

---

##### `allowedKubernetesNamespaces`<sup>Optional</sup> <a name="allowedKubernetesNamespaces" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaces"></a>

```typescript
public readonly allowedKubernetesNamespaces: string[];
```

- *Type:* string[]

The list of Kubernetes namespaces this role can generate credentials for.

If set to '*' all namespaces are allowed. If set with`allowed_kubernetes_namespace_selector`, the conditions are `OR`ed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespaces KubernetesSecretBackendRole#allowed_kubernetes_namespaces}

---

##### `allowedKubernetesNamespaceSelector`<sup>Optional</sup> <a name="allowedKubernetesNamespaceSelector" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.allowedKubernetesNamespaceSelector"></a>

```typescript
public readonly allowedKubernetesNamespaceSelector: string;
```

- *Type:* string

A label selector for Kubernetes namespaces in which credentials can begenerated.

Accepts either a JSON or YAML object. The value should be of typeLabelSelector. If set with `allowed_kubernetes_namespace`, the conditions are `OR`ed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#allowed_kubernetes_namespace_selector KubernetesSecretBackendRole#allowed_kubernetes_namespace_selector}

---

##### `extraAnnotations`<sup>Optional</sup> <a name="extraAnnotations" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraAnnotations"></a>

```typescript
public readonly extraAnnotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional annotations to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#extra_annotations KubernetesSecretBackendRole#extra_annotations}

---

##### `extraLabels`<sup>Optional</sup> <a name="extraLabels" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.extraLabels"></a>

```typescript
public readonly extraLabels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Additional labels to apply to all generated Kubernetes objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#extra_labels KubernetesSecretBackendRole#extra_labels}

---

##### `generatedRoleRules`<sup>Optional</sup> <a name="generatedRoleRules" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.generatedRoleRules"></a>

```typescript
public readonly generatedRoleRules: string;
```

- *Type:* string

The Role or ClusterRole rules to use when generating a role.

Accepts either JSON or YAML formatted rules. Mutually exclusive with 'service_account_name' and 'kubernetes_role_name'. If set, the entire chain of Kubernetes objects will be generated when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#generated_role_rules KubernetesSecretBackendRole#generated_role_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#id KubernetesSecretBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kubernetesRoleName`<sup>Optional</sup> <a name="kubernetesRoleName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleName"></a>

```typescript
public readonly kubernetesRoleName: string;
```

- *Type:* string

The pre-existing Role or ClusterRole to bind a generated service account to.

Mutually exclusive with 'service_account_name' and 'generated_role_rules'. If set, Kubernetes token, service account, and role binding objects will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#kubernetes_role_name KubernetesSecretBackendRole#kubernetes_role_name}

---

##### `kubernetesRoleType`<sup>Optional</sup> <a name="kubernetesRoleType" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.kubernetesRoleType"></a>

```typescript
public readonly kubernetesRoleType: string;
```

- *Type:* string

Specifies whether the Kubernetes role is a Role or ClusterRole.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#kubernetes_role_type KubernetesSecretBackendRole#kubernetes_role_type}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#namespace KubernetesSecretBackendRole#namespace}

---

##### `nameTemplate`<sup>Optional</sup> <a name="nameTemplate" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.nameTemplate"></a>

```typescript
public readonly nameTemplate: string;
```

- *Type:* string

The name template to use when generating service accounts, roles and role bindings.

If unset, a default template is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#name_template KubernetesSecretBackendRole#name_template}

---

##### `serviceAccountName`<sup>Optional</sup> <a name="serviceAccountName" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.serviceAccountName"></a>

```typescript
public readonly serviceAccountName: string;
```

- *Type:* string

The pre-existing service account to generate tokens for.

Mutually exclusive with 'kubernetes_role_name' and 'generated_role_rules'. If set, only a Kubernetes token will be created when credentials are requested.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#service_account_name KubernetesSecretBackendRole#service_account_name}

---

##### `tokenDefaultTtl`<sup>Optional</sup> <a name="tokenDefaultTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenDefaultTtl"></a>

```typescript
public readonly tokenDefaultTtl: number;
```

- *Type:* number

The default TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#token_default_ttl KubernetesSecretBackendRole#token_default_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.kubernetesSecretBackendRole.KubernetesSecretBackendRoleConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum TTL for generated Kubernetes tokens in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.4.0/docs/resources/kubernetes_secret_backend_role#token_max_ttl KubernetesSecretBackendRole#token_max_ttl}

---



