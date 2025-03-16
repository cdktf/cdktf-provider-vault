// https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAuthBackendLoginConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Auth Backend to read the token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#backend AwsAuthBackendLogin#backend}
  */
  readonly backend?: string;
  /**
  * The HTTP method used in the signed request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#iam_http_request_method AwsAuthBackendLogin#iam_http_request_method}
  */
  readonly iamHttpRequestMethod?: string;
  /**
  * The Base64-encoded body of the signed request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#iam_request_body AwsAuthBackendLogin#iam_request_body}
  */
  readonly iamRequestBody?: string;
  /**
  * The Base64-encoded, JSON serialized representation of the sts:GetCallerIdentity HTTP request headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#iam_request_headers AwsAuthBackendLogin#iam_request_headers}
  */
  readonly iamRequestHeaders?: string;
  /**
  * The Base64-encoded HTTP URL used in the signed request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#iam_request_url AwsAuthBackendLogin#iam_request_url}
  */
  readonly iamRequestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#id AwsAuthBackendLogin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Base64-encoded EC2 instance identity document to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#identity AwsAuthBackendLogin#identity}
  */
  readonly identity?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#namespace AwsAuthBackendLogin#namespace}
  */
  readonly namespace?: string;
  /**
  * The nonce to be used for subsequent login requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#nonce AwsAuthBackendLogin#nonce}
  */
  readonly nonce?: string;
  /**
  * PKCS7 signature of the identity document to authenticate with, with all newline characters removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#pkcs7 AwsAuthBackendLogin#pkcs7}
  */
  readonly pkcs7?: string;
  /**
  * AWS Auth Role to read the token from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#role AwsAuthBackendLogin#role}
  */
  readonly role?: string;
  /**
  * Base64-encoded SHA256 RSA signature of the instance identtiy document to authenticate with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#signature AwsAuthBackendLogin#signature}
  */
  readonly signature?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login vault_aws_auth_backend_login}
*/
export class AwsAuthBackendLogin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_aws_auth_backend_login";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAuthBackendLogin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAuthBackendLogin to import
  * @param importFromId The id of the existing AwsAuthBackendLogin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAuthBackendLogin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault_aws_auth_backend_login", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/4.7.0/docs/resources/aws_auth_backend_login vault_aws_auth_backend_login} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAuthBackendLoginConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AwsAuthBackendLoginConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_aws_auth_backend_login',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '4.7.0',
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
    this._backend = config.backend;
    this._iamHttpRequestMethod = config.iamHttpRequestMethod;
    this._iamRequestBody = config.iamRequestBody;
    this._iamRequestHeaders = config.iamRequestHeaders;
    this._iamRequestUrl = config.iamRequestUrl;
    this._id = config.id;
    this._identity = config.identity;
    this._namespace = config.namespace;
    this._nonce = config.nonce;
    this._pkcs7 = config.pkcs7;
    this._role = config.role;
    this._signature = config.signature;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
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

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // iam_http_request_method - computed: false, optional: true, required: false
  private _iamHttpRequestMethod?: string; 
  public get iamHttpRequestMethod() {
    return this.getStringAttribute('iam_http_request_method');
  }
  public set iamHttpRequestMethod(value: string) {
    this._iamHttpRequestMethod = value;
  }
  public resetIamHttpRequestMethod() {
    this._iamHttpRequestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamHttpRequestMethodInput() {
    return this._iamHttpRequestMethod;
  }

  // iam_request_body - computed: false, optional: true, required: false
  private _iamRequestBody?: string; 
  public get iamRequestBody() {
    return this.getStringAttribute('iam_request_body');
  }
  public set iamRequestBody(value: string) {
    this._iamRequestBody = value;
  }
  public resetIamRequestBody() {
    this._iamRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRequestBodyInput() {
    return this._iamRequestBody;
  }

  // iam_request_headers - computed: false, optional: true, required: false
  private _iamRequestHeaders?: string; 
  public get iamRequestHeaders() {
    return this.getStringAttribute('iam_request_headers');
  }
  public set iamRequestHeaders(value: string) {
    this._iamRequestHeaders = value;
  }
  public resetIamRequestHeaders() {
    this._iamRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRequestHeadersInput() {
    return this._iamRequestHeaders;
  }

  // iam_request_url - computed: false, optional: true, required: false
  private _iamRequestUrl?: string; 
  public get iamRequestUrl() {
    return this.getStringAttribute('iam_request_url');
  }
  public set iamRequestUrl(value: string) {
    this._iamRequestUrl = value;
  }
  public resetIamRequestUrl() {
    this._iamRequestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRequestUrlInput() {
    return this._iamRequestUrl;
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

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // lease_start_time - computed: true, optional: false, required: false
  public get leaseStartTime() {
    return this.getStringAttribute('lease_start_time');
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

  // nonce - computed: true, optional: true, required: false
  private _nonce?: string; 
  public get nonce() {
    return this.getStringAttribute('nonce');
  }
  public set nonce(value: string) {
    this._nonce = value;
  }
  public resetNonce() {
    this._nonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonceInput() {
    return this._nonce;
  }

  // pkcs7 - computed: false, optional: true, required: false
  private _pkcs7?: string; 
  public get pkcs7() {
    return this.getStringAttribute('pkcs7');
  }
  public set pkcs7(value: string) {
    this._pkcs7 = value;
  }
  public resetPkcs7() {
    this._pkcs7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs7Input() {
    return this._pkcs7;
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getListAttribute('policies');
  }

  // renewable - computed: true, optional: false, required: false
  public get renewable() {
    return this.getBooleanAttribute('renewable');
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // signature - computed: false, optional: true, required: false
  private _signature?: string; 
  public get signature() {
    return this.getStringAttribute('signature');
  }
  public set signature(value: string) {
    this._signature = value;
  }
  public resetSignature() {
    this._signature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureInput() {
    return this._signature;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      iam_http_request_method: cdktf.stringToTerraform(this._iamHttpRequestMethod),
      iam_request_body: cdktf.stringToTerraform(this._iamRequestBody),
      iam_request_headers: cdktf.stringToTerraform(this._iamRequestHeaders),
      iam_request_url: cdktf.stringToTerraform(this._iamRequestUrl),
      id: cdktf.stringToTerraform(this._id),
      identity: cdktf.stringToTerraform(this._identity),
      namespace: cdktf.stringToTerraform(this._namespace),
      nonce: cdktf.stringToTerraform(this._nonce),
      pkcs7: cdktf.stringToTerraform(this._pkcs7),
      role: cdktf.stringToTerraform(this._role),
      signature: cdktf.stringToTerraform(this._signature),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_http_request_method: {
        value: cdktf.stringToHclTerraform(this._iamHttpRequestMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_request_body: {
        value: cdktf.stringToHclTerraform(this._iamRequestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_request_headers: {
        value: cdktf.stringToHclTerraform(this._iamRequestHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_request_url: {
        value: cdktf.stringToHclTerraform(this._iamRequestUrl),
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
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
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
      nonce: {
        value: cdktf.stringToHclTerraform(this._nonce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkcs7: {
        value: cdktf.stringToHclTerraform(this._pkcs7),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature: {
        value: cdktf.stringToHclTerraform(this._signature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
