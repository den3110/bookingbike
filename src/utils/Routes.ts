/**
 * Enum representing the available routes in the application.
 */
export enum Routes {
  Home = 'Home',
  Login = 'Login',
  Profile = 'Profile',
  Settings = 'Settings',
  Post = 'Post',
  Welcome= "Welcome",
  Register= "Register",
  VerifyOtp= "VerifyOtp",
  RegistrationComplete= "RegistrationComplete",
  CreatePassword= "CreatePassword",
  VerifyPassword= "VerifyPassword"
}

/**
 * Represents the parameter types for the root stack navigation.
 */
export type RootStackParams = {
  [Routes.Home]: undefined;
  [Routes.Login]: undefined;
  [Routes.Welcome]: undefined;
  [Routes.VerifyOtp]: undefined;
  [Routes.RegistrationComplete]: undefined;
  [Routes.CreatePassword]: undefined
  [Routes.VerifyPassword]: undefined
};

/**
 * Represents the parameter types for the profile stack routes.
 */
export type ProfileStackParams = {
  [Routes.Profile]: undefined;
  [Routes.Settings]: undefined;
  [Routes.Post]: { id: string, username: string };
};

/**
 * Represents the navigation parameters for the root stack.
 */
export type NavigationParams = RootStackParams;

export default Routes
