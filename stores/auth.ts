import { defineStore } from 'pinia';
import { useCookie } from '#imports';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    isAuthenticated: false,
    isLoading: false,
  }),
  
  getters: {
    userName: (state) => state.user?.name || 'Guest',
    userInitials: (state) => {
      if (!state.user?.name) return '??';
      const names = state.user.name.split(' ');
      return names.length > 1 
        ? `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
        : state.user.name.slice(0, 2).toUpperCase();
    }
  },
  
  actions: {
    async initAuth() {
      const token = useCookie('auth_token');
      if (token.value) {
        // Here you would normally fetch the user from API using the token
        this.isAuthenticated = true;
        this.user = {
          id: '1',
          name: 'Admin User',
          email: 'admin@crmenterprise.com',
          role: 'admin'
        };
      }
    },
    
    async login(email: string, password: string, rememberMe: boolean = false) {
      this.isLoading = true;
      // MUST call useCookie synchronously before any await to prevent Nuxt instance loss
      const token = useCookie('auth_token', { 
        maxAge: rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24, // 30 days or 1 day
        path: '/'
      });
      
      try {
        // Mock API call
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (email && password.length >= 6) {
              resolve(true);
            } else {
              reject(new Error('Invalid credentials'));
            }
          }, 1000);
        });
        
        // Success
        this.isAuthenticated = true;
        this.user = {
          id: '1',
          name: 'Admin User',
          email,
          role: 'admin'
        };
        
        // Set cookie value after await
        token.value = 'mock-jwt-token-12345';
        
        return true;
      } catch (error) {
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    async signup(name: string, email: string, password: string) {
      this.isLoading = true;
      
      try {
        // Mock API call
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (name && email && password.length >= 8) {
              resolve(true);
            } else {
              reject(new Error('Validation failed'));
            }
          }, 1500);
        });
        
        return true;
      } catch (error) {
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
    
    async logout() {
      // MUST call useCookie synchronously
      const token = useCookie('auth_token');
      
      // Clear state
      this.isAuthenticated = false;
      this.user = null;
      
      // Clear cookie
      token.value = null;
    }
  }
});
