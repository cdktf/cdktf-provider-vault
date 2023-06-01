// https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/identity_entity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVaultIdentityEntityConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the alias.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/identity_entity#alias_id DataVaultIdentityEntity#alias_id}
  */
  readonly aliasId?: string;
  /**
  * Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with `alias_name`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/identity_entity#alias_mount_accessor DataVaultIdentityEntity#alias_mount_accessor}
  */
  readonly aliasMountAccessor?: string;
  /**
  * Name of the alias. This should be supplied in conjunction with `alias_mount_accessor`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/identity_entity#alias_name DataVaultIdentityEntity#alias_name}
  */
  readonly aliasName?: string;
  /**
  * ID of the entity.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/identity_entity#entity_id DataVaultIdentityEntity#entity_id}
  */
  readonly entityId?: string;
  /**
  * Name of the entity.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/identity_entity#entity_name DataVaultIdentityEntity#entity_name}
  */
  readonly entityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/identity_entity#id DataVaultIdentityEntity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/identity_entity#namespace DataVaultIdentityEntity#namespace}
  */
  readonly namespace?: string;
}
export interface DataVaultIdentityEntityAliases {
}

export function dataVaultIdentityEntityAliasesToTerraform(struct?: DataVaultIdentityEntityAliases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataVaultIdentityEntityAliasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVaultIdentityEntityAliases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVaultIdentityEntityAliases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // canonical_id - computed: true, optional: false, required: false
  public get canonicalId() {
    return this.getStringAttribute('canonical_id');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // merged_from_canonical_ids - computed: true, optional: false, required: false
  public get mergedFromCanonicalIds() {
    return cdktf.Fn.tolist(this.getListAttribute('merged_from_canonical_ids'));
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // mount_accessor - computed: true, optional: false, required: false
  public get mountAccessor() {
    return this.getStringAttribute('mount_accessor');
  }

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // mount_type - computed: true, optional: false, required: false
  public get mountType() {
    return this.getStringAttribute('mount_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataVaultIdentityEntityAliasesList extends cdktf.ComplexList {

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
  public get(index: number): DataVaultIdentityEntityAliasesOutputReference {
    return new DataVaultIdentityEntityAliasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/identity_entity vault_identity_entity}
*/
export class DataVaultIdentityEntity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_identity_entity";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.15.2/docs/data-sources/identity_entity vault_identity_entity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVaultIdentityEntityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVaultIdentityEntityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_identity_entity',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.15.2',
        providerVersionConstraint: '~> 3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliasId = config.aliasId;
    this._aliasMountAccessor = config.aliasMountAccessor;
    this._aliasName = config.aliasName;
    this._entityId = config.entityId;
    this._entityName = config.entityName;
    this._id = config.id;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_id - computed: true, optional: true, required: false
  private _aliasId?: string; 
  public get aliasId() {
    return this.getStringAttribute('alias_id');
  }
  public set aliasId(value: string) {
    this._aliasId = value;
  }
  public resetAliasId() {
    this._aliasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasIdInput() {
    return this._aliasId;
  }

  // alias_mount_accessor - computed: true, optional: true, required: false
  private _aliasMountAccessor?: string; 
  public get aliasMountAccessor() {
    return this.getStringAttribute('alias_mount_accessor');
  }
  public set aliasMountAccessor(value: string) {
    this._aliasMountAccessor = value;
  }
  public resetAliasMountAccessor() {
    this._aliasMountAccessor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasMountAccessorInput() {
    return this._aliasMountAccessor;
  }

  // alias_name - computed: true, optional: true, required: false
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  public resetAliasName() {
    this._aliasName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
  }

  // aliases - computed: true, optional: false, required: false
  private _aliases = new DataVaultIdentityEntityAliasesList(this, "aliases", true);
  public get aliases() {
    return this._aliases;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_json - computed: true, optional: false, required: false
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }

  // direct_group_ids - computed: true, optional: false, required: false
  public get directGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('direct_group_ids'));
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // entity_id - computed: true, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_name - computed: true, optional: true, required: false
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  public resetEntityName() {
    this._entityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
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

  // inherited_group_ids - computed: true, optional: false, required: false
  public get inheritedGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('inherited_group_ids'));
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getStringAttribute('last_update_time');
  }

  // merged_entity_ids - computed: true, optional: false, required: false
  public get mergedEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('merged_entity_ids'));
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_id: cdktf.stringToTerraform(this._aliasId),
      alias_mount_accessor: cdktf.stringToTerraform(this._aliasMountAccessor),
      alias_name: cdktf.stringToTerraform(this._aliasName),
      entity_id: cdktf.stringToTerraform(this._entityId),
      entity_name: cdktf.stringToTerraform(this._entityName),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
    };
  }
}
