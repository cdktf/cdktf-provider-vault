/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureSecretBackendRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application Object ID for an existing service principal that will be used instead of creating dynamic service principals.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#application_object_id AzureSecretBackendRole#application_object_id}
  */
  readonly applicationObjectId?: string;
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#backend AzureSecretBackendRole#backend}
  */
  readonly backend?: string;
  /**
  * Human-friendly description of the mount for the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#description AzureSecretBackendRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#id AzureSecretBackendRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Human-friendly description of the mount for the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#max_ttl AzureSecretBackendRole#max_ttl}
  */
  readonly maxTtl?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#namespace AzureSecretBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Indicates whether the applications and service principals created by Vault will be permanently deleted when the corresponding leases expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#permanently_delete AzureSecretBackendRole#permanently_delete}
  */
  readonly permanentlyDelete?: boolean | cdktf.IResolvable;
  /**
  * Name of the role to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#role AzureSecretBackendRole#role}
  */
  readonly role: string;
  /**
  * Specifies the security principal types that are allowed to sign in to the application. Valid values are: AzureADMyOrg, AzureADMultipleOrgs, AzureADandPersonalMicrosoftAccount, PersonalMicrosoftAccount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#sign_in_audience AzureSecretBackendRole#sign_in_audience}
  */
  readonly signInAudience?: string;
  /**
  * Comma-separated strings of Azure tags to attach to an application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#tags AzureSecretBackendRole#tags}
  */
  readonly tags?: string[];
  /**
  * Human-friendly description of the mount for the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#ttl AzureSecretBackendRole#ttl}
  */
  readonly ttl?: string;
  /**
  * azure_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#azure_groups AzureSecretBackendRole#azure_groups}
  */
  readonly azureGroups?: AzureSecretBackendRoleAzureGroups[] | cdktf.IResolvable;
  /**
  * azure_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#azure_roles AzureSecretBackendRole#azure_roles}
  */
  readonly azureRoles?: AzureSecretBackendRoleAzureRoles[] | cdktf.IResolvable;
}
export interface AzureSecretBackendRoleAzureGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#group_name AzureSecretBackendRole#group_name}
  */
  readonly groupName: string;
}

export function azureSecretBackendRoleAzureGroupsToTerraform(struct?: AzureSecretBackendRoleAzureGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


export function azureSecretBackendRoleAzureGroupsToHclTerraform(struct?: AzureSecretBackendRoleAzureGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSecretBackendRoleAzureGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AzureSecretBackendRoleAzureGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSecretBackendRoleAzureGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
}

export class AzureSecretBackendRoleAzureGroupsList extends cdktf.ComplexList {
  public internalValue? : AzureSecretBackendRoleAzureGroups[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AzureSecretBackendRoleAzureGroupsOutputReference {
    return new AzureSecretBackendRoleAzureGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureSecretBackendRoleAzureRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#role_id AzureSecretBackendRole#role_id}
  */
  readonly roleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#role_name AzureSecretBackendRole#role_name}
  */
  readonly roleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#scope AzureSecretBackendRole#scope}
  */
  readonly scope: string;
}

export function azureSecretBackendRoleAzureRolesToTerraform(struct?: AzureSecretBackendRoleAzureRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
    role_name: cdktf.stringToTerraform(struct!.roleName),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function azureSecretBackendRoleAzureRolesToHclTerraform(struct?: AzureSecretBackendRoleAzureRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureSecretBackendRoleAzureRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AzureSecretBackendRoleAzureRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureSecretBackendRoleAzureRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
      this._roleName = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
      this._roleName = value.roleName;
      this._scope = value.scope;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // role_name - computed: true, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class AzureSecretBackendRoleAzureRolesList extends cdktf.ComplexList {
  public internalValue? : AzureSecretBackendRoleAzureRoles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AzureSecretBackendRoleAzureRolesOutputReference {
    return new AzureSecretBackendRoleAzureRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role vault_azure_secret_backend_role}
*/
export class AzureSecretBackendRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_azure_secret_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureSecretBackendRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureSecretBackendRole to import
  * @param importFromId The id of the existing AzureSecretBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureSecretBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_azure_secret_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.5.0/docs/resources/azure_secret_backend_role vault_azure_secret_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureSecretBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AzureSecretBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_azure_secret_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.5.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationObjectId = config.applicationObjectId;
    this._backend = config.backend;
    this._description = config.description;
    this._id = config.id;
    this._maxTtl = config.maxTtl;
    this._namespace = config.namespace;
    this._permanentlyDelete = config.permanentlyDelete;
    this._role = config.role;
    this._signInAudience = config.signInAudience;
    this._tags = config.tags;
    this._ttl = config.ttl;
    this._azureGroups.internalValue = config.azureGroups;
    this._azureRoles.internalValue = config.azureRoles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_object_id - computed: false, optional: true, required: false
  private _applicationObjectId?: string; 
  public get applicationObjectId() {
    return this.getStringAttribute('application_object_id');
  }
  public set applicationObjectId(value: string) {
    this._applicationObjectId = value;
  }
  public resetApplicationObjectId() {
    this._applicationObjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationObjectIdInput() {
    return this._applicationObjectId;
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: string; 
  public get maxTtl() {
    return this.getStringAttribute('max_ttl');
  }
  public set maxTtl(value: string) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // permanently_delete - computed: true, optional: true, required: false
  private _permanentlyDelete?: boolean | cdktf.IResolvable; 
  public get permanentlyDelete() {
    return this.getBooleanAttribute('permanently_delete');
  }
  public set permanentlyDelete(value: boolean | cdktf.IResolvable) {
    this._permanentlyDelete = value;
  }
  public resetPermanentlyDelete() {
    this._permanentlyDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentlyDeleteInput() {
    return this._permanentlyDelete;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // sign_in_audience - computed: false, optional: true, required: false
  private _signInAudience?: string; 
  public get signInAudience() {
    return this.getStringAttribute('sign_in_audience');
  }
  public set signInAudience(value: string) {
    this._signInAudience = value;
  }
  public resetSignInAudience() {
    this._signInAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInAudienceInput() {
    return this._signInAudience;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // azure_groups - computed: false, optional: true, required: false
  private _azureGroups = new AzureSecretBackendRoleAzureGroupsList(this, "azure_groups", true);
  public get azureGroups() {
    return this._azureGroups;
  }
  public putAzureGroups(value: AzureSecretBackendRoleAzureGroups[] | cdktf.IResolvable) {
    this._azureGroups.internalValue = value;
  }
  public resetAzureGroups() {
    this._azureGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureGroupsInput() {
    return this._azureGroups.internalValue;
  }

  // azure_roles - computed: false, optional: true, required: false
  private _azureRoles = new AzureSecretBackendRoleAzureRolesList(this, "azure_roles", true);
  public get azureRoles() {
    return this._azureRoles;
  }
  public putAzureRoles(value: AzureSecretBackendRoleAzureRoles[] | cdktf.IResolvable) {
    this._azureRoles.internalValue = value;
  }
  public resetAzureRoles() {
    this._azureRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRolesInput() {
    return this._azureRoles.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_object_id: cdktf.stringToTerraform(this._applicationObjectId),
      backend: cdktf.stringToTerraform(this._backend),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      max_ttl: cdktf.stringToTerraform(this._maxTtl),
      namespace: cdktf.stringToTerraform(this._namespace),
      permanently_delete: cdktf.booleanToTerraform(this._permanentlyDelete),
      role: cdktf.stringToTerraform(this._role),
      sign_in_audience: cdktf.stringToTerraform(this._signInAudience),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      ttl: cdktf.stringToTerraform(this._ttl),
      azure_groups: cdktf.listMapper(azureSecretBackendRoleAzureGroupsToTerraform, true)(this._azureGroups.internalValue),
      azure_roles: cdktf.listMapper(azureSecretBackendRoleAzureRolesToTerraform, true)(this._azureRoles.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_object_id: {
        value: cdktf.stringToHclTerraform(this._applicationObjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ttl: {
        value: cdktf.stringToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permanently_delete: {
        value: cdktf.booleanToHclTerraform(this._permanentlyDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_in_audience: {
        value: cdktf.stringToHclTerraform(this._signInAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_groups: {
        value: cdktf.listMapperHcl(azureSecretBackendRoleAzureGroupsToHclTerraform, true)(this._azureGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AzureSecretBackendRoleAzureGroupsList",
      },
      azure_roles: {
        value: cdktf.listMapperHcl(azureSecretBackendRoleAzureRolesToHclTerraform, true)(this._azureRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AzureSecretBackendRoleAzureRolesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
