# `vault_ldap_secret_backend_static_role`

Refer to the Terraform Registory for docs: [`vault_ldap_secret_backend_static_role`](https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ldap_secret_backend_static_role).

# `ldapSecretBackendStaticRole` Submodule <a name="`ldapSecretBackendStaticRole` Submodule" id="@cdktf/provider-vault.ldapSecretBackendStaticRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LdapSecretBackendStaticRole <a name="LdapSecretBackendStaticRole" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ldap_secret_backend_static_role vault_ldap_secret_backend_static_role}.

#### Initializers <a name="Initializers" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer"></a>

```typescript
import { ldapSecretBackendStaticRole } from '@cdktf/provider-vault'

new ldapSecretBackendStaticRole.LdapSecretBackendStaticRole(scope: Construct, id: string, config: LdapSecretBackendStaticRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig">LdapSecretBackendStaticRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig">LdapSecretBackendStaticRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDn">resetDn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetMount">resetMount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDn` <a name="resetDn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetDn"></a>

```typescript
public resetDn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMount` <a name="resetMount" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetMount"></a>

```typescript
public resetMount(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct"></a>

```typescript
import { ldapSecretBackendStaticRole } from '@cdktf/provider-vault'

ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement"></a>

```typescript
import { ldapSecretBackendStaticRole } from '@cdktf/provider-vault'

ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource"></a>

```typescript
import { ldapSecretBackendStaticRole } from '@cdktf/provider-vault'

ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dnInput">dnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mountInput">mountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dn">dn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mount">mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dnInput`<sup>Optional</sup> <a name="dnInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dnInput"></a>

```typescript
public readonly dnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mountInput"></a>

```typescript
public readonly mountInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriodInput"></a>

```typescript
public readonly rotationPeriodInput: number;
```

- *Type:* number

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `dn`<sup>Required</sup> <a name="dn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LdapSecretBackendStaticRoleConfig <a name="LdapSecretBackendStaticRoleConfig" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.Initializer"></a>

```typescript
import { ldapSecretBackendStaticRole } from '@cdktf/provider-vault'

const ldapSecretBackendStaticRoleConfig: ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.roleName">roleName</a></code> | <code>string</code> | Name of the role. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>number</code> | How often Vault should rotate the password of the user entry. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.username">username</a></code> | <code>string</code> | The username of the existing LDAP entry to manage password rotation for. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dn">dn</a></code> | <code>string</code> | Distinguished name (DN) of the existing LDAP entry to manage password rotation for. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.mount">mount</a></code> | <code>string</code> | The path where the LDAP secrets backend is mounted. |
| <code><a href="#@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Name of the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ldap_secret_backend_static_role#role_name LdapSecretBackendStaticRole#role_name}

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.rotationPeriod"></a>

```typescript
public readonly rotationPeriod: number;
```

- *Type:* number

How often Vault should rotate the password of the user entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ldap_secret_backend_static_role#rotation_period LdapSecretBackendStaticRole#rotation_period}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username of the existing LDAP entry to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ldap_secret_backend_static_role#username LdapSecretBackendStaticRole#username}

---

##### `dn`<sup>Optional</sup> <a name="dn" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.dn"></a>

```typescript
public readonly dn: string;
```

- *Type:* string

Distinguished name (DN) of the existing LDAP entry to manage password rotation for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ldap_secret_backend_static_role#dn LdapSecretBackendStaticRole#dn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ldap_secret_backend_static_role#id LdapSecretBackendStaticRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mount`<sup>Optional</sup> <a name="mount" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.mount"></a>

```typescript
public readonly mount: string;
```

- *Type:* string

The path where the LDAP secrets backend is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ldap_secret_backend_static_role#mount LdapSecretBackendStaticRole#mount}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-vault.ldapSecretBackendStaticRole.LdapSecretBackendStaticRoleConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.20.1/docs/resources/ldap_secret_backend_static_role#namespace LdapSecretBackendStaticRole#namespace}

---



