# Description
Modular GSSC PoC using symbolic links

# Add Modules soft links from src/app
Create symbolic links in the paretn project

```bash
ln -s ../../../gscc-poc-cp-gsbi/src gsbi
ln -s ../../../gscc-poc-cp-gspl/src gspl
```

# Lazy load soft links modules from app-routing.module.ts
Add Lazy load routing for the modules included
```javascript
...
  { path: 'gsbi', loadChildren: () => import('./gsbi/gsbi.module').then(m => m.GsbiModule) },
  { path: 'gspl', loadChildren: () => import('./gspl/gspl.module').then(m => m.GsplModule) },  
...
```

# Modify build options from angular.json to preserve soft links compilation
Add preserveSymlinks in angular.js file to compile angular project

```javascript
    "preserveSymlinks": true,
```