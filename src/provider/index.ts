// https://www.terraform.io/docs/providers/vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultProviderConfig {
  /**
  * If true, adds the value of the `address` argument to the Terraform process environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#add_address_to_env VaultProvider#add_address_to_env}
  */
  readonly addAddressToEnv?: string;
  /**
  * URL of the root of the target Vault server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#address VaultProvider#address}
  */
  readonly address: string;
  /**
  * Path to directory containing CA certificate files to validate the server's certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#ca_cert_dir VaultProvider#ca_cert_dir}
  */
  readonly caCertDir?: string;
  /**
  * Path to a CA certificate file to validate the server's certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#ca_cert_file VaultProvider#ca_cert_file}
  */
  readonly caCertFile?: string;
  /**
  * Maximum TTL for secret leases requested by this provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Maximum number of retries when a 5xx error code is encountered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#max_retries VaultProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Maximum number of retries for Client Controlled Consistency related operations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#max_retries_ccc VaultProvider#max_retries_ccc}
  */
  readonly maxRetriesCcc?: number;
  /**
  * The namespace to use. Available only for Vault Enterprise.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Set this to true to prevent the creation of ephemeral child token used by this provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#skip_child_token VaultProvider#skip_child_token}
  */
  readonly skipChildToken?: boolean | cdktf.IResolvable;
  /**
  * Skip the dynamic fetching of the Vault server version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#skip_get_vault_version VaultProvider#skip_get_vault_version}
  */
  readonly skipGetVaultVersion?: boolean | cdktf.IResolvable;
  /**
  * Set this to true only if the target Vault server is an insecure development instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#skip_tls_verify VaultProvider#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Name to use as the SNI host when connecting via TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#tls_server_name VaultProvider#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Token to use to authenticate to Vault.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#token VaultProvider#token}
  */
  readonly token?: string;
  /**
  * Token name to use for creating the Vault child token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#token_name VaultProvider#token_name}
  */
  readonly tokenName?: string;
  /**
  * Override the Vault server version, which is normally determined dynamically from the target Vault server
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#vault_version_override VaultProvider#vault_version_override}
  */
  readonly vaultVersionOverride?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#alias VaultProvider#alias}
  */
  readonly alias?: string;
  /**
  * auth_login block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login VaultProvider#auth_login}
  */
  readonly authLogin?: VaultProviderAuthLogin;
  /**
  * auth_login_aws block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login_aws VaultProvider#auth_login_aws}
  */
  readonly authLoginAws?: VaultProviderAuthLoginAws;
  /**
  * auth_login_azure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login_azure VaultProvider#auth_login_azure}
  */
  readonly authLoginAzure?: VaultProviderAuthLoginAzure;
  /**
  * auth_login_cert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login_cert VaultProvider#auth_login_cert}
  */
  readonly authLoginCert?: VaultProviderAuthLoginCert;
  /**
  * auth_login_gcp block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login_gcp VaultProvider#auth_login_gcp}
  */
  readonly authLoginGcp?: VaultProviderAuthLoginGcp;
  /**
  * auth_login_jwt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login_jwt VaultProvider#auth_login_jwt}
  */
  readonly authLoginJwt?: VaultProviderAuthLoginJwt;
  /**
  * auth_login_kerberos block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login_kerberos VaultProvider#auth_login_kerberos}
  */
  readonly authLoginKerberos?: VaultProviderAuthLoginKerberos;
  /**
  * auth_login_oci block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login_oci VaultProvider#auth_login_oci}
  */
  readonly authLoginOci?: VaultProviderAuthLoginOci;
  /**
  * auth_login_oidc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login_oidc VaultProvider#auth_login_oidc}
  */
  readonly authLoginOidc?: VaultProviderAuthLoginOidc;
  /**
  * auth_login_radius block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login_radius VaultProvider#auth_login_radius}
  */
  readonly authLoginRadius?: VaultProviderAuthLoginRadius;
  /**
  * auth_login_userpass block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_login_userpass VaultProvider#auth_login_userpass}
  */
  readonly authLoginUserpass?: VaultProviderAuthLoginUserpass;
  /**
  * client_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#client_auth VaultProvider#client_auth}
  */
  readonly clientAuth?: VaultProviderClientAuth;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#headers VaultProvider#headers}
  */
  readonly headers?: VaultProviderHeaders[] | cdktf.IResolvable;
}
export interface VaultProviderAuthLogin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#method VaultProvider#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#parameters VaultProvider#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#path VaultProvider#path}
  */
  readonly path: string;
}

export function vaultProviderAuthLoginToTerraform(struct?: VaultProviderAuthLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export interface VaultProviderAuthLoginAws {
  /**
  * The AWS access key ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_access_key_id VaultProvider#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * The IAM endpoint URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_iam_endpoint VaultProvider#aws_iam_endpoint}
  */
  readonly awsIamEndpoint?: string;
  /**
  * The name of the AWS profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_profile VaultProvider#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * The AWS region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_region VaultProvider#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The ARN of the AWS Role to assume.Used during STS AssumeRole
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_role_arn VaultProvider#aws_role_arn}
  */
  readonly awsRoleArn?: string;
  /**
  * Specifies the name to attach to the AWS role session. Used during STS AssumeRole
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_role_session_name VaultProvider#aws_role_session_name}
  */
  readonly awsRoleSessionName?: string;
  /**
  * The AWS secret access key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_secret_access_key VaultProvider#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * The AWS session token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_session_token VaultProvider#aws_session_token}
  */
  readonly awsSessionToken?: string;
  /**
  * Path to the AWS shared credentials file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_shared_credentials_file VaultProvider#aws_shared_credentials_file}
  */
  readonly awsSharedCredentialsFile?: string;
  /**
  * The STS endpoint URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_sts_endpoint VaultProvider#aws_sts_endpoint}
  */
  readonly awsStsEndpoint?: string;
  /**
  * Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#aws_web_identity_token_file VaultProvider#aws_web_identity_token_file}
  */
  readonly awsWebIdentityTokenFile?: string;
  /**
  * The Vault header value to include in the STS signing request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#header_value VaultProvider#header_value}
  */
  readonly headerValue?: string;
  /**
  * The path where the authentication engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The Vault role to use when logging into Vault.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#role VaultProvider#role}
  */
  readonly role: string;
}

export function vaultProviderAuthLoginAwsToTerraform(struct?: VaultProviderAuthLoginAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key_id: cdktf.stringToTerraform(struct!.awsAccessKeyId),
    aws_iam_endpoint: cdktf.stringToTerraform(struct!.awsIamEndpoint),
    aws_profile: cdktf.stringToTerraform(struct!.awsProfile),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_role_arn: cdktf.stringToTerraform(struct!.awsRoleArn),
    aws_role_session_name: cdktf.stringToTerraform(struct!.awsRoleSessionName),
    aws_secret_access_key: cdktf.stringToTerraform(struct!.awsSecretAccessKey),
    aws_session_token: cdktf.stringToTerraform(struct!.awsSessionToken),
    aws_shared_credentials_file: cdktf.stringToTerraform(struct!.awsSharedCredentialsFile),
    aws_sts_endpoint: cdktf.stringToTerraform(struct!.awsStsEndpoint),
    aws_web_identity_token_file: cdktf.stringToTerraform(struct!.awsWebIdentityTokenFile),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.stringToTerraform(struct!.role),
  }
}

export interface VaultProviderAuthLoginAzure {
  /**
  * The identity's client ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#client_id VaultProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * A signed JSON Web Token. If not specified on will be created automatically
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#jwt VaultProvider#jwt}
  */
  readonly jwt?: string;
  /**
  * The path where the authentication engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#resource_group_name VaultProvider#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Name of the login role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * The scopes to include in the token request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#scope VaultProvider#scope}
  */
  readonly scope?: string;
  /**
  * The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#subscription_id VaultProvider#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Provides the tenant ID to use in a multi-tenant authentication scenario.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#tenant_id VaultProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The virtual machine name for the machine that generated the MSI token. This information can be obtained through instance metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#vm_name VaultProvider#vm_name}
  */
  readonly vmName?: string;
  /**
  * The virtual machine scale set name for the machine that generated the MSI token. This information can be obtained through instance metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#vmss_name VaultProvider#vmss_name}
  */
  readonly vmssName?: string;
}

export function vaultProviderAuthLoginAzureToTerraform(struct?: VaultProviderAuthLoginAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    jwt: cdktf.stringToTerraform(struct!.jwt),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    role: cdktf.stringToTerraform(struct!.role),
    scope: cdktf.stringToTerraform(struct!.scope),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
    vmss_name: cdktf.stringToTerraform(struct!.vmssName),
  }
}

export interface VaultProviderAuthLoginCert {
  /**
  * Path to a file containing the client certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#cert_file VaultProvider#cert_file}
  */
  readonly certFile: string;
  /**
  * Path to a file containing the private key that the certificate was issued for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#key_file VaultProvider#key_file}
  */
  readonly keyFile: string;
  /**
  * The path where the authentication engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * Name of the certificate's role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#name VaultProvider#name}
  */
  readonly name?: string;
  /**
  * The authentication engine's namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
}

export function vaultProviderAuthLoginCertToTerraform(struct?: VaultProviderAuthLoginCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    mount: cdktf.stringToTerraform(struct!.mount),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface VaultProviderAuthLoginGcp {
  /**
  * Path to the Google Cloud credentials file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#credentials VaultProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * A signed JSON Web Token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#jwt VaultProvider#jwt}
  */
  readonly jwt?: string;
  /**
  * The path where the authentication engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * IAM service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#service_account VaultProvider#service_account}
  */
  readonly serviceAccount?: string;
}

export function vaultProviderAuthLoginGcpToTerraform(struct?: VaultProviderAuthLoginGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: cdktf.stringToTerraform(struct!.credentials),
    jwt: cdktf.stringToTerraform(struct!.jwt),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.stringToTerraform(struct!.role),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}

export interface VaultProviderAuthLoginJwt {
  /**
  * A signed JSON Web Token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#jwt VaultProvider#jwt}
  */
  readonly jwt: string;
  /**
  * The path where the authentication engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#role VaultProvider#role}
  */
  readonly role: string;
}

export function vaultProviderAuthLoginJwtToTerraform(struct?: VaultProviderAuthLoginJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwt: cdktf.stringToTerraform(struct!.jwt),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.stringToTerraform(struct!.role),
  }
}

export interface VaultProviderAuthLoginKerberos {
  /**
  * Disable the Kerberos FAST negotiation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#disable_fast_negotiation VaultProvider#disable_fast_negotiation}
  */
  readonly disableFastNegotiation?: boolean | cdktf.IResolvable;
  /**
  * The Kerberos keytab file containing the entry of the login entity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#keytab_path VaultProvider#keytab_path}
  */
  readonly keytabPath?: string;
  /**
  * A valid Kerberos configuration file e.g. /etc/krb5.conf.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#krb5conf_path VaultProvider#krb5conf_path}
  */
  readonly krb5ConfPath?: string;
  /**
  * The path where the authentication engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kerberos server's authoritative authentication domain
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#realm VaultProvider#realm}
  */
  readonly realm?: string;
  /**
  * Strip the host from the username found in the keytab.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#remove_instance_name VaultProvider#remove_instance_name}
  */
  readonly removeInstanceName?: boolean | cdktf.IResolvable;
  /**
  * The service principle name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#service VaultProvider#service}
  */
  readonly service?: string;
  /**
  * Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#token VaultProvider#token}
  */
  readonly token?: string;
  /**
  * The username to login into Kerberos with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#username VaultProvider#username}
  */
  readonly username?: string;
}

export function vaultProviderAuthLoginKerberosToTerraform(struct?: VaultProviderAuthLoginKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_fast_negotiation: cdktf.booleanToTerraform(struct!.disableFastNegotiation),
    keytab_path: cdktf.stringToTerraform(struct!.keytabPath),
    krb5conf_path: cdktf.stringToTerraform(struct!.krb5ConfPath),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    realm: cdktf.stringToTerraform(struct!.realm),
    remove_instance_name: cdktf.booleanToTerraform(struct!.removeInstanceName),
    service: cdktf.stringToTerraform(struct!.service),
    token: cdktf.stringToTerraform(struct!.token),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface VaultProviderAuthLoginOci {
  /**
  * Authentication type to use when getting OCI credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#auth_type VaultProvider#auth_type}
  */
  readonly authType: string;
  /**
  * The path where the authentication engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#role VaultProvider#role}
  */
  readonly role: string;
}

export function vaultProviderAuthLoginOciToTerraform(struct?: VaultProviderAuthLoginOci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.stringToTerraform(struct!.role),
  }
}

export interface VaultProviderAuthLoginOidc {
  /**
  * The callback address. Must be a valid URI without the path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#callback_address VaultProvider#callback_address}
  */
  readonly callbackAddress?: string;
  /**
  * The callback listener's address. Must be a valid URI without the path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#callback_listener_address VaultProvider#callback_listener_address}
  */
  readonly callbackListenerAddress?: string;
  /**
  * The path where the authentication engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#role VaultProvider#role}
  */
  readonly role: string;
}

export function vaultProviderAuthLoginOidcToTerraform(struct?: VaultProviderAuthLoginOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callback_address: cdktf.stringToTerraform(struct!.callbackAddress),
    callback_listener_address: cdktf.stringToTerraform(struct!.callbackListenerAddress),
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    role: cdktf.stringToTerraform(struct!.role),
  }
}

export interface VaultProviderAuthLoginRadius {
  /**
  * The path where the authentication engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The Radius password for username.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#password VaultProvider#password}
  */
  readonly password: string;
  /**
  * The Radius username.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#username VaultProvider#username}
  */
  readonly username: string;
}

export function vaultProviderAuthLoginRadiusToTerraform(struct?: VaultProviderAuthLoginRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface VaultProviderAuthLoginUserpass {
  /**
  * The path where the authentication engine is mounted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Login with password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#password VaultProvider#password}
  */
  readonly password?: string;
  /**
  * Login with password from a file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#password_file VaultProvider#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Login with username
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#username VaultProvider#username}
  */
  readonly username: string;
}

export function vaultProviderAuthLoginUserpassToTerraform(struct?: VaultProviderAuthLoginUserpass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount: cdktf.stringToTerraform(struct!.mount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    password: cdktf.stringToTerraform(struct!.password),
    password_file: cdktf.stringToTerraform(struct!.passwordFile),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export interface VaultProviderClientAuth {
  /**
  * Path to a file containing the client certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#cert_file VaultProvider#cert_file}
  */
  readonly certFile?: string;
  /**
  * Path to a file containing the private key that the certificate was issued for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#key_file VaultProvider#key_file}
  */
  readonly keyFile?: string;
}

export function vaultProviderClientAuthToTerraform(struct?: VaultProviderClientAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
  }
}

export interface VaultProviderHeaders {
  /**
  * The header name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#name VaultProvider#name}
  */
  readonly name: string;
  /**
  * The header value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/vault#value VaultProvider#value}
  */
  readonly value: string;
}

export function vaultProviderHeadersToTerraform(struct?: VaultProviderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/vault vault}
*/
export class VaultProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/vault vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VaultProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vault',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.7'
      },
      terraformProviderSource: 'hashicorp/vault'
    });
    this._addAddressToEnv = config.addAddressToEnv;
    this._address = config.address;
    this._caCertDir = config.caCertDir;
    this._caCertFile = config.caCertFile;
    this._maxLeaseTtlSeconds = config.maxLeaseTtlSeconds;
    this._maxRetries = config.maxRetries;
    this._maxRetriesCcc = config.maxRetriesCcc;
    this._namespace = config.namespace;
    this._skipChildToken = config.skipChildToken;
    this._skipGetVaultVersion = config.skipGetVaultVersion;
    this._skipTlsVerify = config.skipTlsVerify;
    this._tlsServerName = config.tlsServerName;
    this._token = config.token;
    this._tokenName = config.tokenName;
    this._vaultVersionOverride = config.vaultVersionOverride;
    this._alias = config.alias;
    this._authLogin = config.authLogin;
    this._authLoginAws = config.authLoginAws;
    this._authLoginAzure = config.authLoginAzure;
    this._authLoginCert = config.authLoginCert;
    this._authLoginGcp = config.authLoginGcp;
    this._authLoginJwt = config.authLoginJwt;
    this._authLoginKerberos = config.authLoginKerberos;
    this._authLoginOci = config.authLoginOci;
    this._authLoginOidc = config.authLoginOidc;
    this._authLoginRadius = config.authLoginRadius;
    this._authLoginUserpass = config.authLoginUserpass;
    this._clientAuth = config.clientAuth;
    this._headers = config.headers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_address_to_env - computed: false, optional: true, required: false
  private _addAddressToEnv?: string; 
  public get addAddressToEnv() {
    return this._addAddressToEnv;
  }
  public set addAddressToEnv(value: string | undefined) {
    this._addAddressToEnv = value;
  }
  public resetAddAddressToEnv() {
    this._addAddressToEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAddressToEnvInput() {
    return this._addAddressToEnv;
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this._address;
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // ca_cert_dir - computed: false, optional: true, required: false
  private _caCertDir?: string; 
  public get caCertDir() {
    return this._caCertDir;
  }
  public set caCertDir(value: string | undefined) {
    this._caCertDir = value;
  }
  public resetCaCertDir() {
    this._caCertDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertDirInput() {
    return this._caCertDir;
  }

  // ca_cert_file - computed: false, optional: true, required: false
  private _caCertFile?: string; 
  public get caCertFile() {
    return this._caCertFile;
  }
  public set caCertFile(value: string | undefined) {
    this._caCertFile = value;
  }
  public resetCaCertFile() {
    this._caCertFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertFileInput() {
    return this._caCertFile;
  }

  // max_lease_ttl_seconds - computed: false, optional: true, required: false
  private _maxLeaseTtlSeconds?: number; 
  public get maxLeaseTtlSeconds() {
    return this._maxLeaseTtlSeconds;
  }
  public set maxLeaseTtlSeconds(value: number | undefined) {
    this._maxLeaseTtlSeconds = value;
  }
  public resetMaxLeaseTtlSeconds() {
    this._maxLeaseTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlSecondsInput() {
    return this._maxLeaseTtlSeconds;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // max_retries_ccc - computed: false, optional: true, required: false
  private _maxRetriesCcc?: number; 
  public get maxRetriesCcc() {
    return this._maxRetriesCcc;
  }
  public set maxRetriesCcc(value: number | undefined) {
    this._maxRetriesCcc = value;
  }
  public resetMaxRetriesCcc() {
    this._maxRetriesCcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesCccInput() {
    return this._maxRetriesCcc;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this._namespace;
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // skip_child_token - computed: false, optional: true, required: false
  private _skipChildToken?: boolean | cdktf.IResolvable; 
  public get skipChildToken() {
    return this._skipChildToken;
  }
  public set skipChildToken(value: boolean | cdktf.IResolvable | undefined) {
    this._skipChildToken = value;
  }
  public resetSkipChildToken() {
    this._skipChildToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipChildTokenInput() {
    return this._skipChildToken;
  }

  // skip_get_vault_version - computed: false, optional: true, required: false
  private _skipGetVaultVersion?: boolean | cdktf.IResolvable; 
  public get skipGetVaultVersion() {
    return this._skipGetVaultVersion;
  }
  public set skipGetVaultVersion(value: boolean | cdktf.IResolvable | undefined) {
    this._skipGetVaultVersion = value;
  }
  public resetSkipGetVaultVersion() {
    this._skipGetVaultVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGetVaultVersionInput() {
    return this._skipGetVaultVersion;
  }

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this._skipTlsVerify;
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // tls_server_name - computed: false, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this._tlsServerName;
  }
  public set tlsServerName(value: string | undefined) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_name - computed: false, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this._tokenName;
  }
  public set tokenName(value: string | undefined) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // vault_version_override - computed: false, optional: true, required: false
  private _vaultVersionOverride?: string; 
  public get vaultVersionOverride() {
    return this._vaultVersionOverride;
  }
  public set vaultVersionOverride(value: string | undefined) {
    this._vaultVersionOverride = value;
  }
  public resetVaultVersionOverride() {
    this._vaultVersionOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultVersionOverrideInput() {
    return this._vaultVersionOverride;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // auth_login - computed: false, optional: true, required: false
  private _authLogin?: VaultProviderAuthLogin; 
  public get authLogin() {
    return this._authLogin;
  }
  public set authLogin(value: VaultProviderAuthLogin | undefined) {
    this._authLogin = value;
  }
  public resetAuthLogin() {
    this._authLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginInput() {
    return this._authLogin;
  }

  // auth_login_aws - computed: false, optional: true, required: false
  private _authLoginAws?: VaultProviderAuthLoginAws; 
  public get authLoginAws() {
    return this._authLoginAws;
  }
  public set authLoginAws(value: VaultProviderAuthLoginAws | undefined) {
    this._authLoginAws = value;
  }
  public resetAuthLoginAws() {
    this._authLoginAws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginAwsInput() {
    return this._authLoginAws;
  }

  // auth_login_azure - computed: false, optional: true, required: false
  private _authLoginAzure?: VaultProviderAuthLoginAzure; 
  public get authLoginAzure() {
    return this._authLoginAzure;
  }
  public set authLoginAzure(value: VaultProviderAuthLoginAzure | undefined) {
    this._authLoginAzure = value;
  }
  public resetAuthLoginAzure() {
    this._authLoginAzure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginAzureInput() {
    return this._authLoginAzure;
  }

  // auth_login_cert - computed: false, optional: true, required: false
  private _authLoginCert?: VaultProviderAuthLoginCert; 
  public get authLoginCert() {
    return this._authLoginCert;
  }
  public set authLoginCert(value: VaultProviderAuthLoginCert | undefined) {
    this._authLoginCert = value;
  }
  public resetAuthLoginCert() {
    this._authLoginCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginCertInput() {
    return this._authLoginCert;
  }

  // auth_login_gcp - computed: false, optional: true, required: false
  private _authLoginGcp?: VaultProviderAuthLoginGcp; 
  public get authLoginGcp() {
    return this._authLoginGcp;
  }
  public set authLoginGcp(value: VaultProviderAuthLoginGcp | undefined) {
    this._authLoginGcp = value;
  }
  public resetAuthLoginGcp() {
    this._authLoginGcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginGcpInput() {
    return this._authLoginGcp;
  }

  // auth_login_jwt - computed: false, optional: true, required: false
  private _authLoginJwt?: VaultProviderAuthLoginJwt; 
  public get authLoginJwt() {
    return this._authLoginJwt;
  }
  public set authLoginJwt(value: VaultProviderAuthLoginJwt | undefined) {
    this._authLoginJwt = value;
  }
  public resetAuthLoginJwt() {
    this._authLoginJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginJwtInput() {
    return this._authLoginJwt;
  }

  // auth_login_kerberos - computed: false, optional: true, required: false
  private _authLoginKerberos?: VaultProviderAuthLoginKerberos; 
  public get authLoginKerberos() {
    return this._authLoginKerberos;
  }
  public set authLoginKerberos(value: VaultProviderAuthLoginKerberos | undefined) {
    this._authLoginKerberos = value;
  }
  public resetAuthLoginKerberos() {
    this._authLoginKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginKerberosInput() {
    return this._authLoginKerberos;
  }

  // auth_login_oci - computed: false, optional: true, required: false
  private _authLoginOci?: VaultProviderAuthLoginOci; 
  public get authLoginOci() {
    return this._authLoginOci;
  }
  public set authLoginOci(value: VaultProviderAuthLoginOci | undefined) {
    this._authLoginOci = value;
  }
  public resetAuthLoginOci() {
    this._authLoginOci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginOciInput() {
    return this._authLoginOci;
  }

  // auth_login_oidc - computed: false, optional: true, required: false
  private _authLoginOidc?: VaultProviderAuthLoginOidc; 
  public get authLoginOidc() {
    return this._authLoginOidc;
  }
  public set authLoginOidc(value: VaultProviderAuthLoginOidc | undefined) {
    this._authLoginOidc = value;
  }
  public resetAuthLoginOidc() {
    this._authLoginOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginOidcInput() {
    return this._authLoginOidc;
  }

  // auth_login_radius - computed: false, optional: true, required: false
  private _authLoginRadius?: VaultProviderAuthLoginRadius; 
  public get authLoginRadius() {
    return this._authLoginRadius;
  }
  public set authLoginRadius(value: VaultProviderAuthLoginRadius | undefined) {
    this._authLoginRadius = value;
  }
  public resetAuthLoginRadius() {
    this._authLoginRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginRadiusInput() {
    return this._authLoginRadius;
  }

  // auth_login_userpass - computed: false, optional: true, required: false
  private _authLoginUserpass?: VaultProviderAuthLoginUserpass; 
  public get authLoginUserpass() {
    return this._authLoginUserpass;
  }
  public set authLoginUserpass(value: VaultProviderAuthLoginUserpass | undefined) {
    this._authLoginUserpass = value;
  }
  public resetAuthLoginUserpass() {
    this._authLoginUserpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginUserpassInput() {
    return this._authLoginUserpass;
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: VaultProviderClientAuth; 
  public get clientAuth() {
    return this._clientAuth;
  }
  public set clientAuth(value: VaultProviderClientAuth | undefined) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: VaultProviderHeaders[] | cdktf.IResolvable; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: VaultProviderHeaders[] | cdktf.IResolvable | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_address_to_env: cdktf.stringToTerraform(this._addAddressToEnv),
      address: cdktf.stringToTerraform(this._address),
      ca_cert_dir: cdktf.stringToTerraform(this._caCertDir),
      ca_cert_file: cdktf.stringToTerraform(this._caCertFile),
      max_lease_ttl_seconds: cdktf.numberToTerraform(this._maxLeaseTtlSeconds),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      max_retries_ccc: cdktf.numberToTerraform(this._maxRetriesCcc),
      namespace: cdktf.stringToTerraform(this._namespace),
      skip_child_token: cdktf.booleanToTerraform(this._skipChildToken),
      skip_get_vault_version: cdktf.booleanToTerraform(this._skipGetVaultVersion),
      skip_tls_verify: cdktf.booleanToTerraform(this._skipTlsVerify),
      tls_server_name: cdktf.stringToTerraform(this._tlsServerName),
      token: cdktf.stringToTerraform(this._token),
      token_name: cdktf.stringToTerraform(this._tokenName),
      vault_version_override: cdktf.stringToTerraform(this._vaultVersionOverride),
      alias: cdktf.stringToTerraform(this._alias),
      auth_login: vaultProviderAuthLoginToTerraform(this._authLogin),
      auth_login_aws: vaultProviderAuthLoginAwsToTerraform(this._authLoginAws),
      auth_login_azure: vaultProviderAuthLoginAzureToTerraform(this._authLoginAzure),
      auth_login_cert: vaultProviderAuthLoginCertToTerraform(this._authLoginCert),
      auth_login_gcp: vaultProviderAuthLoginGcpToTerraform(this._authLoginGcp),
      auth_login_jwt: vaultProviderAuthLoginJwtToTerraform(this._authLoginJwt),
      auth_login_kerberos: vaultProviderAuthLoginKerberosToTerraform(this._authLoginKerberos),
      auth_login_oci: vaultProviderAuthLoginOciToTerraform(this._authLoginOci),
      auth_login_oidc: vaultProviderAuthLoginOidcToTerraform(this._authLoginOidc),
      auth_login_radius: vaultProviderAuthLoginRadiusToTerraform(this._authLoginRadius),
      auth_login_userpass: vaultProviderAuthLoginUserpassToTerraform(this._authLoginUserpass),
      client_auth: vaultProviderClientAuthToTerraform(this._clientAuth),
      headers: cdktf.listMapper(vaultProviderHeadersToTerraform, true)(this._headers),
    };
  }
}
