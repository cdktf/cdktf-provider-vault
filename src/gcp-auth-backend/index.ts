/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpAuthBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#client_email GcpAuthBackend#client_email}
  */
  readonly clientEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#client_id GcpAuthBackend#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#credentials GcpAuthBackend#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#description GcpAuthBackend#description}
  */
  readonly description?: string;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#disable_remount GcpAuthBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#id GcpAuthBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies if the auth method is local only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#local GcpAuthBackend#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#namespace GcpAuthBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#path GcpAuthBackend#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#private_key_id GcpAuthBackend#private_key_id}
  */
  readonly privateKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#project_id GcpAuthBackend#project_id}
  */
  readonly projectId?: string;
  /**
  * custom_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#custom_endpoint GcpAuthBackend#custom_endpoint}
  */
  readonly customEndpoint?: GcpAuthBackendCustomEndpoint;
}
export interface GcpAuthBackendCustomEndpoint {
  /**
  * Replaces the service endpoint used in API requests to https://www.googleapis.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#api GcpAuthBackend#api}
  */
  readonly api?: string;
  /**
  * Replaces the service endpoint used in API requests to `https://compute.googleapis.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#compute GcpAuthBackend#compute}
  */
  readonly compute?: string;
  /**
  * Replaces the service endpoint used in API requests to `https://cloudresourcemanager.googleapis.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#crm GcpAuthBackend#crm}
  */
  readonly crm?: string;
  /**
  * Replaces the service endpoint used in API requests to `https://iam.googleapis.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#iam GcpAuthBackend#iam}
  */
  readonly iam?: string;
}

export function gcpAuthBackendCustomEndpointToTerraform(struct?: GcpAuthBackendCustomEndpointOutputReference | GcpAuthBackendCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: cdktf.stringToTerraform(struct!.api),
    compute: cdktf.stringToTerraform(struct!.compute),
    crm: cdktf.stringToTerraform(struct!.crm),
    iam: cdktf.stringToTerraform(struct!.iam),
  }
}

export class GcpAuthBackendCustomEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpAuthBackendCustomEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api;
    }
    if (this._compute !== undefined) {
      hasAnyValues = true;
      internalValueResult.compute = this._compute;
    }
    if (this._crm !== undefined) {
      hasAnyValues = true;
      internalValueResult.crm = this._crm;
    }
    if (this._iam !== undefined) {
      hasAnyValues = true;
      internalValueResult.iam = this._iam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpAuthBackendCustomEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._api = undefined;
      this._compute = undefined;
      this._crm = undefined;
      this._iam = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._api = value.api;
      this._compute = value.compute;
      this._crm = value.crm;
      this._iam = value.iam;
    }
  }

  // api - computed: false, optional: true, required: false
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  public resetApi() {
    this._api = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // compute - computed: false, optional: true, required: false
  private _compute?: string; 
  public get compute() {
    return this.getStringAttribute('compute');
  }
  public set compute(value: string) {
    this._compute = value;
  }
  public resetCompute() {
    this._compute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeInput() {
    return this._compute;
  }

  // crm - computed: false, optional: true, required: false
  private _crm?: string; 
  public get crm() {
    return this.getStringAttribute('crm');
  }
  public set crm(value: string) {
    this._crm = value;
  }
  public resetCrm() {
    this._crm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crmInput() {
    return this._crm;
  }

  // iam - computed: false, optional: true, required: false
  private _iam?: string; 
  public get iam() {
    return this.getStringAttribute('iam');
  }
  public set iam(value: string) {
    this._iam = value;
  }
  public resetIam() {
    this._iam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInput() {
    return this._iam;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend vault_gcp_auth_backend}
*/
export class GcpAuthBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcp_auth_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpAuthBackend resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpAuthBackend to import
  * @param importFromId The id of the existing GcpAuthBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpAuthBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_gcp_auth_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.22.0/docs/resources/gcp_auth_backend vault_gcp_auth_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpAuthBackendConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GcpAuthBackendConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_gcp_auth_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.22.0',
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
    this._clientEmail = config.clientEmail;
    this._clientId = config.clientId;
    this._credentials = config.credentials;
    this._description = config.description;
    this._disableRemount = config.disableRemount;
    this._id = config.id;
    this._local = config.local;
    this._namespace = config.namespace;
    this._path = config.path;
    this._privateKeyId = config.privateKeyId;
    this._projectId = config.projectId;
    this._customEndpoint.internalValue = config.customEndpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // client_email - computed: true, optional: true, required: false
  private _clientEmail?: string; 
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }
  public set clientEmail(value: string) {
    this._clientEmail = value;
  }
  public resetClientEmail() {
    this._clientEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEmailInput() {
    return this._clientEmail;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
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

  // disable_remount - computed: false, optional: true, required: false
  private _disableRemount?: boolean | cdktf.IResolvable; 
  public get disableRemount() {
    return this.getBooleanAttribute('disable_remount');
  }
  public set disableRemount(value: boolean | cdktf.IResolvable) {
    this._disableRemount = value;
  }
  public resetDisableRemount() {
    this._disableRemount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRemountInput() {
    return this._disableRemount;
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

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktf.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktf.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // private_key_id - computed: true, optional: true, required: false
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }
  public set privateKeyId(value: string) {
    this._privateKeyId = value;
  }
  public resetPrivateKeyId() {
    this._privateKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // custom_endpoint - computed: false, optional: true, required: false
  private _customEndpoint = new GcpAuthBackendCustomEndpointOutputReference(this, "custom_endpoint");
  public get customEndpoint() {
    return this._customEndpoint;
  }
  public putCustomEndpoint(value: GcpAuthBackendCustomEndpoint) {
    this._customEndpoint.internalValue = value;
  }
  public resetCustomEndpoint() {
    this._customEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointInput() {
    return this._customEndpoint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_email: cdktf.stringToTerraform(this._clientEmail),
      client_id: cdktf.stringToTerraform(this._clientId),
      credentials: cdktf.stringToTerraform(this._credentials),
      description: cdktf.stringToTerraform(this._description),
      disable_remount: cdktf.booleanToTerraform(this._disableRemount),
      id: cdktf.stringToTerraform(this._id),
      local: cdktf.booleanToTerraform(this._local),
      namespace: cdktf.stringToTerraform(this._namespace),
      path: cdktf.stringToTerraform(this._path),
      private_key_id: cdktf.stringToTerraform(this._privateKeyId),
      project_id: cdktf.stringToTerraform(this._projectId),
      custom_endpoint: gcpAuthBackendCustomEndpointToTerraform(this._customEndpoint.internalValue),
    };
  }
}
