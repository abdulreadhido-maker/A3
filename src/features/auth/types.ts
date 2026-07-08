export interface AuthUser {

  id: string;

  name: string;

  email: string;

  avatar?: string;

  role: "admin" | "user" | "student" | "developer";

}



export interface LoginRequest {

  email: string;

  password: string;

}



export interface RegisterRequest {

  name: string;

  email: string;

  password: string;

  confirmPassword: string;

}



export interface AuthResponse {

  user: AuthUser;

  accessToken: string;

  refreshToken: string;

}



export interface ForgotPasswordRequest {

  email: string;

}



export interface ResetPasswordRequest {

  token: string;

  password: string;

  confirmPassword: string;

}
