// https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesSecretBackendConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of managed key registry entry names that the mount in question is allowed to access
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#allowed_managed_keys KubernetesSecretBackend#allowed_managed_keys}
  */
  readonly allowedManagedKeys?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the request data object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_request_keys KubernetesSecretBackend#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Specifies the list of keys that will not be HMAC'd by audit devices in the response data object.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#audit_non_hmac_response_keys KubernetesSecretBackend#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Default lease duration for tokens and secrets in seconds
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#default_lease_ttl_seconds KubernetesSecretBackend#default_lease_ttl_seconds}
  */
  readonly defaultLeaseTtlSeconds?: number;
  /**
  * Human-friendly description of the mount
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#description KubernetesSecretBackend#description}
  */
  readonly description?: string;
  /**
  * Disable defaulting to the local CA certificate and service account JWT when running in a Kubernetes pod.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#disable_local_ca_jwt KubernetesSecretBackend#disable_local_ca_jwt}
  */
  readonly disableLocalCaJwt?: boolean | cdktf.IResolvable;
  /**
  * Enable the secrets engine to access Vault's external entropy source
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#external_entropy_access KubernetesSecretBackend#external_entropy_access}
  */
  readonly externalEntropyAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#id KubernetesSecretBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A PEM-encoded CA certificate used by the secret engine to verify the Kubernetes API server certificate. Defaults to the local pod’s CA if found, or otherwise the host's root CA set.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#kubernetes_ca_cert KubernetesSecretBackend#kubernetes_ca_cert}
  */
  readonly kubernetesCaCert?: string;
  /**
  * The Kubernetes API URL to connect to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#kubernetes_host KubernetesSecretBackend#kubernetes_host}
  */
  readonly kubernetesHost?: string;
  /**
  * Local mount flag that can be explicitly set to true to enforce local mount in HA environment
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#local KubernetesSecretBackend#local}
  */
  readonly local?: boolean | cdktf.IResolvable;
  /**
  * Maximum possible lease duration for tokens and secrets in seconds
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#max_lease_ttl_seconds KubernetesSecretBackend#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Target namespace. (requires Enterprise)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#namespace KubernetesSecretBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies mount type specific options that are passed to the backend
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#options KubernetesSecretBackend#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Where the secret backend will be mounted
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#path KubernetesSecretBackend#path}
  */
  readonly path: string;
  /**
  * Enable seal wrapping for the mount, causing values stored by the mount to be wrapped by the seal's encryption capability
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#seal_wrap KubernetesSecretBackend#seal_wrap}
  */
  readonly sealWrap?: boolean | cdktf.IResolvable;
  /**
  * The JSON web token of the service account used by the secrets engine to manage Kubernetes credentials. Defaults to the local pod’s JWT if found.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend#service_account_jwt KubernetesSecretBackend#service_account_jwt}
  */
  readonly serviceAccountJwt?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend vault_kubernetes_secret_backend}
*/
export class KubernetesSecretBackend extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_kubernetes_secret_backend";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.16.0/docs/resources/kubernetes_secret_backend vault_kubernetes_secret_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesSecretBackendConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesSecretBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_kubernetes_secret_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.16.0',
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
    this._allowedManagedKeys = config.allowedManagedKeys;
    this._auditNonHmacRequestKeys = config.auditNonHmacRequestKeys;
    this._auditNonHmacResponseKeys = config.auditNonHmacResponseKeys;
    this._defaultLeaseTtlSeconds = config.defaultLeaseTtlSeconds;
    this._description = config.description;
    this._disableLocalCaJwt = config.disableLocalCaJwt;
    this._externalEntropyAccess = config.externalEntropyAccess;
    this._id = config.id;
    this._kubernetesCaCert = config.kubernetesCaCert;
    this._kubernetesHost = config.kubernetesHost;
    this._local = config.local;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._namespace = config.namespace;
    this._options = config.options;
    this._path = config.path;
    this._sealWrap = config.sealWrap;
    this._serviceAccountJwt = config.serviceAccountJwt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // allowed_managed_keys - computed: false, optional: true, required: false
  private _allowedManagedKeys?: string[]; 
  public get allowedManagedKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_managed_keys'));
  }
  public set allowedManagedKeys(value: string[]) {
    this._allowedManagedKeys = value;
  }
  public resetAllowedManagedKeys() {
    this._allowedManagedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedManagedKeysInput() {
    return this._allowedManagedKeys;
  }

  // audit_non_hmac_request_keys - computed: true, optional: true, required: false
  private _auditNonHmacRequestKeys?: string[]; 
  public get auditNonHmacRequestKeys() {
    return this.getListAttribute('audit_non_hmac_request_keys');
  }
  public set auditNonHmacRequestKeys(value: string[]) {
    this._auditNonHmacRequestKeys = value;
  }
  public resetAuditNonHmacRequestKeys() {
    this._auditNonHmacRequestKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacRequestKeysInput() {
    return this._auditNonHmacRequestKeys;
  }

  // audit_non_hmac_response_keys - computed: true, optional: true, required: false
  private _auditNonHmacResponseKeys?: string[]; 
  public get auditNonHmacResponseKeys() {
    return this.getListAttribute('audit_non_hmac_response_keys');
  }
  public set auditNonHmacResponseKeys(value: string[]) {
    this._auditNonHmacResponseKeys = value;
  }
  public resetAuditNonHmacResponseKeys() {
    this._auditNonHmacResponseKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacResponseKeysInput() {
    return this._auditNonHmacResponseKeys;
  }

  // default_lease_ttl_seconds - computed: true, optional: true, required: false
  private _defaultLeaseTtlSeconds?: number; 
  public get defaultLeaseTtlSeconds() {
    return this.getNumberAttribute('default_lease_ttl_seconds');
  }
  public set defaultLeaseTtlSeconds(value: number) {
    this._defaultLeaseTtlSeconds = value;
  }
  public resetDefaultLeaseTtlSeconds() {
    this._defaultLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTtlSecondsInput() {
    return this._defaultLeaseTtlSeconds;
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

  // disable_local_ca_jwt - computed: false, optional: true, required: false
  private _disableLocalCaJwt?: boolean | cdktf.IResolvable; 
  public get disableLocalCaJwt() {
    return this.getBooleanAttribute('disable_local_ca_jwt');
  }
  public set disableLocalCaJwt(value: boolean | cdktf.IResolvable) {
    this._disableLocalCaJwt = value;
  }
  public resetDisableLocalCaJwt() {
    this._disableLocalCaJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocalCaJwtInput() {
    return this._disableLocalCaJwt;
  }

  // external_entropy_access - computed: false, optional: true, required: false
  private _externalEntropyAccess?: boolean | cdktf.IResolvable; 
  public get externalEntropyAccess() {
    return this.getBooleanAttribute('external_entropy_access');
  }
  public set externalEntropyAccess(value: boolean | cdktf.IResolvable) {
    this._externalEntropyAccess = value;
  }
  public resetExternalEntropyAccess() {
    this._externalEntropyAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalEntropyAccessInput() {
    return this._externalEntropyAccess;
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

  // kubernetes_ca_cert - computed: false, optional: true, required: false
  private _kubernetesCaCert?: string; 
  public get kubernetesCaCert() {
    return this.getStringAttribute('kubernetes_ca_cert');
  }
  public set kubernetesCaCert(value: string) {
    this._kubernetesCaCert = value;
  }
  public resetKubernetesCaCert() {
    this._kubernetesCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesCaCertInput() {
    return this._kubernetesCaCert;
  }

  // kubernetes_host - computed: false, optional: true, required: false
  private _kubernetesHost?: string; 
  public get kubernetesHost() {
    return this.getStringAttribute('kubernetes_host');
  }
  public set kubernetesHost(value: string) {
    this._kubernetesHost = value;
  }
  public resetKubernetesHost() {
    this._kubernetesHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesHostInput() {
    return this._kubernetesHost;
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

  // max_lease_ttl_seconds - computed: true, optional: true, required: false
  private _maxLeaseTtlSeconds?: number; 
  public get maxLeaseTtlSeconds() {
    return this.getNumberAttribute('max_lease_ttl_seconds');
  }
  public set maxLeaseTtlSeconds(value: number) {
    this._maxLeaseTtlSeconds = value;
  }
  public resetMaxLeaseTtlSeconds() {
    this._maxLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlSecondsInput() {
    return this._maxLeaseTtlSeconds;
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

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // seal_wrap - computed: true, optional: true, required: false
  private _sealWrap?: boolean | cdktf.IResolvable; 
  public get sealWrap() {
    return this.getBooleanAttribute('seal_wrap');
  }
  public set sealWrap(value: boolean | cdktf.IResolvable) {
    this._sealWrap = value;
  }
  public resetSealWrap() {
    this._sealWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sealWrapInput() {
    return this._sealWrap;
  }

  // service_account_jwt - computed: false, optional: true, required: false
  private _serviceAccountJwt?: string; 
  public get serviceAccountJwt() {
    return this.getStringAttribute('service_account_jwt');
  }
  public set serviceAccountJwt(value: string) {
    this._serviceAccountJwt = value;
  }
  public resetServiceAccountJwt() {
    this._serviceAccountJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountJwtInput() {
    return this._serviceAccountJwt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_managed_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedManagedKeys),
      audit_non_hmac_request_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditNonHmacRequestKeys),
      audit_non_hmac_response_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._auditNonHmacResponseKeys),
      default_lease_ttl_seconds: cdktf.numberToTerraform(this._defaultLeaseTtlSeconds),
      description: cdktf.stringToTerraform(this._description),
      disable_local_ca_jwt: cdktf.booleanToTerraform(this._disableLocalCaJwt),
      external_entropy_access: cdktf.booleanToTerraform(this._externalEntropyAccess),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_ca_cert: cdktf.stringToTerraform(this._kubernetesCaCert),
      kubernetes_host: cdktf.stringToTerraform(this._kubernetesHost),
      local: cdktf.booleanToTerraform(this._local),
      max_lease_ttl_seconds: cdktf.numberToTerraform(this._maxLeaseTtlSeconds),
      namespace: cdktf.stringToTerraform(this._namespace),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      path: cdktf.stringToTerraform(this._path),
      seal_wrap: cdktf.booleanToTerraform(this._sealWrap),
      service_account_jwt: cdktf.stringToTerraform(this._serviceAccountJwt),
    };
  }
}
