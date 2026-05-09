<template>
  <div class="min-h-screen bg-slate-50 flex">
    <!-- Left Pane: Branding (Hidden on mobile) -->
    <div class="hidden lg:flex lg:w-1/2 bg-slate-900 relative items-center justify-center overflow-hidden">
      <!-- Decorative background elements -->
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-slate-900 z-0"></div>
      <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl z-0"></div>
      <div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent z-0"></div>
      
      <div class="relative z-10 px-12 text-center max-w-lg">
        <h1 class="text-4xl font-bold text-white mb-6">CRM Enterprise</h1>
        <p class="text-lg text-slate-300">
          Streamline your sales pipeline, manage leads efficiently, and grow your business with our cutting-edge command center.
        </p>
        
        <!-- UI Mockup Graphic (Abstract) -->
        <div class="mt-12 p-4 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm shadow-2xl">
          <div class="flex gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-slate-600"></div>
            <div class="w-3 h-3 rounded-full bg-slate-600"></div>
            <div class="w-3 h-3 rounded-full bg-slate-600"></div>
          </div>
          <div class="space-y-3">
            <div class="h-4 bg-slate-700 rounded w-3/4"></div>
            <div class="h-4 bg-slate-700 rounded w-1/2"></div>
            <div class="h-4 bg-slate-700 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Right Pane: Auth Forms -->
    <div class="flex-1 flex items-center justify-center p-6 sm:p-12 relative">
      <div class="w-full max-w-md">
        <!-- Mobile Logo -->
        <div class="lg:hidden text-center mb-8">
          <h2 class="text-3xl font-extrabold text-slate-900">CRM Enterprise</h2>
        </div>
        
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
