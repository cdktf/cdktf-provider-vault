/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultProviderConfig {
  /**
  * If true, adds the value of the `address` argument to the Terraform process environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#add_address_to_env VaultProvider#add_address_to_env}
  */
  readonly addAddressToEnv?: string;
  /**
  * URL of the root of the target Vault server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#address VaultProvider#address}
  */
  readonly address: string;
  /**
  * Path to directory containing CA certificate files to validate the server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#ca_cert_dir VaultProvider#ca_cert_dir}
  */
  readonly caCertDir?: string;
  /**
  * Path to a CA certificate file to validate the server's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#ca_cert_file VaultProvider#ca_cert_file}
  */
  readonly caCertFile?: string;
  /**
  * Maximum TTL for secret leases requested by this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#max_lease_ttl_seconds VaultProvider#max_lease_ttl_seconds}
  */
  readonly maxLeaseTtlSeconds?: number;
  /**
  * Maximum number of retries when a 5xx error code is encountered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#max_retries VaultProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Maximum number of retries for Client Controlled Consistency related operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#max_retries_ccc VaultProvider#max_retries_ccc}
  */
  readonly maxRetriesCcc?: number;
  /**
  * The namespace to use. Available only for Vault Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * In the case where the Vault token is for a specific namespace and the provider namespace is not configured, use the token namespace as the root namespace for all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#set_namespace_from_token VaultProvider#set_namespace_from_token}
  */
  readonly setNamespaceFromToken?: boolean | cdktf.IResolvable;
  /**
  * Set this to true to prevent the creation of ephemeral child token used by this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#skip_child_token VaultProvider#skip_child_token}
  */
  readonly skipChildToken?: boolean | cdktf.IResolvable;
  /**
  * Skip the dynamic fetching of the Vault server version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#skip_get_vault_version VaultProvider#skip_get_vault_version}
  */
  readonly skipGetVaultVersion?: boolean | cdktf.IResolvable;
  /**
  * Set this to true only if the target Vault server is an insecure development instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#skip_tls_verify VaultProvider#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Name to use as the SNI host when connecting via TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#tls_server_name VaultProvider#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Token to use to authenticate to Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#token VaultProvider#token}
  */
  readonly token?: string;
  /**
  * Token name to use for creating the Vault child token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#token_name VaultProvider#token_name}
  */
  readonly tokenName?: string;
  /**
  * Override the Vault server version, which is normally determined dynamically from the target Vault server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#vault_version_override VaultProvider#vault_version_override}
  */
  readonly vaultVersionOverride?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#alias VaultProvider#alias}
  */
  readonly alias?: string;
  /**
  * auth_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login VaultProvider#auth_login}
  */
  readonly authLogin?: VaultProviderAuthLogin;
  /**
  * auth_login_aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_aws VaultProvider#auth_login_aws}
  */
  readonly authLoginAws?: VaultProviderAuthLoginAws;
  /**
  * auth_login_azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_azure VaultProvider#auth_login_azure}
  */
  readonly authLoginAzure?: VaultProviderAuthLoginAzure;
  /**
  * auth_login_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_cert VaultProvider#auth_login_cert}
  */
  readonly authLoginCert?: VaultProviderAuthLoginCert;
  /**
  * auth_login_gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_gcp VaultProvider#auth_login_gcp}
  */
  readonly authLoginGcp?: VaultProviderAuthLoginGcp;
  /**
  * auth_login_jwt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_jwt VaultProvider#auth_login_jwt}
  */
  readonly authLoginJwt?: VaultProviderAuthLoginJwt;
  /**
  * auth_login_kerberos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_kerberos VaultProvider#auth_login_kerberos}
  */
  readonly authLoginKerberos?: VaultProviderAuthLoginKerberos;
  /**
  * auth_login_oci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_oci VaultProvider#auth_login_oci}
  */
  readonly authLoginOci?: VaultProviderAuthLoginOci;
  /**
  * auth_login_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_oidc VaultProvider#auth_login_oidc}
  */
  readonly authLoginOidc?: VaultProviderAuthLoginOidc;
  /**
  * auth_login_radius block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_radius VaultProvider#auth_login_radius}
  */
  readonly authLoginRadius?: VaultProviderAuthLoginRadius;
  /**
  * auth_login_token_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_token_file VaultProvider#auth_login_token_file}
  */
  readonly authLoginTokenFile?: VaultProviderAuthLoginTokenFile;
  /**
  * auth_login_userpass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_login_userpass VaultProvider#auth_login_userpass}
  */
  readonly authLoginUserpass?: VaultProviderAuthLoginUserpass;
  /**
  * client_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#client_auth VaultProvider#client_auth}
  */
  readonly clientAuth?: VaultProviderClientAuth;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#headers VaultProvider#headers}
  */
  readonly headers?: VaultProviderHeaders[] | cdktf.IResolvable;
}
export interface VaultProviderAuthLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#method VaultProvider#method}
  */
  readonly method?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#parameters VaultProvider#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#path VaultProvider#path}
  */
  readonly path: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginToHclTerraform(struct?: VaultProviderAuthLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginAws {
  /**
  * The AWS access key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_access_key_id VaultProvider#aws_access_key_id}
  */
  readonly awsAccessKeyId?: string;
  /**
  * The IAM endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_iam_endpoint VaultProvider#aws_iam_endpoint}
  */
  readonly awsIamEndpoint?: string;
  /**
  * The name of the AWS profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_profile VaultProvider#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * The AWS region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_region VaultProvider#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The ARN of the AWS Role to assume.Used during STS AssumeRole
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_role_arn VaultProvider#aws_role_arn}
  */
  readonly awsRoleArn?: string;
  /**
  * Specifies the name to attach to the AWS role session. Used during STS AssumeRole
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_role_session_name VaultProvider#aws_role_session_name}
  */
  readonly awsRoleSessionName?: string;
  /**
  * The AWS secret access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_secret_access_key VaultProvider#aws_secret_access_key}
  */
  readonly awsSecretAccessKey?: string;
  /**
  * The AWS session token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_session_token VaultProvider#aws_session_token}
  */
  readonly awsSessionToken?: string;
  /**
  * Path to the AWS shared credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_shared_credentials_file VaultProvider#aws_shared_credentials_file}
  */
  readonly awsSharedCredentialsFile?: string;
  /**
  * The STS endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_sts_endpoint VaultProvider#aws_sts_endpoint}
  */
  readonly awsStsEndpoint?: string;
  /**
  * Path to the file containing an OAuth 2.0 access token or OpenID Connect ID token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#aws_web_identity_token_file VaultProvider#aws_web_identity_token_file}
  */
  readonly awsWebIdentityTokenFile?: string;
  /**
  * The Vault header value to include in the STS signing request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#header_value VaultProvider#header_value}
  */
  readonly headerValue?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The Vault role to use when logging into Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginAwsToHclTerraform(struct?: VaultProviderAuthLoginAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_iam_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.awsIamEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_profile: {
      value: cdktf.stringToHclTerraform(struct!.awsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_session_name: {
      value: cdktf.stringToHclTerraform(struct!.awsRoleSessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_session_token: {
      value: cdktf.stringToHclTerraform(struct!.awsSessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_shared_credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.awsSharedCredentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sts_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.awsStsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_web_identity_token_file: {
      value: cdktf.stringToHclTerraform(struct!.awsWebIdentityTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginAzure {
  /**
  * The identity's client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#client_id VaultProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * A signed JSON Web Token. If not specified on will be created automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#jwt VaultProvider#jwt}
  */
  readonly jwt?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The resource group for the machine that generated the MSI token. This information can be obtained through instance metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#resource_group_name VaultProvider#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Name of the login role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * The scopes to include in the token request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#scope VaultProvider#scope}
  */
  readonly scope?: string;
  /**
  * The subscription ID for the machine that generated the MSI token. This information can be obtained through instance metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#subscription_id VaultProvider#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Provides the tenant ID to use in a multi-tenant authentication scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#tenant_id VaultProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
  /**
  * The virtual machine name for the machine that generated the MSI token. This information can be obtained through instance metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#vm_name VaultProvider#vm_name}
  */
  readonly vmName?: string;
  /**
  * The virtual machine scale set name for the machine that generated the MSI token. This information can be obtained through instance metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#vmss_name VaultProvider#vmss_name}
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
    vmss_name: cdktf.stringToTerraform(struct!.vmssName),
  }
}


export function vaultProviderAuthLoginAzureToHclTerraform(struct?: VaultProviderAuthLoginAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt: {
      value: cdktf.stringToHclTerraform(struct!.jwt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmss_name: {
      value: cdktf.stringToHclTerraform(struct!.vmssName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginCert {
  /**
  * Path to a file containing the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#cert_file VaultProvider#cert_file}
  */
  readonly certFile: string;
  /**
  * Path to a file containing the private key that the certificate was issued for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#key_file VaultProvider#key_file}
  */
  readonly keyFile: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * Name of the certificate's role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#name VaultProvider#name}
  */
  readonly name?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginCertToHclTerraform(struct?: VaultProviderAuthLoginCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginGcp {
  /**
  * Path to the Google Cloud credentials file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#credentials VaultProvider#credentials}
  */
  readonly credentials?: string;
  /**
  * A signed JSON Web Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#jwt VaultProvider#jwt}
  */
  readonly jwt?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * IAM service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#service_account VaultProvider#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginGcpToHclTerraform(struct?: VaultProviderAuthLoginGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt: {
      value: cdktf.stringToHclTerraform(struct!.jwt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginJwt {
  /**
  * A signed JSON Web Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#jwt VaultProvider#jwt}
  */
  readonly jwt: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginJwtToHclTerraform(struct?: VaultProviderAuthLoginJwt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwt: {
      value: cdktf.stringToHclTerraform(struct!.jwt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginKerberos {
  /**
  * Disable the Kerberos FAST negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#disable_fast_negotiation VaultProvider#disable_fast_negotiation}
  */
  readonly disableFastNegotiation?: boolean | cdktf.IResolvable;
  /**
  * The Kerberos keytab file containing the entry of the login entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#keytab_path VaultProvider#keytab_path}
  */
  readonly keytabPath?: string;
  /**
  * A valid Kerberos configuration file e.g. /etc/krb5.conf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#krb5conf_path VaultProvider#krb5conf_path}
  */
  readonly krb5ConfPath?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The Kerberos server's authoritative authentication domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#realm VaultProvider#realm}
  */
  readonly realm?: string;
  /**
  * Strip the host from the username found in the keytab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#remove_instance_name VaultProvider#remove_instance_name}
  */
  readonly removeInstanceName?: boolean | cdktf.IResolvable;
  /**
  * The service principle name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#service VaultProvider#service}
  */
  readonly service?: string;
  /**
  * Simple and Protected GSSAPI Negotiation Mechanism (SPNEGO) token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#token VaultProvider#token}
  */
  readonly token?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
  /**
  * The username to login into Kerberos with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#username VaultProvider#username}
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vaultProviderAuthLoginKerberosToHclTerraform(struct?: VaultProviderAuthLoginKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_fast_negotiation: {
      value: cdktf.booleanToHclTerraform(struct!.disableFastNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keytab_path: {
      value: cdktf.stringToHclTerraform(struct!.keytabPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    krb5conf_path: {
      value: cdktf.stringToHclTerraform(struct!.krb5ConfPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_instance_name: {
      value: cdktf.booleanToHclTerraform(struct!.removeInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginOci {
  /**
  * Authentication type to use when getting OCI credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#auth_type VaultProvider#auth_type}
  */
  readonly authType: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginOciToHclTerraform(struct?: VaultProviderAuthLoginOci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginOidc {
  /**
  * The callback address. Must be a valid URI without the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#callback_address VaultProvider#callback_address}
  */
  readonly callbackAddress?: string;
  /**
  * The callback listener's address. Must be a valid URI without the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#callback_listener_address VaultProvider#callback_listener_address}
  */
  readonly callbackListenerAddress?: string;
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Name of the login role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#role VaultProvider#role}
  */
  readonly role: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginOidcToHclTerraform(struct?: VaultProviderAuthLoginOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    callback_address: {
      value: cdktf.stringToHclTerraform(struct!.callbackAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    callback_listener_address: {
      value: cdktf.stringToHclTerraform(struct!.callbackListenerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginRadius {
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * The Radius password for username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#password VaultProvider#password}
  */
  readonly password: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
  /**
  * The Radius username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#username VaultProvider#username}
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vaultProviderAuthLoginRadiusToHclTerraform(struct?: VaultProviderAuthLoginRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginTokenFile {
  /**
  * The name of a file containing a single line that is a valid Vault token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#filename VaultProvider#filename}
  */
  readonly filename: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
}

export function vaultProviderAuthLoginTokenFileToTerraform(struct?: VaultProviderAuthLoginTokenFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
  }
}


export function vaultProviderAuthLoginTokenFileToHclTerraform(struct?: VaultProviderAuthLoginTokenFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderAuthLoginUserpass {
  /**
  * The path where the authentication engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#mount VaultProvider#mount}
  */
  readonly mount?: string;
  /**
  * The authentication engine's namespace. Conflicts with use_root_namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#namespace VaultProvider#namespace}
  */
  readonly namespace?: string;
  /**
  * Login with password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#password VaultProvider#password}
  */
  readonly password?: string;
  /**
  * Login with password from a file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#password_file VaultProvider#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Authenticate to the root Vault namespace. Conflicts with namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#use_root_namespace VaultProvider#use_root_namespace}
  */
  readonly useRootNamespace?: boolean | cdktf.IResolvable;
  /**
  * Login with username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#username VaultProvider#username}
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
    use_root_namespace: cdktf.booleanToTerraform(struct!.useRootNamespace),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vaultProviderAuthLoginUserpassToHclTerraform(struct?: VaultProviderAuthLoginUserpass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount: {
      value: cdktf.stringToHclTerraform(struct!.mount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_file: {
      value: cdktf.stringToHclTerraform(struct!.passwordFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_root_namespace: {
      value: cdktf.booleanToHclTerraform(struct!.useRootNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderClientAuth {
  /**
  * Path to a file containing the client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#cert_file VaultProvider#cert_file}
  */
  readonly certFile?: string;
  /**
  * Path to a file containing the private key that the certificate was issued for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#key_file VaultProvider#key_file}
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


export function vaultProviderClientAuthToHclTerraform(struct?: VaultProviderClientAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface VaultProviderHeaders {
  /**
  * The header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#name VaultProvider#name}
  */
  readonly name: string;
  /**
  * The header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#value VaultProvider#value}
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


export function vaultProviderHeadersToHclTerraform(struct?: VaultProviderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs vault}
*/
export class VaultProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VaultProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VaultProvider to import
  * @param importFromId The id of the existing VaultProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VaultProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/3.24.0/docs vault} Resource
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
        providerVersion: '3.24.0',
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
    this._setNamespaceFromToken = config.setNamespaceFromToken;
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
    this._authLoginTokenFile = config.authLoginTokenFile;
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

  // set_namespace_from_token - computed: false, optional: true, required: false
  private _setNamespaceFromToken?: boolean | cdktf.IResolvable; 
  public get setNamespaceFromToken() {
    return this._setNamespaceFromToken;
  }
  public set setNamespaceFromToken(value: boolean | cdktf.IResolvable | undefined) {
    this._setNamespaceFromToken = value;
  }
  public resetSetNamespaceFromToken() {
    this._setNamespaceFromToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setNamespaceFromTokenInput() {
    return this._setNamespaceFromToken;
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

  // auth_login_token_file - computed: false, optional: true, required: false
  private _authLoginTokenFile?: VaultProviderAuthLoginTokenFile; 
  public get authLoginTokenFile() {
    return this._authLoginTokenFile;
  }
  public set authLoginTokenFile(value: VaultProviderAuthLoginTokenFile | undefined) {
    this._authLoginTokenFile = value;
  }
  public resetAuthLoginTokenFile() {
    this._authLoginTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authLoginTokenFileInput() {
    return this._authLoginTokenFile;
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
      set_namespace_from_token: cdktf.booleanToTerraform(this._setNamespaceFromToken),
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
      auth_login_token_file: vaultProviderAuthLoginTokenFileToTerraform(this._authLoginTokenFile),
      auth_login_userpass: vaultProviderAuthLoginUserpassToTerraform(this._authLoginUserpass),
      client_auth: vaultProviderClientAuthToTerraform(this._clientAuth),
      headers: cdktf.listMapper(vaultProviderHeadersToTerraform, true)(this._headers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_address_to_env: {
        value: cdktf.stringToHclTerraform(this._addAddressToEnv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert_dir: {
        value: cdktf.stringToHclTerraform(this._caCertDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert_file: {
        value: cdktf.stringToHclTerraform(this._caCertFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_lease_ttl_seconds: {
        value: cdktf.numberToHclTerraform(this._maxLeaseTtlSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries_ccc: {
        value: cdktf.numberToHclTerraform(this._maxRetriesCcc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_namespace_from_token: {
        value: cdktf.booleanToHclTerraform(this._setNamespaceFromToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_child_token: {
        value: cdktf.booleanToHclTerraform(this._skipChildToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_get_vault_version: {
        value: cdktf.booleanToHclTerraform(this._skipGetVaultVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_tls_verify: {
        value: cdktf.booleanToHclTerraform(this._skipTlsVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_server_name: {
        value: cdktf.stringToHclTerraform(this._tlsServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_name: {
        value: cdktf.stringToHclTerraform(this._tokenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_version_override: {
        value: cdktf.stringToHclTerraform(this._vaultVersionOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_login: {
        value: vaultProviderAuthLoginToHclTerraform(this._authLogin),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginList",
      },
      auth_login_aws: {
        value: vaultProviderAuthLoginAwsToHclTerraform(this._authLoginAws),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginAwsList",
      },
      auth_login_azure: {
        value: vaultProviderAuthLoginAzureToHclTerraform(this._authLoginAzure),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginAzureList",
      },
      auth_login_cert: {
        value: vaultProviderAuthLoginCertToHclTerraform(this._authLoginCert),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginCertList",
      },
      auth_login_gcp: {
        value: vaultProviderAuthLoginGcpToHclTerraform(this._authLoginGcp),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginGcpList",
      },
      auth_login_jwt: {
        value: vaultProviderAuthLoginJwtToHclTerraform(this._authLoginJwt),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginJwtList",
      },
      auth_login_kerberos: {
        value: vaultProviderAuthLoginKerberosToHclTerraform(this._authLoginKerberos),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginKerberosList",
      },
      auth_login_oci: {
        value: vaultProviderAuthLoginOciToHclTerraform(this._authLoginOci),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginOciList",
      },
      auth_login_oidc: {
        value: vaultProviderAuthLoginOidcToHclTerraform(this._authLoginOidc),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginOidcList",
      },
      auth_login_radius: {
        value: vaultProviderAuthLoginRadiusToHclTerraform(this._authLoginRadius),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginRadiusList",
      },
      auth_login_token_file: {
        value: vaultProviderAuthLoginTokenFileToHclTerraform(this._authLoginTokenFile),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginTokenFileList",
      },
      auth_login_userpass: {
        value: vaultProviderAuthLoginUserpassToHclTerraform(this._authLoginUserpass),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderAuthLoginUserpassList",
      },
      client_auth: {
        value: vaultProviderClientAuthToHclTerraform(this._clientAuth),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderClientAuthList",
      },
      headers: {
        value: cdktf.listMapperHcl(vaultProviderHeadersToHclTerraform, true)(this._headers),
        isBlock: true,
        type: "list",
        storageClassType: "VaultProviderHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
