# `vault_gcp_auth_backend_role`

Refer to the Terraform Registory for docs: [`vault_gcp_auth_backend_role`](https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role).

# `gcpAuthBackendRole` Submodule <a name="`gcpAuthBackendRole` Submodule" id="@cdktf/provider-vault.gcpAuthBackendRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpAuthBackendRole <a name="GcpAuthBackendRole" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole"></a>

Represents a {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role vault_gcp_auth_backend_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer"></a>

```typescript
import { gcpAuthBackendRole } from '@cdktf/provider-vault'

new gcpAuthBackendRole.GcpAuthBackendRole(scope: Construct, id: string, config: GcpAuthBackendRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig">GcpAuthBackendRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig">GcpAuthBackendRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAddGroupAliases">resetAddGroupAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAllowGceInference">resetAllowGceInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundInstanceGroups">resetBoundInstanceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundLabels">resetBoundLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundProjects">resetBoundProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundRegions">resetBoundRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundServiceAccounts">resetBoundServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundZones">resetBoundZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetMaxJwtExp">resetMaxJwtExp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenBoundCidrs">resetTokenBoundCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenExplicitMaxTtl">resetTokenExplicitMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenMaxTtl">resetTokenMaxTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNoDefaultPolicy">resetTokenNoDefaultPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNumUses">resetTokenNumUses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPeriod">resetTokenPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPolicies">resetTokenPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenType">resetTokenType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAddGroupAliases` <a name="resetAddGroupAliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAddGroupAliases"></a>

```typescript
public resetAddGroupAliases(): void
```

##### `resetAllowGceInference` <a name="resetAllowGceInference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetAllowGceInference"></a>

```typescript
public resetAllowGceInference(): void
```

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBackend"></a>

```typescript
public resetBackend(): void
```

##### `resetBoundInstanceGroups` <a name="resetBoundInstanceGroups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundInstanceGroups"></a>

```typescript
public resetBoundInstanceGroups(): void
```

##### `resetBoundLabels` <a name="resetBoundLabels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundLabels"></a>

```typescript
public resetBoundLabels(): void
```

##### `resetBoundProjects` <a name="resetBoundProjects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundProjects"></a>

```typescript
public resetBoundProjects(): void
```

##### `resetBoundRegions` <a name="resetBoundRegions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundRegions"></a>

```typescript
public resetBoundRegions(): void
```

##### `resetBoundServiceAccounts` <a name="resetBoundServiceAccounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundServiceAccounts"></a>

```typescript
public resetBoundServiceAccounts(): void
```

##### `resetBoundZones` <a name="resetBoundZones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetBoundZones"></a>

```typescript
public resetBoundZones(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxJwtExp` <a name="resetMaxJwtExp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetMaxJwtExp"></a>

```typescript
public resetMaxJwtExp(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetTokenBoundCidrs` <a name="resetTokenBoundCidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenBoundCidrs"></a>

```typescript
public resetTokenBoundCidrs(): void
```

##### `resetTokenExplicitMaxTtl` <a name="resetTokenExplicitMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenExplicitMaxTtl"></a>

```typescript
public resetTokenExplicitMaxTtl(): void
```

##### `resetTokenMaxTtl` <a name="resetTokenMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenMaxTtl"></a>

```typescript
public resetTokenMaxTtl(): void
```

##### `resetTokenNoDefaultPolicy` <a name="resetTokenNoDefaultPolicy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNoDefaultPolicy"></a>

```typescript
public resetTokenNoDefaultPolicy(): void
```

##### `resetTokenNumUses` <a name="resetTokenNumUses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenNumUses"></a>

```typescript
public resetTokenNumUses(): void
```

##### `resetTokenPeriod` <a name="resetTokenPeriod" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPeriod"></a>

```typescript
public resetTokenPeriod(): void
```

##### `resetTokenPolicies` <a name="resetTokenPolicies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenPolicies"></a>

```typescript
public resetTokenPolicies(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

##### `resetTokenType` <a name="resetTokenType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.resetTokenType"></a>

```typescript
public resetTokenType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct"></a>

```typescript
import { gcpAuthBackendRole } from '@cdktf/provider-vault'

gcpAuthBackendRole.GcpAuthBackendRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement"></a>

```typescript
import { gcpAuthBackendRole } from '@cdktf/provider-vault'

gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource"></a>

```typescript
import { gcpAuthBackendRole } from '@cdktf/provider-vault'

gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliasesInput">addGroupAliasesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInferenceInput">allowGceInferenceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroupsInput">boundInstanceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabelsInput">boundLabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjectsInput">boundProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegionsInput">boundRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccountsInput">boundServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZonesInput">boundZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExpInput">maxJwtExpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrsInput">tokenBoundCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtlInput">tokenExplicitMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtlInput">tokenMaxTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicyInput">tokenNoDefaultPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUsesInput">tokenNumUsesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriodInput">tokenPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPoliciesInput">tokenPoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtlInput">tokenTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTypeInput">tokenTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliases">addGroupAliases</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInference">allowGceInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroups">boundInstanceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabels">boundLabels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjects">boundProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegions">boundRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccounts">boundServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZones">boundZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExp">maxJwtExp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenType">tokenType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addGroupAliasesInput`<sup>Optional</sup> <a name="addGroupAliasesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliasesInput"></a>

```typescript
public readonly addGroupAliasesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowGceInferenceInput`<sup>Optional</sup> <a name="allowGceInferenceInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInferenceInput"></a>

```typescript
public readonly allowGceInferenceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `boundInstanceGroupsInput`<sup>Optional</sup> <a name="boundInstanceGroupsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroupsInput"></a>

```typescript
public readonly boundInstanceGroupsInput: string[];
```

- *Type:* string[]

---

##### `boundLabelsInput`<sup>Optional</sup> <a name="boundLabelsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabelsInput"></a>

```typescript
public readonly boundLabelsInput: string[];
```

- *Type:* string[]

---

##### `boundProjectsInput`<sup>Optional</sup> <a name="boundProjectsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjectsInput"></a>

```typescript
public readonly boundProjectsInput: string[];
```

- *Type:* string[]

---

##### `boundRegionsInput`<sup>Optional</sup> <a name="boundRegionsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegionsInput"></a>

```typescript
public readonly boundRegionsInput: string[];
```

- *Type:* string[]

---

##### `boundServiceAccountsInput`<sup>Optional</sup> <a name="boundServiceAccountsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccountsInput"></a>

```typescript
public readonly boundServiceAccountsInput: string[];
```

- *Type:* string[]

---

##### `boundZonesInput`<sup>Optional</sup> <a name="boundZonesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZonesInput"></a>

```typescript
public readonly boundZonesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxJwtExpInput`<sup>Optional</sup> <a name="maxJwtExpInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExpInput"></a>

```typescript
public readonly maxJwtExpInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `tokenBoundCidrsInput`<sup>Optional</sup> <a name="tokenBoundCidrsInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrsInput"></a>

```typescript
public readonly tokenBoundCidrsInput: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtlInput`<sup>Optional</sup> <a name="tokenExplicitMaxTtlInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtlInput"></a>

```typescript
public readonly tokenExplicitMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenMaxTtlInput`<sup>Optional</sup> <a name="tokenMaxTtlInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtlInput"></a>

```typescript
public readonly tokenMaxTtlInput: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicyInput`<sup>Optional</sup> <a name="tokenNoDefaultPolicyInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicyInput"></a>

```typescript
public readonly tokenNoDefaultPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUsesInput`<sup>Optional</sup> <a name="tokenNumUsesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUsesInput"></a>

```typescript
public readonly tokenNumUsesInput: number;
```

- *Type:* number

---

##### `tokenPeriodInput`<sup>Optional</sup> <a name="tokenPeriodInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriodInput"></a>

```typescript
public readonly tokenPeriodInput: number;
```

- *Type:* number

---

##### `tokenPoliciesInput`<sup>Optional</sup> <a name="tokenPoliciesInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPoliciesInput"></a>

```typescript
public readonly tokenPoliciesInput: string[];
```

- *Type:* string[]

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: number;
```

- *Type:* number

---

##### `tokenTypeInput`<sup>Optional</sup> <a name="tokenTypeInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTypeInput"></a>

```typescript
public readonly tokenTypeInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `addGroupAliases`<sup>Required</sup> <a name="addGroupAliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.addGroupAliases"></a>

```typescript
public readonly addGroupAliases: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowGceInference`<sup>Required</sup> <a name="allowGceInference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.allowGceInference"></a>

```typescript
public readonly allowGceInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `boundInstanceGroups`<sup>Required</sup> <a name="boundInstanceGroups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundInstanceGroups"></a>

```typescript
public readonly boundInstanceGroups: string[];
```

- *Type:* string[]

---

##### `boundLabels`<sup>Required</sup> <a name="boundLabels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundLabels"></a>

```typescript
public readonly boundLabels: string[];
```

- *Type:* string[]

---

##### `boundProjects`<sup>Required</sup> <a name="boundProjects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundProjects"></a>

```typescript
public readonly boundProjects: string[];
```

- *Type:* string[]

---

##### `boundRegions`<sup>Required</sup> <a name="boundRegions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundRegions"></a>

```typescript
public readonly boundRegions: string[];
```

- *Type:* string[]

---

##### `boundServiceAccounts`<sup>Required</sup> <a name="boundServiceAccounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundServiceAccounts"></a>

```typescript
public readonly boundServiceAccounts: string[];
```

- *Type:* string[]

---

##### `boundZones`<sup>Required</sup> <a name="boundZones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.boundZones"></a>

```typescript
public readonly boundZones: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxJwtExp`<sup>Required</sup> <a name="maxJwtExp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.maxJwtExp"></a>

```typescript
public readonly maxJwtExp: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `tokenBoundCidrs`<sup>Required</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

---

##### `tokenExplicitMaxTtl`<sup>Required</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

---

##### `tokenMaxTtl`<sup>Required</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

---

##### `tokenNoDefaultPolicy`<sup>Required</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tokenNumUses`<sup>Required</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

---

##### `tokenPeriod`<sup>Required</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

---

##### `tokenType`<sup>Required</sup> <a name="tokenType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GcpAuthBackendRoleConfig <a name="GcpAuthBackendRoleConfig" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.Initializer"></a>

```typescript
import { gcpAuthBackendRole } from '@cdktf/provider-vault'

const gcpAuthBackendRoleConfig: gcpAuthBackendRole.GcpAuthBackendRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#role GcpAuthBackendRole#role}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#type GcpAuthBackendRole#type}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.addGroupAliases">addGroupAliases</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.allowGceInference">allowGceInference</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.backend">backend</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundInstanceGroups">boundInstanceGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundLabels">boundLabels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundProjects">boundProjects</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundRegions">boundRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundServiceAccounts">boundServiceAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundZones">boundZones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#id GcpAuthBackendRole#id}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.maxJwtExp">maxJwtExp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenBoundCidrs">tokenBoundCidrs</a></code> | <code>string[]</code> | Specifies the blocks of IP addresses which are allowed to use the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl">tokenExplicitMaxTtl</a></code> | <code>number</code> | Generated Token's Explicit Maximum TTL in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenMaxTtl">tokenMaxTtl</a></code> | <code>number</code> | The maximum lifetime of the generated token. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy">tokenNoDefaultPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, the 'default' policy will not automatically be added to generated tokens. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNumUses">tokenNumUses</a></code> | <code>number</code> | The maximum number of times a token may be used, a value of zero means unlimited. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPeriod">tokenPeriod</a></code> | <code>number</code> | Generated Token's Period. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPolicies">tokenPolicies</a></code> | <code>string[]</code> | Generated Token's Policies. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenTtl">tokenTtl</a></code> | <code>number</code> | The initial ttl of the token to generate in seconds. |
| <code><a href="#@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenType">tokenType</a></code> | <code>string</code> | The type of token to generate, service or batch. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#role GcpAuthBackendRole#role}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#type GcpAuthBackendRole#type}.

---

##### `addGroupAliases`<sup>Optional</sup> <a name="addGroupAliases" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.addGroupAliases"></a>

```typescript
public readonly addGroupAliases: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#add_group_aliases GcpAuthBackendRole#add_group_aliases}.

---

##### `allowGceInference`<sup>Optional</sup> <a name="allowGceInference" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.allowGceInference"></a>

```typescript
public readonly allowGceInference: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#allow_gce_inference GcpAuthBackendRole#allow_gce_inference}.

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#backend GcpAuthBackendRole#backend}.

---

##### `boundInstanceGroups`<sup>Optional</sup> <a name="boundInstanceGroups" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundInstanceGroups"></a>

```typescript
public readonly boundInstanceGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_instance_groups GcpAuthBackendRole#bound_instance_groups}.

---

##### `boundLabels`<sup>Optional</sup> <a name="boundLabels" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundLabels"></a>

```typescript
public readonly boundLabels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_labels GcpAuthBackendRole#bound_labels}.

---

##### `boundProjects`<sup>Optional</sup> <a name="boundProjects" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundProjects"></a>

```typescript
public readonly boundProjects: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_projects GcpAuthBackendRole#bound_projects}.

---

##### `boundRegions`<sup>Optional</sup> <a name="boundRegions" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundRegions"></a>

```typescript
public readonly boundRegions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_regions GcpAuthBackendRole#bound_regions}.

---

##### `boundServiceAccounts`<sup>Optional</sup> <a name="boundServiceAccounts" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundServiceAccounts"></a>

```typescript
public readonly boundServiceAccounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_service_accounts GcpAuthBackendRole#bound_service_accounts}.

---

##### `boundZones`<sup>Optional</sup> <a name="boundZones" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.boundZones"></a>

```typescript
public readonly boundZones: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#bound_zones GcpAuthBackendRole#bound_zones}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#id GcpAuthBackendRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxJwtExp`<sup>Optional</sup> <a name="maxJwtExp" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.maxJwtExp"></a>

```typescript
public readonly maxJwtExp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#max_jwt_exp GcpAuthBackendRole#max_jwt_exp}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#namespace GcpAuthBackendRole#namespace}

---

##### `tokenBoundCidrs`<sup>Optional</sup> <a name="tokenBoundCidrs" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenBoundCidrs"></a>

```typescript
public readonly tokenBoundCidrs: string[];
```

- *Type:* string[]

Specifies the blocks of IP addresses which are allowed to use the generated token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#token_bound_cidrs GcpAuthBackendRole#token_bound_cidrs}

---

##### `tokenExplicitMaxTtl`<sup>Optional</sup> <a name="tokenExplicitMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenExplicitMaxTtl"></a>

```typescript
public readonly tokenExplicitMaxTtl: number;
```

- *Type:* number

Generated Token's Explicit Maximum TTL in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#token_explicit_max_ttl GcpAuthBackendRole#token_explicit_max_ttl}

---

##### `tokenMaxTtl`<sup>Optional</sup> <a name="tokenMaxTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenMaxTtl"></a>

```typescript
public readonly tokenMaxTtl: number;
```

- *Type:* number

The maximum lifetime of the generated token.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#token_max_ttl GcpAuthBackendRole#token_max_ttl}

---

##### `tokenNoDefaultPolicy`<sup>Optional</sup> <a name="tokenNoDefaultPolicy" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNoDefaultPolicy"></a>

```typescript
public readonly tokenNoDefaultPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, the 'default' policy will not automatically be added to generated tokens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#token_no_default_policy GcpAuthBackendRole#token_no_default_policy}

---

##### `tokenNumUses`<sup>Optional</sup> <a name="tokenNumUses" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenNumUses"></a>

```typescript
public readonly tokenNumUses: number;
```

- *Type:* number

The maximum number of times a token may be used, a value of zero means unlimited.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#token_num_uses GcpAuthBackendRole#token_num_uses}

---

##### `tokenPeriod`<sup>Optional</sup> <a name="tokenPeriod" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPeriod"></a>

```typescript
public readonly tokenPeriod: number;
```

- *Type:* number

Generated Token's Period.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#token_period GcpAuthBackendRole#token_period}

---

##### `tokenPolicies`<sup>Optional</sup> <a name="tokenPolicies" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenPolicies"></a>

```typescript
public readonly tokenPolicies: string[];
```

- *Type:* string[]

Generated Token's Policies.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#token_policies GcpAuthBackendRole#token_policies}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: number;
```

- *Type:* number

The initial ttl of the token to generate in seconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#token_ttl GcpAuthBackendRole#token_ttl}

---

##### `tokenType`<sup>Optional</sup> <a name="tokenType" id="@cdktf/provider-vault.gcpAuthBackendRole.GcpAuthBackendRoleConfig.property.tokenType"></a>

```typescript
public readonly tokenType: string;
```

- *Type:* string

The type of token to generate, service or batch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_auth_backend_role#token_type GcpAuthBackendRole#token_type}

---



