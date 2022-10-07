// https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpSecretStaticAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Path where the GCP secrets engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account#backend GcpSecretStaticAccount#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account#id GcpSecretStaticAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account#namespace GcpSecretStaticAccount#namespace}
  */
  readonly namespace?: string;
  /**
  * Type of secret generated for this static account. Defaults to `access_token`. Accepted values: `access_token`, `service_account_key`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account#secret_type GcpSecretStaticAccount#secret_type}
  */
  readonly secretType?: string;
  /**
  * Email of the GCP service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account#service_account_email GcpSecretStaticAccount#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * Name of the Static Account to create
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account#static_account GcpSecretStaticAccount#static_account}
  */
  readonly staticAccount: string;
  /**
  * List of OAuth scopes to assign to `access_token` secrets generated under this static account (`access_token` static accounts only) 
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account#token_scopes GcpSecretStaticAccount#token_scopes}
  */
  readonly tokenScopes?: string[];
  /**
  * binding block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account#binding GcpSecretStaticAccount#binding}
  */
  readonly binding?: GcpSecretStaticAccountBinding[] | cdktf.IResolvable;
}
export interface GcpSecretStaticAccountBinding {
  /**
  * Resource name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account#resource GcpSecretStaticAccount#resource}
  */
  readonly resource: string;
  /**
  * List of roles to apply to the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account#roles GcpSecretStaticAccount#roles}
  */
  readonly roles: string[];
}

export function gcpSecretStaticAccountBindingToTerraform(struct?: GcpSecretStaticAccountBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: cdktf.stringToTerraform(struct!.resource),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}

export class GcpSecretStaticAccountBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpSecretStaticAccountBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpSecretStaticAccountBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource = value.resource;
      this._roles = value.roles;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class GcpSecretStaticAccountBindingList extends cdktf.ComplexList {
  public internalValue? : GcpSecretStaticAccountBinding[] | cdktf.IResolvable

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
  public get(index: number): GcpSecretStaticAccountBindingOutputReference {
    return new GcpSecretStaticAccountBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account vault_gcp_secret_static_account}
*/
export class GcpSecretStaticAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcp_secret_static_account";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault/r/gcp_secret_static_account vault_gcp_secret_static_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpSecretStaticAccountConfig
  */
  public constructor(scope: Construct, id: string, config: GcpSecretStaticAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_gcp_secret_static_account',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.9.1',
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
    this._backend = config.backend;
    this._id = config.id;
    this._namespace = config.namespace;
    this._secretType = config.secretType;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._staticAccount = config.staticAccount;
    this._tokenScopes = config.tokenScopes;
    this._binding.internalValue = config.binding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
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

  // secret_type - computed: true, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // service_account_project - computed: true, optional: false, required: false
  public get serviceAccountProject() {
    return this.getStringAttribute('service_account_project');
  }

  // static_account - computed: false, optional: false, required: true
  private _staticAccount?: string; 
  public get staticAccount() {
    return this.getStringAttribute('static_account');
  }
  public set staticAccount(value: string) {
    this._staticAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAccountInput() {
    return this._staticAccount;
  }

  // token_scopes - computed: false, optional: true, required: false
  private _tokenScopes?: string[]; 
  public get tokenScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('token_scopes'));
  }
  public set tokenScopes(value: string[]) {
    this._tokenScopes = value;
  }
  public resetTokenScopes() {
    this._tokenScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenScopesInput() {
    return this._tokenScopes;
  }

  // binding - computed: false, optional: true, required: false
  private _binding = new GcpSecretStaticAccountBindingList(this, "binding", true);
  public get binding() {
    return this._binding;
  }
  public putBinding(value: GcpSecretStaticAccountBinding[] | cdktf.IResolvable) {
    this._binding.internalValue = value;
  }
  public resetBinding() {
    this._binding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      secret_type: cdktf.stringToTerraform(this._secretType),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      static_account: cdktf.stringToTerraform(this._staticAccount),
      token_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tokenScopes),
      binding: cdktf.listMapper(gcpSecretStaticAccountBindingToTerraform, true)(this._binding.internalValue),
    };
  }
}
